// src/components/sections/DressCode.jsx
import { Sparkles } from 'lucide-react'

const coloresPermitidos = [
  { color: '#1a1a2e', nombre: 'Negro' },
  { color: '#2d4a22', nombre: 'Verde Esmeralda' },
  { color: '#6b2737', nombre: 'Vino' },
  { color: '#8b6914', nombre: 'Dorado' },
  { color: '#4a2545', nombre: 'Morado' },
  { color: '#1a3a4a', nombre: 'Verde Azulado' },
  { color: '#c4a882', nombre: 'Champagne' },
  { color: '#2c2c2c', nombre: 'Gris Oscuro' },
]

export default function DressCode() {
  return (
    <section id="dresscode" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '5rem 2rem',
    }}>

      {/* Título */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          color: 'rgb(245, 230, 66)',
          fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
          letterSpacing: '0.45em',
          textTransform: 'uppercase',
          marginBottom: '0.75rem',
        }}>— Código de vestimenta —</p>
        <h2 style={{
          fontFamily: "'Cinzel Decorative', cursive",
          color: '#ffffff',
          fontSize: 'clamp(1.8rem, 5vw, 3rem)',
          textShadow: '0 0 40px rgb(245, 230, 66)',
        }}>Dress Code</h2>
      </div>

      <div style={{
        width: '100%',
        maxWidth: '700px',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
      }}>

        {/* Tarjeta principal: Formal */}
        <div style={{
          background: 'rgba(5, 11, 31, 0.6)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          border: '1px solid rgb(245, 230, 66)',
          borderRadius: '20px',
          padding: '2rem',
          textAlign: 'center',
        }}>
          <div style={{
            width: '64px', height: '64px',
            background: 'rgba(245, 230, 66, 0.01)',
            border: '1px solid rgb(245, 230, 66)',
            borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 1.25rem',
          }}>
            <Sparkles size={28} color="#f5e642" />
          </div>

          <h3 style={{
            fontFamily: "'Cinzel Decorative', cursive",
            color: '#f5e642',
            fontSize: 'clamp(1rem, 3vw, 1.4rem)',
            marginBottom: '0.75rem',
          }}>Vestimenta Formal</h3>

          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: 'rgb(255, 255, 255)',
            fontSize: 'clamp(1.5rem, 2.5vw, 1.15rem)',
            lineHeight: 1.8,
          }}>
            Los invitamos a asistir con vestimenta <span style={{ color: '#f5e642', fontStyle: 'italic' }}>elegante y formal</span>.
            Esta noche celebramos bajo las estrellas y queremos que todos brillen tanto como ellas.
          </p>
        </div>

        {/* Tarjeta: Color reservado */}
        <div style={{
          background: 'rgba(10, 20, 60, 0.7)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          border: '2px solid rgba(100, 140, 255, 0.4)',
          borderRadius: '20px',
          padding: '2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
          flexWrap: 'wrap',
        }}>
          {/* Muestra del color */}
          <div style={{
            width: '80px',
            height: '80px',
            flexShrink: 0,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #0a1840, #1a2f6e, #0d1f4f)',
            border: '3px solid rgba(100,140,255,0.5)',
            boxShadow: '0 0 24px rgba(50,100,255,0.4), inset 0 0 20px rgba(0,0,0,0.3)',
            margin: '0 auto',
          }} />

          <div style={{ flex: 1, minWidth: '200px' }}>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: 'rgba(245,230,66,0.8)',
              fontSize: '0.8rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              marginBottom: '0.5rem',
            }}>Color Reservado</p>

            <h3 style={{
              fontFamily: "'Cinzel Decorative', cursive",
              color: '#ffffff',
              fontSize: 'clamp(1rem, 3vw, 1.3rem)',
              marginBottom: '0.6rem',
            }}>Azul Oscuro</h3>

            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              color: 'rgb(255, 255, 255)',
              fontSize: 'clamp(1.3rem, 2vw, 1rem)',
              lineHeight: 1.6,
            }}>
              Este color está reservado exclusivamente para <strong style={{ color: 'rgba(255,255,255,0.9)' }}>Sofía</strong>,
              quien lucirá un vestido azul oscuro en su noche especial. Te pedimos respetar este detalle. 💙
            </p>
          </div>
        </div>

        {/* Colores sugeridos */}
        <div style={{
          background: 'rgba(5, 11, 31, 0.6)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          border: '1px solid rgb(245, 230, 66)',
          borderRadius: '20px',
          padding: '2rem',
          textAlign: 'center',
        }}>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: 'rgba(245,230,66,0.8)',
            fontSize: '0.85rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
          }}>Paleta sugerida</p>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'center',
          }}>
            {coloresPermitidos.map(({ color, nombre }) => (
              <div key={nombre} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.4rem',
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: color,
                  border: '2px solid rgba(255, 255, 255, 0)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
                  transition: 'transform 0.2s',
                  cursor: 'default',
                }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.15)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
                <span style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: 'rgb(255, 255, 255)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.05em',
                }}>{nombre}</span>
              </div>
            ))}
          </div>

          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: 'italic',
            color: 'rgb(255, 255, 255)',
            fontSize: '1.25rem',
            marginTop: '1.5rem',
          }}>
            * Esta es una guía de referencia, no una lista obligatoria.
          </p>
        </div>

      </div>
    </section>
  )
}