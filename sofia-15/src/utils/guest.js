// src/utils/guest.js
// Invitaciones personalizadas vía parámetros en la URL:
//   ?i=Familia%20Pérez       → nombre del invitado
//   ?i=Familia%20Pérez&c=4   → nombre + número de lugares reservados
// Si no hay parámetros, la invitación se muestra en su versión genérica.
// La URL no cambia durante la sesión, así que se lee una sola vez al cargar.

function readGuest() {
  if (typeof window === 'undefined') return { name: null, cupos: null }

  const params = new URLSearchParams(window.location.search)
  const name = (params.get('i') || '').trim().slice(0, 60)
  const c = parseInt(params.get('c'), 10)

  return {
    name: name || null,
    cupos: Number.isInteger(c) && c > 0 && c <= 20 ? c : null,
  }
}

export const GUEST = readGuest()
