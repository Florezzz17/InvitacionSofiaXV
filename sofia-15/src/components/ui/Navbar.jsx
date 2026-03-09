import { Home, BookOpen, MapPin, Calendar } from 'lucide-react'

const links = [
  { id: 'hero',     label: 'Home',     Icon: Home },
  { id: 'story',    label: 'Story',    Icon: BookOpen },
  { id: 'details',  label: 'Details',  Icon: MapPin },
  { id: 'programa', label: 'Programa', Icon: Calendar },
]

export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', justifyContent: 'center', gap: '0.25rem',
      padding: '0.6rem 1rem',
      background: 'rgba(5, 11, 31, 0.7)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(245,230,66,0.15)',
    }}>
      {links.map(({ id, label, Icon }) => (
        <button key={id} onClick={() => scrollTo(id)} style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          gap: '0.2rem', background: 'none', border: 'none', cursor: 'pointer',
          padding: '0.4rem 1.2rem', borderRadius: '8px',
          color: 'rgba(255,255,255,0.7)', transition: 'all 0.2s',
        }}
          onMouseEnter={e => e.currentTarget.style.color = '#f5e642'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
        >
          <Icon size={18} />
          <span style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase',
          }}>{label}</span>
        </button>
      ))}
    </nav>
  )
}