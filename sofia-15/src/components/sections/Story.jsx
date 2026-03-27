// src/components/sections/Story.jsx
import foto1 from '../../assets/photos/foto1.jpg'
import foto2 from '../../assets/photos/foto2.jpg'
import foto3 from '../../assets/photos/foto3.jpg'
import foto4 from '../../assets/photos/foto4.jpg'
import foto5 from '../../assets/photos/foto5.jpg'

const photos = [
  { src: foto2, caption: 'El comienzo de una historia' },
  { src: foto1, caption: 'Momentos que iluminan' },
  { src: foto3, caption: 'Sueños que florecen' },
  { src: foto4, caption: 'Luz que no se apaga' },
  { src: foto5, caption: 'La protagonista de esta noche' },
]

function GoldenFrame({ src, caption, index }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1rem',
      flexShrink: 0,
      width: 'clamp(220px, 30vw, 300px)',
      animation: `fadeInUp 0.6s ease ${index * 0.15}s both`,
    }}>
      {/* Marco dorado */}
      <div style={{
        position: 'relative',
        padding: '14px',
        background: 'linear-gradient(135deg, #c9a84c, #f5e642, #a07830, #f5d020, #c9a84c)',
        borderRadius: '4px',
        boxShadow: `
          0 0 0 2px #7a5c1e,
          0 6px 30px rgba(0,0,0,0.7),
          inset 0 0 12px rgba(255,220,80,0.3)
        `,
      }}>
        {/* Esquinas decorativas del marco */}
        {['top-0 left-0', 'top-0 right-0', 'bottom-0 left-0', 'bottom-0 right-0'].map((pos, i) => (
          <div key={i} style={{
            position: 'absolute',
            width: '20px',
            height: '20px',
            background: 'radial-gradient(circle, #f5e642, #a07830)',
            borderRadius: '50%',
            ...(pos.includes('top-0 left-0')    ? { top: '-4px', left: '-4px' }    : {}),
            ...(pos.includes('top-0 right-0')   ? { top: '-4px', right: '-4px' }   : {}),
            ...(pos.includes('bottom-0 left-0') ? { bottom: '-4px', left: '-4px' } : {}),
            ...(pos.includes('bottom-0 right-0')? { bottom: '-4px', right: '-4px' }: {}),
          }} />
        ))}

        {/* Foto */}
        <img
          src={src}
          alt={caption}
          style={{
            width: '100%',
            height: 'clamp(260px, 35vw, 360px)',
            objectFit: 'cover',
            display: 'block',
            borderRadius: '2px',
            filter: 'sepia(15%) contrast(1.05) brightness(0.95)',
          }}
        />
      </div>

      {/* Caption */}
      <p style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontStyle: 'italic',
        color: 'rgba(245,230,66,0.8)',
        fontSize: 'clamp(0.85rem, 2vw, 1rem)',
        textAlign: 'center',
        letterSpacing: '0.05em',
      }}>
        {caption}
      </p>
    </div>
  )
}

export default function Story() {
  return (
    <section id="story" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '5rem 2rem',
    }}>
      {/* Título de sección */}
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          color: 'rgb(245, 230, 66)',
          fontSize: 'clamp(1.8rem, 2vw, 0.9rem)',
          letterSpacing: '0.45em',
          textTransform: 'uppercase',
          marginBottom: '0.95rem',
        }}>
          — Un viaje de luz y sueños —
        </p>
        <h2 style={{
          fontFamily: "'Cinzel Decorative', cursive",
          color: '#ffffff',
          fontSize: 'clamp(1.8rem, 5vw, 3rem)',
          textShadow: '0 0 40px rgba(245,230,66,0.3)',
        }}>
          Su Historia
        </h2>
      </div>

      {/* Galería horizontal con scroll */}
      <div style={{
        width: '100%',
        overflowX: 'auto',
        overflowY: 'visible',
        paddingBottom: '2rem',
        cursor: 'grab',
        scrollbarWidth: 'none', // Firefox
        msOverflowStyle: 'none', // IE
      }}
        onMouseDown={(e) => {
          const el = e.currentTarget
          el.style.cursor = 'grabbing'
          const startX = e.pageX - el.offsetLeft
          const scrollLeft = el.scrollLeft
          const onMove = (e) => {
            const x = e.pageX - el.offsetLeft
            el.scrollLeft = scrollLeft - (x - startX)
          }
          const onUp = () => {
            el.style.cursor = 'grab'
            window.removeEventListener('mousemove', onMove)
            window.removeEventListener('mouseup', onUp)
          }
          window.addEventListener('mousemove', onMove)
          window.addEventListener('mouseup', onUp)
        }}
      >
        <div style={{
          display: 'flex',
          gap: '2.5rem',
          padding: '2rem 4rem',
          width: 'max-content',
        }}>
          {photos.map((photo, i) => (
            <GoldenFrame key={i} src={photo.src} caption={photo.caption} index={i} />
          ))}
        </div>
      </div>

      {/* Hint de scroll */}
      <p style={{
        fontFamily: "'Cormorant Garamond', serif",
        color: 'rgb(255, 255, 255)',
        fontSize: '1.75rem',
        letterSpacing: '0.25em',
        textTransform: 'uppercase',
        marginTop: '1rem',
      }}>
        ← Desliza para ver más →
      </p>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  )
}