// src/hooks/useDeviceOrientation.js
// Este hook captura los ángulos del giroscopio del celular.
// beta  = inclinación adelante/atrás (-180 a 180)
// gamma = inclinación izquierda/derecha (-90 a 90)

import { useState, useEffect, useCallback } from 'react'

export function useDeviceOrientation() {
  const [orientation, setOrientation] = useState({ beta: 0, gamma: 0 })
  const [permissionState, setPermissionState] = useState('idle') // idle | granted | denied

  const requestPermission = useCallback(async () => {
    // iOS 13+ requiere pedir permiso explícitamente
    if (typeof DeviceOrientationEvent !== 'undefined' &&
        typeof DeviceOrientationEvent.requestPermission === 'function') {
      try {
        const permission = await DeviceOrientationEvent.requestPermission()
        if (permission === 'granted') {
          setPermissionState('granted')
        } else {
          setPermissionState('denied')
        }
      } catch (e) {
        setPermissionState('denied')
      }
    } else {
      // Android y desktop no necesitan permiso
      setPermissionState('granted')
    }
  }, [])

  useEffect(() => {
    if (permissionState !== 'granted') return

    const handleOrientation = (event) => {
      setOrientation({
        beta: event.beta ?? 0,   // adelante/atrás
        gamma: event.gamma ?? 0, // izquierda/derecha
      })
    }

    window.addEventListener('deviceorientation', handleOrientation, true)
    return () => window.removeEventListener('deviceorientation', handleOrientation, true)
  }, [permissionState])

  // Auto-solicitar en Android/desktop (no necesitan clic)
  useEffect(() => {
    if (typeof DeviceOrientationEvent === 'undefined') return
    if (typeof DeviceOrientationEvent.requestPermission !== 'function') {
      setPermissionState('granted')
    }
  }, [])

  return { orientation, permissionState, requestPermission }
}