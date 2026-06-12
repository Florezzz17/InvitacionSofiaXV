// src/components/ui/Welcome.jsx
// Portada de apertura: cubre toda la pantalla hasta que el invitado toca
// "Abrir invitación". Ese primer toque también habilita el giroscopio en iOS
// y permite iniciar la música de fondo (los navegadores exigen un gesto).
import vanGoghBg from '../../assets/starry-night.jpg'

export default function Welcome({ closed, onOpen }) {
  return (
    <div
      className={`gate${closed ? ' closed' : ''}`}
      onClick={onOpen}
      style={{ backgroundImage: `url(${vanGoghBg})` }}
    >
      {/* Velo oscuro sobre la pintura */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(5, 11, 31, 0.85)',
      }} />

      <div style={{ position: 'relative', maxWidth: '480px' }}>
        <div style={{
          fontSize: '2.8rem',
          marginBottom: '1.25rem',
          animation: 'float 3s ease-in-out infinite',
        }}>
          ✨
        </div>

        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          color: 'rgba(245,230,66,0.8)',
          fontSize: 'clamp(0.75rem, 2vw, 0.9rem)',
          letterSpacing: '0.45em',
          textTransform: 'uppercase',
          marginBottom: '1.25rem',
        }}>
          — Tienes una invitación —
        </p>

        <h1 style={{
          fontFamily: "'Cinzel Decorative', cursive",
          color: '#ffffff',
          fontSize: 'clamp(1.7rem, 6vw, 2.8rem)',
          lineHeight: 1.2,
          marginBottom: '0.75rem',
          textShadow: '0 0 50px rgba(245, 230, 66, 0.8), 0 2px 16px rgba(0,0,0,0.8)',
        }}>
          XV Años de Sofía
        </h1>

        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          color: '#f5e642',
          fontSize: 'clamp(1rem, 3vw, 1.25rem)',
          marginBottom: '2rem',
        }}>
          19 de Diciembre · 2026
        </p>

        <div style={{
          width: '70px', height: '1px',
          background: 'linear-gradient(90deg, transparent, rgb(245, 230, 66), transparent)',
          margin: '0 auto 2rem',
        }} />

        <button className="btn-gold" onClick={onOpen} style={{ fontSize: 'clamp(0.8rem, 2vw, 0.95rem)' }}>
          Abrir Invitación ✨
        </button>

        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          color: 'rgba(255,255,255,0.5)',
          fontSize: '0.8rem',
          letterSpacing: '0.1em',
          marginTop: '1.5rem',
        }}>
          Activa el sonido para vivir la experiencia completa
        </p>
      </div>
    </div>
  )
}
