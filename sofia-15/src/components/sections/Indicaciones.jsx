// src/components/sections/Indicaciones.jsx
// Información práctica para los invitados: fecha límite de confirmación,
// parqueadero, clima de la finca y hashtag del evento.
import { CalendarCheck, Car, Moon, Camera } from 'lucide-react'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const items = [
  {
    Icon: CalendarCheck,
    titulo: 'Confirma a tiempo',
    texto: 'Por favor confirma tu asistencia antes del 1 de diciembre de 2026 para reservar tu lugar bajo las estrellas.',
  },
  {
    Icon: Car,
    titulo: 'Parqueadero',
    texto: 'La finca cuenta con zona de parqueo para los invitados.',
  },
  {
    Icon: Moon,
    titulo: 'Una noche campestre',
    texto: 'La celebración será en una finca al aire libre. Te sugerimos llevar un abrigo ligero para la noche.',
  },
  {
    Icon: Camera,
    titulo: 'Comparte la magia',
    texto: 'Etiqueta tus fotos y videos de la noche con el hashtag #LaNocheDeSofia.',
  },
]

export default function Indicaciones() {
  const { ref, visible } = useScrollReveal()
  return (
    <section ref={ref} id="info" style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(28px)',
      transition: 'opacity 0.8s ease, transform 0.8s ease',
      minHeight: '70vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '5rem 2rem',
      background: 'linear-gradient(180deg, transparent, rgba(5,11,31,0.4) 10%, rgba(5,11,31,0.4) 90%, transparent)',
    }}>

      {/* Título */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          color: 'rgba(245,230,66,0.7)',
          fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
          letterSpacing: '0.45em',
          textTransform: 'uppercase',
          marginBottom: '0.75rem',
        }}>— Bueno saberlo —</p>
        <h2 style={{
          fontFamily: "'Cinzel Decorative', cursive",
          color: '#ffffff',
          fontSize: 'clamp(1.8rem, 5vw, 3rem)',
          textShadow: '0 0 40px rgba(245,230,66,0.3)',
        }}>Información</h2>
      </div>

      {/* Tarjetas */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1.5rem',
        justifyContent: 'center',
        maxWidth: '760px',
        width: '100%',
      }}>
        {items.map((item) => (
          <div key={item.titulo} className="glass" style={{
            flex: '1 1 300px',
            maxWidth: '360px',
            background: 'rgba(5, 11, 31, 0.6)',
            border: '1px solid rgba(245,230,66,0.25)',
            borderRadius: '20px',
            padding: '1.75rem',
            textAlign: 'center',
          }}>
            <div style={{
              width: '52px', height: '52px',
              background: 'rgba(245,230,66,0.1)',
              border: '1px solid rgba(245,230,66,0.3)',
              borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 1rem',
            }}>
              <item.Icon size={22} color="#f5e642" />
            </div>
            <h3 style={{
              fontFamily: "'Cinzel Decorative', cursive",
              color: '#f5e642',
              fontSize: 'clamp(0.85rem, 2.5vw, 1rem)',
              letterSpacing: '0.08em',
              marginBottom: '0.6rem',
            }}>{item.titulo}</h3>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: 'rgba(255,255,255,0.85)',
              fontSize: 'clamp(0.95rem, 2.2vw, 1.05rem)',
              lineHeight: 1.6,
            }}>{item.texto}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
