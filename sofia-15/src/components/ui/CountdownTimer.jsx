// src/components/ui/CountdownTimer.jsx
// Cuenta regresiva hasta la fiesta de Sofía
import { useState, useEffect } from 'react'

const TARGET = new Date('2026-12-19T18:00:00') // 19 dic 2026, 6pm

function pad(n) {
  return String(n).padStart(2, '0')
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft())

  function getTimeLeft() {
    const diff = TARGET - new Date()
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    return {
      days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    }
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(timer)
  }, [])

  const units = [
    { label: 'Días',     value: timeLeft.days },
    { label: 'Horas',    value: timeLeft.hours },
    { label: 'Minutos',  value: timeLeft.minutes },
    { label: 'Segundos', value: timeLeft.seconds },
  ]

  return (
    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
      {units.map(({ label, value }) => (
        <div key={label} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(245,230,66,0.3)',
          borderRadius: '12px',
          padding: '0.75rem 1.25rem',
          minWidth: '70px',
        }}>
          <span style={{
            fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
            fontFamily: "'Cinzel Decorative', cursive",
            color: '#f5e642',
            fontWeight: '700',
            lineHeight: 1,
          }}>
            {pad(value)}
          </span>
          <span style={{
            fontSize: 'clamp(0.6rem, 2vw, 0.75rem)',
            color: 'rgba(255,255,255,0.6)',
            fontFamily: "'Cormorant Garamond', serif",
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginTop: '0.4rem',
          }}>
            {label}
          </span>
        </div>
      ))}
    </div>
  )
}