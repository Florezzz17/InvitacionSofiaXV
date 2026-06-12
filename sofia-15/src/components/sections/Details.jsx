// src/components/sections/Details.jsx
import { MapPin, Clock, Navigation, CalendarPlus } from 'lucide-react'
import { useScrollReveal } from '../../hooks/useScrollReveal'

// Link "Agregar a Google Calendar" — 6:00 PM Colombia (UTC-5) = 23:00 UTC
const calendarUrl =
  'https://calendar.google.com/calendar/render?action=TEMPLATE' +
  '&text=' + encodeURIComponent('XV Años de Sofía ✨') +
  '&dates=20261219T230000Z/20261220T050000Z' +
  '&details=' + encodeURIComponent('La Noche Estrellada de Sofía — ¡Te esperamos!') +
  '&location=' + encodeURIComponent('Finca 8, Vereda La Mata, Autopista Piedecuesta, Floridablanca, Colombia')

export default function Details() {
  const { ref, visible } = useScrollReveal()
  const googleMapsUrl =
    'https://www.google.com/maps/search/FINCA+8+VDA.+LA+MATA+-+AUTOPISTA+PIEDECUESTA+-+FLORIDABLANCA+,+Piedecuesta,+Colombia,+Piedecuesta,+681011/@7.0130127,-73.0606502,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D'

  return (
    <section
      ref={ref}
      id="details"
      style={{
        minHeight: '100vh',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5rem 2rem',
        background: 'linear-gradient(180deg, transparent, rgba(5,11,31,0.4) 10%, rgba(5,11,31,0.4) 90%, transparent)',
      }}
    >
      {/* Título */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: 'rgba(245,230,66,0.7)',
            fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
            letterSpacing: '0.45em',
            textTransform: 'uppercase',
            marginBottom: '0.75rem',
          }}
        >
          — Nos vemos aquí —
        </p>
        <h2
          style={{
            fontFamily: "'Cinzel Decorative', cursive",
            color: '#ffffff',
            fontSize: 'clamp(1.8rem, 5vw, 3rem)',
            textShadow: '0 0 40px rgba(245,230,66,0.3)',
          }}
        >
          El Evento
        </h2>
      </div>

      {/* Contenedor principal */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          width: '100%',
          maxWidth: '800px',
        }}
      >
        {/* Tarjeta de info */}
        <div
          className="glass"
          style={{
            background: 'rgba(5, 11, 31, 0.6)',
            border: '1px solid rgba(245,230,66,0.25)',
            borderRadius: '20px',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}
        >
          {/* Lugar */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
            <div
              style={{
                width: '44px',
                height: '44px',
                flexShrink: 0,
                background: 'rgba(245,230,66,0.1)',
                border: '1px solid rgba(245,230,66,0.3)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <MapPin size={20} color="#f5e642" />
            </div>
            <div>
              <p
                style={{
                  fontFamily: "'Cinzel Decorative', cursive",
                  color: '#f5e642',
                  fontSize: 'clamp(0.8rem, 2vw, 0.95rem)',
                  letterSpacing: '0.1em',
                  marginBottom: '0.3rem',
                }}
              >
                Lugar
              </p>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: 'rgba(255,255,255,0.85)',
                  fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                  lineHeight: 1.5,
                }}
              >
                Finca 8, Vereda La Mata
                <br />
                Autopista Piedecuesta, Floridablanca
              </p>
            </div>
          </div>

          {/* Separador */}
          <div style={{ height: '1px', background: 'rgba(245,230,66,0.15)' }} />

          {/* Fecha y hora */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
            <div
              style={{
                width: '44px',
                height: '44px',
                flexShrink: 0,
                background: 'rgba(245,230,66,0.1)',
                border: '1px solid rgba(245,230,66,0.3)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Clock size={20} color="#f5e642" />
            </div>
            <div>
              <p
                style={{
                  fontFamily: "'Cinzel Decorative', cursive",
                  color: '#f5e642',
                  fontSize: 'clamp(0.8rem, 2vw, 0.95rem)',
                  letterSpacing: '0.1em',
                  marginBottom: '0.3rem',
                }}
              >
                Fecha y Hora
              </p>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: 'rgba(255,255,255,0.85)',
                  fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                  lineHeight: 1.5,
                }}
              >
                Sábado, 19 de Diciembre de 2026
                <br />
                6:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Mapa embed */}
        <div
          style={{
            background: 'rgba(5, 11, 31, 0.6)',
            border: '1px solid rgba(245,230,66,0.25)',
            borderRadius: '20px',
            overflow: 'hidden',
            height: '300px',
          }}
        >
          <iframe
            title="Ubicación del evento"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
            src="https://maps.google.com/maps?q=7.0130127,-73.0606502&z=17&output=embed"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Botones: Cómo llegar + Agregar al calendario */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
            style={{ flex: '1 1 240px', fontSize: 'clamp(0.75rem, 2vw, 0.9rem)', padding: '1rem 2rem' }}
          >
            <Navigation size={18} />
            Cómo Llegar
          </a>
          <a
            href={calendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
            style={{ flex: '1 1 240px', fontSize: 'clamp(0.75rem, 2vw, 0.9rem)', padding: '1rem 2rem' }}
          >
            <CalendarPlus size={18} />
            Agregar al Calendario
          </a>
        </div>
      </div>
    </section>
  )
}