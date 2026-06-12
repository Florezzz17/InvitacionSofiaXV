// src/hooks/useDeviceOrientation.js
// Este hook captura los ángulos del giroscopio del celular.
// beta  = inclinación adelante/atrás (-180 a 180)
// gamma = inclinación izquierda/derecha (-90 a 90)
//
// Los ángulos se guardan en un ref (no en estado) porque llegan ~60 veces
// por segundo y solo se leen dentro del loop de animación de Three.js —
// usar estado provocaría 60 re-renders por segundo.

import { useState, useEffect, useRef, useCallback } from 'react'

// iOS 13+ es el único entorno donde DeviceOrientationEvent.requestPermission existe
const needsExplicitPermission = () =>
  typeof DeviceOrientationEvent !== 'undefined' &&
  typeof DeviceOrientationEvent.requestPermission === 'function'

export function useDeviceOrientation() {
  const orientationRef = useRef({ beta: 0, gamma: 0 })
  // idle | granted | denied — Android/desktop no requieren permiso
  const [permissionState, setPermissionState] = useState(() =>
    needsExplicitPermission() ? 'idle' : 'granted'
  )

  const requestPermission = useCallback(async () => {
    // iOS 13+ requiere pedir permiso explícitamente
    if (needsExplicitPermission()) {
      try {
        const permission = await DeviceOrientationEvent.requestPermission()
        setPermissionState(permission === 'granted' ? 'granted' : 'denied')
      } catch {
        setPermissionState('denied')
      }
    } else {
      setPermissionState('granted')
    }
  }, [])

  // iOS 13+: el permiso solo puede pedirse dentro de un gesto del usuario,
  // así que lo solicitamos en el primer toque sobre la página.
  useEffect(() => {
    if (permissionState !== 'idle' || !needsExplicitPermission()) return

    const onFirstTouch = () => { requestPermission() }
    window.addEventListener('pointerdown', onFirstTouch, { once: true })
    return () => window.removeEventListener('pointerdown', onFirstTouch)
  }, [permissionState, requestPermission])

  useEffect(() => {
    if (permissionState !== 'granted') return

    const handleOrientation = (event) => {
      orientationRef.current.beta = event.beta ?? 0   // adelante/atrás
      orientationRef.current.gamma = event.gamma ?? 0 // izquierda/derecha
    }

    window.addEventListener('deviceorientation', handleOrientation, true)
    return () => window.removeEventListener('deviceorientation', handleOrientation, true)
  }, [permissionState])

  return { orientationRef, permissionState, requestPermission }
}
