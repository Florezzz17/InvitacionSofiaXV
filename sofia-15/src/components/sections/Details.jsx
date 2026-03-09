// src/components/sections/Details.jsx
import { MapPin, Clock, Navigation } from 'lucide-react'

export default function Details() {
  const googleMapsUrl =
    'https://www.google.com/maps/search/FINCA+8+VDA.+LA+MATA+-+AUTOPISTA+PIEDECUESTA+-+FLORIDABLANCA+,+Piedecuesta,+Colombia,+Piedecuesta,+681011/@7.0130127,-73.0606502,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D'

  return (
    <section
      id="details"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5rem 2rem',
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
          style={{
            background: 'rgba(5, 11, 31, 0.6)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
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
                Miércoles, 19 de Diciembre de 2026
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
            backdropFilter: 'blur(16px)',
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31742.87!2d-73.1!3d7.06!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e68003f269e4f3d%3A0x8e68003f269e4f3d!2sFloridablanca%2C%20Santander!5e0!3m2!1ses!2sco!4v1"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Botón Cómo llegar */}
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            background: 'rgba(245,230,66,0.12)',
            border: '1px solid rgba(245,230,66,0.5)',
            borderRadius: '14px',
            padding: '1rem 2rem',
            color: '#f5e642',
            fontFamily: "'Cinzel Decorative', cursive",
            fontSize: 'clamp(0.75rem, 2vw, 0.9rem)',
            letterSpacing: '0.15em',
            textDecoration: 'none',
            transition: 'all 0.3s',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(245,230,66,0.22)'
            e.currentTarget.style.boxShadow = '0 0 20px rgba(245,230,66,0.2)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(245,230,66,0.12)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          <Navigation size={18} />
          Cómo Llegar
        </a>
      </div>
    </section>
  )
}