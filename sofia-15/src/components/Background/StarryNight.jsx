import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useDeviceOrientation } from '../../hooks/useDeviceOrientation'
import * as THREE from 'three'
import vanGoghBg from '../../assets/starry-night.jpg'

const COUNT = 400

const STAR_COLORS = [
  new THREE.Color('#ffffff'),
  new THREE.Color('#fff8e7'),
  new THREE.Color('#f5e642'),
  new THREE.Color('#ffd700'),
  new THREE.Color('#cce8ff'),
  new THREE.Color('#b8d4ff'),
]

// La misma fórmula que usa Three.js internamente con sizeAttenuation:true
// gl_PointSize = size * (projectionMatrix[1][1] * uHeight * 0.5) / -mvPosition.z
const vertexShader = `
  attribute float aSize;
  attribute float aPhase;
  attribute float aSpeed;
  attribute vec3  aColor;

  uniform float uTime;
  uniform float uHeight;
  uniform float uDpr;

  varying vec3  vColor;
  varying float vAlpha;

  void main() {
    vColor = aColor;
    float twinkle = 0.6 + 0.4 * sin(uTime * aSpeed + aPhase);
    vAlpha = twinkle;

    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPosition;

    float scale  = projectionMatrix[1][1] * uHeight * 0.5;
    gl_PointSize = aSize * twinkle * (scale / -mvPosition.z) * uDpr;
  }
`

const fragmentShader = `
  varying vec3  vColor;
  varying float vAlpha;

  void main() {
    vec2  uv   = gl_PointCoord - vec2(0.5);
    float dist = length(uv);
    if (dist > 0.5) discard;

    float core  = 1.0 - smoothstep(0.0, 0.15, dist);
    float halo  = (1.0 - smoothstep(0.15, 0.5, dist)) * 0.5;
    float alpha = (core + halo) * vAlpha;

    gl_FragColor = vec4(vColor, alpha);
  }
`

// Los datos de las estrellas se generan una sola vez al cargar el módulo
// (fuera del render, que debe ser puro)
function generateStarData() {
  const pos = new Float32Array(COUNT * 3)
  const col = new Float32Array(COUNT * 3)
  const siz = new Float32Array(COUNT)
  const phs = new Float32Array(COUNT)
  const spd = new Float32Array(COUNT)

  for (let i = 0; i < COUNT; i++) {
    pos[i * 3]     = (Math.random() - 0.5) * 30
    pos[i * 3 + 1] = (Math.random() - 0.5) * 15
    pos[i * 3 + 2] = (Math.random() - 0.5) * 5

    // Mismos rangos de tamaño que el original (0.14 era el valor único)
    // 75% pequeñas, 18% medianas, 7% brillantes
    const r = Math.random()
    siz[i] = r < 0.75 ? 0.30 + Math.random() * 0.20
            : r < 0.93 ? 0.60 + Math.random() * 0.30
            :             1.00 + Math.random() * 0.50

    const c = STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)]
    col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b

    phs[i] = Math.random() * Math.PI * 2
    spd[i] = 0.3 + Math.random() * 1.2
  }

  return { positions: pos, colors: col, sizes: siz, phases: phs, speeds: spd }
}

const STAR_DATA = generateStarData()

function AnimatedStars({ orientationRef }) {
  const pointsRef   = useRef()
  const materialRef = useRef()

  const { positions, colors, sizes, phases, speeds } = STAR_DATA

  const uniforms = useMemo(() => ({
    uTime:   { value: 0 },
    uHeight: { value: typeof window !== 'undefined' ? window.innerHeight : 800 },
    uDpr:    { value: typeof window !== 'undefined' ? (window.devicePixelRatio || 1) : 1 },
  }), [])

  useFrame(({ clock, gl, size }) => {
    if (!pointsRef.current || !materialRef.current) return

    materialRef.current.uniforms.uTime.value   = clock.getElapsedTime()
    materialRef.current.uniforms.uHeight.value = size.height
    materialRef.current.uniforms.uDpr.value    = gl.getPixelRatio()

    const lerpFactor = 0.04
    const { beta, gamma } = orientationRef.current
    const targetX = (gamma / 90) * 1.2
    const targetY = (beta  / 90) * 0.6
    pointsRef.current.position.x += (targetX - pointsRef.current.position.x) * lerpFactor
    pointsRef.current.position.y += (targetY - pointsRef.current.position.y) * lerpFactor
    pointsRef.current.rotation.z += 0.0002
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={COUNT} itemSize={3} />
        <bufferAttribute attach="attributes-aColor"   array={colors}    count={COUNT} itemSize={3} />
        <bufferAttribute attach="attributes-aSize"    array={sizes}     count={COUNT} itemSize={1} />
        <bufferAttribute attach="attributes-aPhase"   array={phases}    count={COUNT} itemSize={1} />
        <bufferAttribute attach="attributes-aSpeed"   array={speeds}    count={COUNT} itemSize={1} />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

// Estrellas fugaces ocasionales (CSS puro, muy baratas de animar)
const SHOOTING_STARS = [
  { top: '12%', left: '78%', duration: '13s', delay: '3s' },
  { top: '6%',  left: '45%', duration: '17s', delay: '9s' },
  { top: '22%', left: '92%', duration: '21s', delay: '15s' },
]

export default function StarryNight() {
  const { orientationRef } = useDeviceOrientation()

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: -1 }} aria-hidden="true">
      <div className="bg-kenburns" style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url(${vanGoghBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(5, 11, 31, 0.45)',
      }} />
      {SHOOTING_STARS.map((s, i) => (
        <div
          key={i}
          className="shooting-star"
          style={{ top: s.top, left: s.left, '--duration': s.duration, '--delay': s.delay }}
        />
      ))}
      <Canvas
        style={{ position: 'absolute', inset: 0 }}
        camera={{ position: [0, 0, 5], fov: 75 }}
        dpr={[1, 2]}
      >
        <AnimatedStars orientationRef={orientationRef} />
      </Canvas>
    </div>
  )
}
