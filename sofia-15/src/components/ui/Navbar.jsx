import { useState } from 'react'
import { Home, BookOpen, MapPin, Calendar, Mail, Shirt, Star, X, Menu } from 'lucide-react'

const links = [
  { id: 'hero',         label: 'Inicio',      Icon: Home },
  { id: 'story',        label: 'Historia',     Icon: BookOpen },
  { id: 'details',      label: 'Detalles',   Icon: MapPin },
  { id: 'programa',     label: 'Programación',  Icon: Calendar },
  { id: 'dresscode',    label: 'Codigo de Vestimenta',Icon: Shirt },
  { id: 'sobres',       label: 'Sobres',    Icon: Mail },
  { id: 'confirmacion', label: 'Confirmar', Icon: Star },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <>
      {/* Barra superior */}
      <nav style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.75rem 1.5rem',
        background: 'rgba(5, 11, 31, 0.75)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(245,230,66,0.15)',
      }}>

        {/* Título en el navbar */}
        <span style={{
          fontFamily: "'Cinzel Decorative', cursive",
          color: '#f5e642',
          fontSize: 'clamp(0.7rem, 2vw, 0.9rem)',
          letterSpacing: '0.1em',
        }}>
          ✨ XV Sofía
        </span>

        {/* Botón hamburguesa */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          background: 'rgba(245,230,66,0.1)',
          border: '1px solid rgba(245,230,66,0.3)',
          borderRadius: '8px',
          padding: '0.4rem 0.9rem',
          cursor: 'pointer',
          color: '#f5e642',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          transition: 'all 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.background = 'rgba(245,230,66,0.2)'}
        onMouseLeave={e => e.currentTarget.style.background = 'rgba(245,230,66,0.1)'}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
        <span style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '0.9rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
        }}>
          {open ? 'Cerrar' : 'Menú'}
        </span>
      </button>
      </nav>

      {/* Overlay oscuro detrás del menú */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 98,
            background: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(2px)',
          }}
        />
      )}

      {/* Menú desplegable */}
      <div style={{
        position: 'fixed',
        top: 0,
        right: 0,
        height: '100vh',
        width: 'clamp(220px, 70vw, 300px)',
        zIndex: 99,
        background: 'rgba(5, 11, 31, 0.97)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderLeft: '1px solid rgba(245,230,66,0.2)',
        padding: '5rem 1.5rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        transform: open ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: open ? '-8px 0 40px rgba(0,0,0,0.5)' : 'none',
      }}>

        {/* Decoración superior del menú */}
        <div style={{
          position: 'absolute',
          top: '1.5rem',
          left: '1.5rem',
          right: '1.5rem',
          textAlign: 'center',
        }}>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: 'italic',
            color: 'rgba(245,230,66,0.5)',
            fontSize: '0.8rem',
            letterSpacing: '0.2em',
          }}>— Navegación —</p>
          <div style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(245,230,66,0.3), transparent)',
            marginTop: '0.5rem',
          }} />
        </div>

        {/* Links */}
        {links.map(({ id, label, Icon }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              background: 'none',
              border: '1px solid transparent',
              borderRadius: '12px',
              padding: '0.85rem 1.25rem',
              cursor: 'pointer',
              color: 'rgba(255,255,255,0.75)',
              transition: 'all 0.2s',
              textAlign: 'left',
              width: '100%',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = '#f5e642'
              e.currentTarget.style.background = 'rgba(245,230,66,0.08)'
              e.currentTarget.style.borderColor = 'rgba(245,230,66,0.2)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = 'rgba(255,255,255,0.75)'
              e.currentTarget.style.background = 'none'
              e.currentTarget.style.borderColor = 'transparent'
            }}
          >
            <Icon size={20} />
            <span style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.1rem',
              letterSpacing: '0.1em',
            }}>
              {label}
            </span>
          </button>
        ))}

        {/* Decoración inferior */}
        <div style={{ marginTop: 'auto', textAlign: 'center' }}>
          <div style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(245,230,66,0.2), transparent)',
            marginBottom: '1rem',
          }} />
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: 'italic',
            color: 'rgb(255, 255, 255)',
            fontSize: '1.50rem',
          }}>
            Bienvenidos a la Fiesta de Sofia!
          </p>
        </div>

      </div>
    </>
  )
}