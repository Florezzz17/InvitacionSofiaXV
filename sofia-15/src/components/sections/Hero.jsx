// src/components/sections/Hero.jsx
import CountdownTimer from '../ui/CountdownTimer'
import { MapPin } from 'lucide-react'

export default function Hero() {
  const scrollToStory = () => {
    document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '6rem 2rem 2rem',
    }}>
      <div className="hero-reveal glass" style={{
        background: 'rgba(5, 11, 31, 0.5)',
        border: '1px solid rgba(245,230,66,0.25)',
        borderRadius: '24px',
        padding: 'clamp(2rem, 5vw, 4rem) clamp(1.5rem, 5vw, 4rem)',
        maxWidth: '700px',
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 8px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)',
      }}>

        <p className="hero-reveal" style={{
          '--reveal-delay': '0.15s',
          fontFamily: "'Cormorant Garamond', serif",
          color: 'rgba(245,230,66,0.8)',
          fontSize: 'clamp(0.8rem, 2vw, 0.95rem)',
          letterSpacing: '0.45em',
          textTransform: 'uppercase',
          marginBottom: '1.5rem',
        }}>
          — La Noche Estrellada de —
        </p>

        <h1 className="hero-reveal" style={{
          '--reveal-delay': '0.3s',
          fontFamily: "'Cinzel Decorative', cursive",
          color: '#ffffff',
          fontSize: 'clamp(2.2rem, 7vw, 4.5rem)',
          fontWeight: '700',
          lineHeight: 1.05,
          marginBottom: '0.4rem',
          textShadow: '0 0 60px rgb(245, 230, 66), 0 2px 20px rgba(0,0,0,0.8)',
        }}>
          Sofía
        </h1>

        <h2 className="hero-reveal" style={{
          '--reveal-delay': '0.45s',
          fontFamily: "'Cinzel Decorative', cursive",
          color: 'rgba(255,255,255,0.8)',
          fontSize: 'clamp(0.95rem, 2.8vw, 1.5rem)',
          fontWeight: '400',
          letterSpacing: '0.12em',
          marginBottom: '0.6rem',
        }}>
          Florez Avendaño
        </h2>

        <p className="hero-reveal" style={{
          '--reveal-delay': '0.55s',
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          color: '#f5e642',
          fontSize: 'clamp(1.3rem, 3.5vw, 1.9rem)',
          marginBottom: '2rem',
        }}>
          Sus XV Años
        </p>

        <div className="hero-reveal" style={{
          '--reveal-delay': '0.65s',
          width: '80px', height: '1px',
          background: 'linear-gradient(90deg, transparent, rgb(245, 230, 66), transparent)',
          margin: '0 auto 2rem',
        }} />

        <p className="hero-reveal" style={{
          '--reveal-delay': '0.75s',
          fontFamily: "'Cormorant Garamond', serif",
          color: 'rgb(255, 255, 255)',
          fontSize: 'clamp(0.9rem, 1.8vw, 1.15rem)',
          letterSpacing: '0.12em',
          marginBottom: '2rem',
        }}>
          19 de Diciembre · 2026 · 6:00 PM
        </p>

        <div className="hero-reveal" style={{ '--reveal-delay': '0.85s' }}>
          <CountdownTimer />
        </div>

        <p className="hero-reveal" style={{
          '--reveal-delay': '0.95s',
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          color: 'rgb(255, 255, 255)',
          fontSize: 'clamp(0.85rem, 2vw, 1rem)',
          marginTop: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.4rem',
        }}>
          <MapPin size={14} color="rgba(245,230,66,0.7)" />
          Finca 8, Vda. La Mata · Autopista Piedecuesta, Floridablanca
        </p>

        <button
          onClick={scrollToStory}
          aria-label="Bajar a la siguiente sección"
          className="hero-reveal"
          style={{
            '--reveal-delay': '1.1s',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            marginTop: '2.5rem',
          }}
        >
          <div style={{ animation: 'bounce 2s infinite' }}>
            <span style={{ color: 'rgba(245,230,66,0.5)', fontSize: '1.4rem' }}>↓</span>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: 'rgb(255, 255, 255)',
              fontSize: '0.7rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              marginTop: '0.3rem',
            }}>Desliza para ver la magia</p>
          </div>
        </button>
      </div>
    </section>
  )
}
