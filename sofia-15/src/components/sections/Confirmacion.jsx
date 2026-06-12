// src/components/sections/Confirmacion.jsx
import { useState } from 'react'
import { Star } from 'lucide-react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { GUEST } from '../../utils/guest'

function StarParticle({ style }) {
  return (
    <div style={{
      position: 'fixed',
      pointerEvents: 'none',
      zIndex: 999,
      animation: 'starFall 2.5s ease-out forwards',
      ...style,
    }}>
      ⭐
    </div>
  )
}

export default function Confirmacion() {
  const { ref, visible } = useScrollReveal()
  const [confirmado, setConfirmado] = useState(false)
  const [particles, setParticles] = useState([])

  const handleConfirmar = () => {
    // 1. Abrir WhatsApp INMEDIATAMENTE (mismo hilo del click, evita el
    // bloqueo de popups de Safari)
    const numero = '573184153751'
    // Mensaje personalizado si la invitación trae nombre (?i=...) y cupos (&c=...)
    const cupos = GUEST.cupos
      ? ` (${GUEST.cupos} ${GUEST.cupos === 1 ? 'persona' : 'personas'})`
      : ''
    const mensaje = encodeURIComponent(
      GUEST.name
        ? `¡Hola! Confirmo la asistencia de ${GUEST.name}${cupos} a los XV años de Sofía el 19 de Diciembre de 2026. ¡Nos vemos pronto! 🌟`
        : '¡Hola! Confirmo mi asistencia y la de mis acompañantes a los XV años de Sofía el 19 de Diciembre de 2026. ¡Nos vemos pronto! 🌟'
    )
    window.open(`https://wa.me/${numero}?text=${mensaje}`, '_blank')

    // 2. Mostrar animación después
    const newParticles = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}vw`,
      top: `${Math.random() * -20}vh`,
      fontSize: `${Math.random() * 1.5 + 0.8}rem`,
      animationDelay: `${Math.random() * 1.5}s`,
      animationDuration: `${Math.random() * 1.5 + 1.5}s`,
    }))
    setParticles(newParticles)
    setConfirmado(true)
    setTimeout(() => setParticles([]), 4000)
  }

  const handleReset = () => {
    setConfirmado(false)
    setParticles([])
  }

  return (
    <section ref={ref} id="confirmacion" style={{
      minHeight: '100vh',
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(28px)',
      transition: 'opacity 0.8s ease, transform 0.8s ease',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '5rem 2rem',
    }}>

      {/* Partículas de estrellas */}
      {particles.length > 0 && <div aria-hidden="true">{particles.map((p) => (
        <StarParticle key={p.id} style={{
          left: p.left,
          top: p.top,
          fontSize: p.fontSize,
          animationDelay: p.animationDelay,
          animationDuration: p.animationDuration,
        }} />
      ))}</div>}

      {/* Tarjeta */}
      <div className="glass" style={{
        background: 'rgba(5, 11, 31, 0.6)',
        border: '1px solid rgba(245,230,66,0.25)',
        borderRadius: '24px',
        padding: 'clamp(2rem, 5vw, 4rem) clamp(1.5rem, 5vw, 4rem)',
        maxWidth: '560px',
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 8px 60px rgba(0,0,0,0.5)',
        transition: 'all 0.5s ease',
      }}>

        {!confirmado ? (
          <>
            {/* Estado inicial */}
            <div style={{
              width: '72px', height: '72px',
              background: 'rgba(245,230,66,0.1)',
              border: '1px solid rgba(245,230,66,0.3)',
              borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 1.5rem',
              animation: 'float 3s ease-in-out infinite',
            }}>
              <Star size={32} color="#f5e642" />
            </div>

            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: 'rgb(245, 230, 66)',
              fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
              letterSpacing: '0.45em',
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
            }}>— Confirma tu asistencia —</p>

            {GUEST.name && (
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: 'italic',
                color: '#f5e642',
                fontSize: 'clamp(1.05rem, 3vw, 1.3rem)',
                marginBottom: '0.75rem',
              }}>
                {GUEST.name}
              </p>
            )}

            <h2 style={{
              fontFamily: "'Cinzel Decorative', cursive",
              color: '#ffffff',
              fontSize: 'clamp(1.6rem, 4vw, 2.5rem)',
              textShadow: '0 0 40px rgb(245, 230, 66)',
              marginBottom: '1rem',
              lineHeight: 1.2,
            }}>
              ¿Nos acompañas?
            </h2>

            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: 'rgb(255, 255, 255)',
              fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
              lineHeight: 1.8,
              marginBottom: '1rem',
            }}>
              Tu presencia hará esta noche<br/>
              aún más especial para <span style={{ color: '#f5e642', fontStyle: 'italic' }}>Sofía</span>.
            </p>

            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              color: 'rgba(245,230,66,0.75)',
              fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
              letterSpacing: '0.05em',
              marginBottom: '2.5rem',
            }}>
              Por favor confirma antes del 1 de diciembre de 2026
            </p>

            {/* Botón confirmar */}
            <button
              onClick={handleConfirmar}
              className="btn-gold"
              style={{
                fontSize: 'clamp(0.8rem, 2vw, 1rem)',
                width: '100%',
                maxWidth: '320px',
              }}
            >
              ⭐ ¡Confirmo mi asistencia!
            </button>
          </>
        ) : (
          <>
            {/* Estado confirmado */}
            <div style={{
              fontSize: '4rem',
              marginBottom: '1rem',
              animation: 'popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
            }}>
              ⭐
            </div>

            <h2 style={{
              fontFamily: "'Cinzel Decorative', cursive",
              color: '#f5e642',
              fontSize: 'clamp(1.4rem, 4vw, 2rem)',
              textShadow: '0 0 40px rgb(245, 230, 66)',
              marginBottom: '1rem',
              animation: 'fadeInUp 0.6s ease 0.2s both',
            }}>
              ¡Nos vemos pronto!
            </h2>

            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: 'rgba(255,255,255,0.8)',
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              lineHeight: 1.8,
              marginBottom: '2rem',
              animation: 'fadeInUp 0.6s ease 0.4s both',
            }}>
              Sofía y su familia te esperan con los<br/>
              brazos abiertos el <span style={{ color: '#f5e642', fontStyle: 'italic' }}>19 de Diciembre</span>.<br/>
              ¡Será una noche inolvidable! 🌌
            </p>

            {/* Botón volver */}
            <button
              onClick={handleReset}
              className="btn-ghost"
              style={{ animation: 'fadeInUp 0.6s ease 0.6s both' }}
            >
              ← Volver
            </button>
          </>
        )}
      </div>

      {/* Footer de la página */}
      <p style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontStyle: 'italic',
        color: 'rgb(255, 255, 255)',
        fontSize: '0.8rem',
        marginTop: '3rem',
        letterSpacing: '0.1em',
        textAlign: 'center',
      }}>
        Con amor · Familia Florez Avendaño · 2026
      </p>
    </section>
  )
}