// src/components/sections/LluviaDeSobres.jsx
import { Mail, Heart } from 'lucide-react'

export default function LluviaDeSobres() {
  return (
    <section id="sobres" style={{
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '5rem 2rem',
    }}>
      {/* Tarjeta principal */}
      <div style={{
        background: 'rgba(5, 11, 31, 0.6)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        border: '1px solid rgba(245,230,66,0.25)',
        borderRadius: '24px',
        padding: 'clamp(2rem, 5vw, 3.5rem) clamp(1.5rem, 5vw, 4rem)',
        maxWidth: '600px',
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 8px 60px rgba(0,0,0,0.5)',
      }}>

        {/* Icono animado */}
        <div style={{
          width: '80px', height: '80px',
          background: 'rgba(245,230,66,0.1)',
          border: '1px solid rgba(245,230,66,0.3)',
          borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 1.5rem',
          animation: 'float 3s ease-in-out infinite',
        }}>
          <Mail size={36} color="#f5e642" />
        </div>

        {/* Título */}
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          color: 'rgba(245,230,66,0.7)',
          fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
          letterSpacing: '0.45em',
          textTransform: 'uppercase',
          marginBottom: '0.75rem',
        }}>
          — Un detalle especial —
        </p>

        <h2 style={{
          fontFamily: "'Cinzel Decorative', cursive",
          color: '#ffffff',
          fontSize: 'clamp(1.6rem, 4vw, 2.5rem)',
          textShadow: '0 0 40px rgba(245,230,66,0.3)',
          marginBottom: '1.5rem',
          lineHeight: 1.2,
        }}>
          Lluvia de Sobres
        </h2>

        {/* Separador */}
        <div style={{
          width: '60px', height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(245,230,66,0.6), transparent)',
          margin: '0 auto 1.5rem',
        }} />

        {/* Mensaje */}
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          color: 'rgba(255,255,255,0.8)',
          fontSize: 'clamp(1.30rem, 2.5vw, 1.2rem)',
          lineHeight: 1.8,
          marginBottom: '1.5rem',
        }}>
          Si deseas hacerle un regalo a Sofía,<br/>
          ella ha elegido recibir una <span style={{ color: '#f5e642', fontStyle: 'italic' }}>lluvia de sobres</span><br/>
          como muestra de tu cariño en este día tan especial.
        </p>

        {/* Nota secundaria */}
        <div style={{
          background: 'rgba(245,230,66,0.06)',
          border: '1px solid rgba(245,230,66,0.15)',
          borderRadius: '12px',
          padding: '1rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
        }}>
          <Heart size={16} color="#f5e642" style={{ flexShrink: 0 }} />
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: 'italic',
            color: 'rgb(255, 255, 255)',
            fontSize: 'clamp(1.45rem, 2vw, 0.95rem)',
            textAlign: 'left',
            lineHeight: 1.6,
            margin: 0,
          }}>
            Tu presencia es el mejor regalo. Si deseas contribuir
            a sus sueños, un sobre será recibido con todo el amor.
          </p>
        </div>

      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  )
}