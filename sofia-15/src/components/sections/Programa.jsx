import { Music, Star, Heart, Sparkles } from 'lucide-react'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const eventos = [
  {
    hora: '6:00 PM',
    titulo: 'Recepción',
    descripcion: 'Bienvenida a los invitados bajo el cielo estrellado.',
    Icon: Star,
    color: '#f5e642',
  },
  {
    hora: '7:00 PM',
    titulo: 'Ceremonia',
    descripcion: 'El momento más especial: la presentación en sociedad de Sofía.',
    Icon: Heart,
    color: '#ff9eb5',
  },
  {
    hora: '8:00 PM',
    titulo: 'El Vals',
    descripcion: 'El baile de honor junto a sus chambelanes.',
    Icon: Music,
    color: '#a78bfa',
  },
  {
    hora: '9:00 PM',
    titulo: 'El Baile',
    descripcion: 'Celebra y baila toda la noche en La Noche Estrellada de Sofía.',
    Icon: Sparkles,
    color: '#f5e642',
  },
]

export default function Programa() {
  const { ref, visible } = useScrollReveal()
  return (
    <section ref={ref} id="programa" style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(28px)',
      transition: 'opacity 0.8s ease, transform 0.8s ease',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '5rem 2rem',
    }}>
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          color: 'rgba(245,230,66,0.7)',
          fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
          letterSpacing: '0.45em',
          textTransform: 'uppercase',
          marginBottom: '0.75rem',
        }}>— La velada —</p>
        <h2 style={{
          fontFamily: "'Cinzel Decorative', cursive",
          color: '#ffffff',
          fontSize: 'clamp(1.8rem, 5vw, 3rem)',
          textShadow: '0 0 40px rgb(245, 230, 66)',
        }}>Programa</h2>
      </div>

      <div style={{
        width: '100%',
        maxWidth: '600px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}>
        <div style={{
        position: 'absolute',
        left: '50%',
        top: '24px',
        bottom: '24px',
        width: '3px',
        background: 'linear-gradient(180deg, transparent, #f5e642, #f5e642, transparent)',
        transform: 'translateX(-50%)',
        boxShadow: '0 0 12px rgba(245,230,66,0.8), 0 0 24px rgba(245,230,66,0.4)',
    }} />

        {eventos.map((evento, i) => {
          const isLeft = i % 2 === 0
          return (
            <div key={i} className={`programa-item programa-item-${isLeft ? 'left' : 'right'}`} style={{
              display: 'flex',
              justifyContent: isLeft ? 'flex-start' : 'flex-end',
              paddingBottom: '2rem',
              position: 'relative',
            }}>
              <div className="programa-dot" style={{
                position: 'absolute',
                left: '50%',
                top: '20px',
                width: '14px',
                height: '14px',
                background: evento.color,
                borderRadius: '50%',
                transform: 'translateX(-50%)',
                boxShadow: `0 0 12px ${evento.color}`,
                zIndex: 1,
              }} />
              <div className="programa-card glass" style={{
                width: '44%',
                background: 'rgba(5, 11, 31, 0.65)',
                border: `1px solid ${evento.color}33`,
                borderRadius: '16px',
                padding: '1.25rem 1.5rem',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <evento.Icon size={16} color={evento.color} />
                  <span style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: evento.color,
                    fontSize: '0.85rem',
                    letterSpacing: '0.1em',
                  }}>{evento.hora}</span>
                </div>
                <h3 style={{
                  fontFamily: "'Cinzel Decorative', cursive",
                  color: '#ffffff',
                  fontSize: 'clamp(0.8rem, 2vw, 1rem)',
                  marginBottom: '0.4rem',
                }}>{evento.titulo}</h3>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: 'italic',
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
                  lineHeight: 1.5,
                }}>{evento.descripcion}</p>
              </div>
            </div>
          )
        })}
      </div>

      <div className="glass" style={{
        marginTop: '3rem',
        textAlign: 'center',
        padding: '2rem',
        background: 'rgba(5,11,31,0.5)',
        border: '1px solid rgba(245,230,66,0.2)',
        borderRadius: '20px',
        maxWidth: '500px',
        width: '100%',
      }}>
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          color: 'rgba(245,230,66,0.8)',
          fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
          lineHeight: 1.7,
        }}>
          "Las estrellas no son solo puntos de luz,<br/>
          son los sueños que el cielo guarda para ti."
        </p>
        <p style={{
          fontFamily: "'Cinzel Decorative', cursive",
          color: 'rgba(255,255,255,0.4)',
          fontSize: '0.75rem',
          letterSpacing: '0.2em',
          marginTop: '1rem',
        }}>— Con amor, tu familia —</p>
      </div>

      <style>{`
        @media (max-width: 560px) {
          .programa-item { justify-content: center !important; }
          .programa-card  { width: 80% !important; }
          .programa-dot   { left: 50% !important; transform: translateX(-50%) !important; }
        }
      `}</style>
    </section>
  )
}