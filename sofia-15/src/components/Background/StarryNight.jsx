// src/components/Background/StarryNight.jsx
import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useDeviceOrientation } from '../../hooks/useDeviceOrientation'
import * as THREE from 'three'
import vanGoghBg from '../../assets/starry-night.jpg'

const COLORS = {
  starYellow: new THREE.Color('#f5e642'),
  gold:       new THREE.Color('#ffd700'),
}

function AnimatedStars({ orientation }) {
  const ref = useRef()

  const { positions, colors } = useMemo(() => {
    const count = 150
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 30
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15
      pos[i * 3 + 2] = (Math.random() - 0.5) * 3
      const c = Math.random() > 0.4 ? COLORS.starYellow : COLORS.gold
      col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b
    }
    return { positions: pos, colors: col }
  }, [])

  useFrame(() => {
    if (!ref.current) return
    const lerpFactor = 0.04
    const targetX = (orientation.gamma / 90) * 1.2
    const targetY = (orientation.beta  / 90) * 0.6
    ref.current.position.x += (targetX - ref.current.position.x) * lerpFactor
    ref.current.position.y += (targetY - ref.current.position.y) * lerpFactor
    ref.current.rotation.z += 0.0002
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={150} itemSize={3} />
        <bufferAttribute attach="attributes-color"    array={colors}    count={150} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.14}
        vertexColors
        transparent
        opacity={0.9}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

function Scene({ orientation }) {
  return (
    <>
      <AnimatedStars orientation={orientation} />
    </>
  )
}

export default function StarryNight() {
  const { orientation } = useDeviceOrientation()

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: -1 }}>

      {/* Capa 1: La pintura de Van Gogh */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url(${vanGoghBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }} />

      {/* Capa 2: Overlay oscuro para que el texto se lea bien */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(5, 11, 31, 0.45)',
      }} />

      {/* Capa 3: Estrellas Three.js animadas encima */}
      <Canvas
        style={{ position: 'absolute', inset: 0 }}
        camera={{ position: [0, 0, 5], fov: 75 }}
        dpr={[1, 2]}
      >
        <Scene orientation={orientation} />
      </Canvas>

    </div>
  )
}