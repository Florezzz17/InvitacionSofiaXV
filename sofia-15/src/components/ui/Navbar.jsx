import { useState, useEffect } from 'react'
import { Home, BookOpen, MapPin, Calendar, Mail, Shirt, Star, Info, X, Menu } from 'lucide-react'

const links = [
  { id: 'hero',         label: 'Inicio',      Icon: Home },
  { id: 'story',        label: 'Historia',    Icon: BookOpen },
  { id: 'details',      label: 'Detalles',    Icon: MapPin },
  { id: 'programa',     label: 'Programa',    Icon: Calendar },
  { id: 'dresscode',    label: 'Vestimenta',  Icon: Shirt },
  { id: 'sobres',       label: 'Sobres',      Icon: Mail },
  { id: 'info',         label: 'Información', Icon: Info },
  { id: 'confirmacion', label: 'Confirmar',   Icon: Star },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState('hero')

  useEffect(() => {
    const sections = links.map(l => document.getElementById(l.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { threshold: 0.35 }
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Cerrar el menú con Escape
  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <>
      {/* Barra superior */}
      <nav aria-label="Navegación principal" style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
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
          whiteSpace: 'nowrap',
        }}>
          ✨ XV Sofía
        </span>

        {/* Links visibles en pantallas grandes */}
        <div className="nav-desktop">
          {links.map(({ id, label }) => (
            <button
              key={id}
              className={`nav-link${id === activeId ? ' active' : ''}`}
              aria-current={id === activeId ? 'true' : undefined}
              onClick={() => scrollTo(id)}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Botón hamburguesa (solo móvil / tablet) */}
        <button
          className="nav-burger"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
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
      <div aria-hidden={!open} style={{
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
        visibility: open ? 'visible' : 'hidden',
        transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), visibility 0.35s',
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
        {links.map((link) => (
          <button
            key={link.id}
            className={`menu-link${link.id === activeId ? ' active' : ''}`}
            aria-current={link.id === activeId ? 'true' : undefined}
            onClick={() => scrollTo(link.id)}
            tabIndex={open ? 0 : -1}
          >
            <link.Icon size={20} />
            <span>{link.label}</span>
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
            color: 'rgba(255,255,255,0.45)',
            fontSize: '0.8rem',
            letterSpacing: '0.1em',
          }}>
            Bienvenidos a la fiesta de Sofía
          </p>
        </div>

      </div>
    </>
  )
}
