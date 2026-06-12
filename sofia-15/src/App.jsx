import { useState, useRef, useEffect } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import StarryNight from './components/Background/StarryNight'
import Navbar from './components/ui/Navbar'
import Welcome from './components/ui/Welcome'
import Hero from './components/sections/Hero'
import Story from './components/sections/Story'
import Details from './components/sections/Details'
import Programa from './components/sections/Programa'
import DressCode from './components/sections/DressCode'
import LluviaDeSobres from './components/sections/LluviaDeSobres'
import Indicaciones from './components/sections/Indicaciones'
import Confirmacion from './components/sections/Confirmacion'

// La canción vive en public/musica.mp3 — si el archivo no existe,
// el botón de música simplemente no se muestra
const MUSIC_URL = `${import.meta.env.BASE_URL}musica.mp3`

function App() {
  const [opened, setOpened] = useState(false)     // el invitado ya abrió la invitación
  const [gateGone, setGateGone] = useState(false) // la portada terminó su fade-out
  const [musicAvailable, setMusicAvailable] = useState(false)
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef(null)

  // Desvanecer y eliminar el loader estático de index.html al montar React
  useEffect(() => {
    const loader = document.getElementById('app-loader')
    if (!loader) return
    loader.classList.add('done')
    const t = setTimeout(() => loader.remove(), 700)
    return () => clearTimeout(t)
  }, [])

  // Detectar si la canción existe (HEAD evita descargarla solo para saberlo)
  useEffect(() => {
    let cancelled = false
    fetch(MUSIC_URL, { method: 'HEAD' })
      .then(res => {
        const type = res.headers.get('content-type') || ''
        if (!cancelled && res.ok && type.includes('audio')) setMusicAvailable(true)
      })
      .catch(() => {})
    return () => { cancelled = true }
  }, [])

  // Bloquear el scroll mientras la portada está cerrada
  useEffect(() => {
    document.body.style.overflow = opened ? '' : 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [opened])

  const handleOpen = () => {
    if (opened) return
    setOpened(true)

    // Iniciar la música dentro del gesto del usuario (los navegadores
    // bloquean el autoplay sin interacción)
    const audio = audioRef.current
    if (audio && musicAvailable) {
      audio.volume = 0.45
      audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false))
    }

    setTimeout(() => setGateGone(true), 900)
  }

  const toggleMusic = () => {
    const audio = audioRef.current
    if (!audio) return
    if (audio.paused) {
      audio.play().then(() => setPlaying(true)).catch(() => {})
    } else {
      audio.pause()
      setPlaying(false)
    }
  }

  return (
    <div className={opened ? 'app-opened' : undefined} style={{ position: 'relative' }}>
      <StarryNight />
      <Navbar />
      <Hero />
      <Story />
      <Details />
      <Programa />
      <DressCode />
      <LluviaDeSobres />
      <Indicaciones />
      <Confirmacion />

      {musicAvailable && (
        <audio ref={audioRef} src={MUSIC_URL} loop preload="auto" onError={() => setMusicAvailable(false)} />
      )}

      {musicAvailable && opened && (
        <button
          className="music-btn"
          onClick={toggleMusic}
          aria-label={playing ? 'Silenciar música' : 'Reproducir música'}
        >
          {playing ? <Volume2 size={20} /> : <VolumeX size={20} />}
        </button>
      )}

      {!gateGone && <Welcome closed={opened} onOpen={handleOpen} />}
    </div>
  )
}

export default App
