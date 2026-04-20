// src/components/sections/Confirmacion.jsx
import { useState } from 'react'
import { Star } from 'lucide-react'

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
  const [confirmado, setConfirmado] = useState(false)
  const [particles, setParticles] = useState([])

  const handleConfirmar = () => {
    // Lanzar animación de estrellas
    const newParticles = Array.from({ length: 150 }, (_, i) => ({
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

    // Redirigir a WhatsApp después de 1.5 segundos
    // 👇 Cambia el número por el tuyo (formato internacional sin + ni espacios)
    const numero = '573184153751'
    const mensaje = encodeURIComponent(
      '¡Hola! Confirmo mi asistencia y la de mis acompañantes a los XV años de Sofía Florez Avendaño el 16 de Diciembre de 2026. ¡Nos vemos pronto! 🌟'
    )
    setTimeout(() => {
      window.open(`https://wa.me/${numero}?text=${mensaje}`, '_blank')
    }, 1500)
  }

  const handleReset = () => {
    setConfirmado(false)
    setParticles([])
  }

  return (
    <section id="confirmacion" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '5rem 2rem',
    }}>

      {/* Partículas de estrellas */}
      {particles.map((p) => (
        <StarParticle key={p.id} style={{
          left: p.left,
          top: p.top,
          fontSize: p.fontSize,
          animationDelay: p.animationDelay,
          animationDuration: p.animationDuration,
        }} />
      ))}

      {/* Tarjeta */}
      <div style={{
        background: 'rgba(5, 11, 31, 0.6)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
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
              color: 'rgba(245,230,66,0.7)',
              fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
              letterSpacing: '0.45em',
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
            }}>— Confirma tu asistencia —</p>

            <h2 style={{
              fontFamily: "'Cinzel Decorative', cursive",
              color: '#ffffff',
              fontSize: 'clamp(1.6rem, 4vw, 2.5rem)',
              textShadow: '0 0 40px rgba(245,230,66,0.3)',
              marginBottom: '1rem',
              lineHeight: 1.2,
            }}>
              ¿Nos acompañas?
            </h2>

            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: 'rgba(255,255,255,0.7)',
              fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
              lineHeight: 1.8,
              marginBottom: '2.5rem',
            }}>
              Tu presencia hará esta noche<br/>
              aún más especial para <span style={{ color: '#f5e642', fontStyle: 'italic' }}>Sofía</span>.
            </p>

            {/* Botón confirmar */}
            <button
              onClick={handleConfirmar}
              style={{
                background: 'linear-gradient(135deg, rgba(245,230,66,0.2), rgba(245,230,66,0.1))',
                border: '1px solid rgba(245,230,66,0.5)',
                borderRadius: '16px',
                padding: '1rem 3rem',
                cursor: 'pointer',
                color: '#f5e642',
                fontFamily: "'Cinzel Decorative', cursive",
                fontSize: 'clamp(0.8rem, 2vw, 1rem)',
                letterSpacing: '0.15em',
                transition: 'all 0.3s',
                width: '100%',
                maxWidth: '320px',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(245,230,66,0.35), rgba(245,230,66,0.2))'
                e.currentTarget.style.boxShadow = '0 0 30px rgba(245,230,66,0.3)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(245,230,66,0.2), rgba(245,230,66,0.1))'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.transform = 'translateY(0)'
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
              style={{
                background: 'none',
                border: '1px solid rgb(255, 255, 255)',
                borderRadius: '12px',
                padding: '0.6rem 1.5rem',
                cursor: 'pointer',
                color: 'rgb(255, 255, 255)',
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '0.85rem',
                letterSpacing: '0.1em',
                transition: 'all 0.2s',
                animation: 'fadeInUp 0.6s ease 0.6s both',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'rgb(255, 255, 255)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgb(255, 255, 255)'}
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

      <style>{`
        @keyframes starFall {
          0%   { transform: translateY(0) rotate(0deg) scale(1); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg) scale(0.3); opacity: 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes popIn {
          0%   { transform: scale(0); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}