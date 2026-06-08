# XVSOFIA1 — Invitación Digital XV de Sofía

## Descripción del Proyecto

Sitio web de invitación digital para los **XV años de Sofía**, celebrados el **19 de diciembre de 2026 a las 6:00 PM** en Finca 8, Vereda La Mata, Autopista Piedecuesta, Floridablanca, Colombia.

Es una Single Page Application (SPA) con diseño temático "Starry Night" (Van Gogh), animaciones 3D y secciones interactivas. Está publicado en GitHub Pages.

## Stack Tecnológico

| Categoría | Tecnología |
|-----------|-----------|
| Framework | React 19.2.0 |
| Build Tool | Vite 7.3.1 |
| Estilos | Tailwind CSS 4.2.1 |
| 3D / WebGL | Three.js 0.183.2, @react-three/fiber, @react-three/drei |
| Animaciones | GSAP |
| Íconos | lucide-react |
| Lenguaje | JavaScript + JSX (sin TypeScript) |
| Deploy | GitHub Actions → GitHub Pages |

## Estructura del Proyecto

```
XVSOFIA1/
├── .github/workflows/deploy.yml   # CI/CD: deploy automático a GitHub Pages al hacer push a main
├── sofia-15/                       # Directorio principal de la app
│   ├── src/
│   │   ├── assets/
│   │   │   ├── photos/            # foto1.jpg – foto5.jpg (galería de Sofía)
│   │   │   └── starry-night.jpg   # Imagen de fondo Van Gogh
│   │   ├── components/
│   │   │   ├── Background/
│   │   │   │   └── StarryNight.jsx     # Estrellas 3D + fondo animado + giroscopio
│   │   │   ├── sections/
│   │   │   │   ├── Hero.jsx            # Portada: título, fecha, countdown, ubicación
│   │   │   │   ├── Story.jsx           # Galería horizontal con marcos dorados
│   │   │   │   ├── Details.jsx         # Detalles del evento + mapa embebido
│   │   │   │   ├── Programa.jsx        # Cronograma del evento (6PM–9PM)
│   │   │   │   ├── DressCode.jsx       # Código de vestimenta + paleta de colores
│   │   │   │   ├── LluviaDeSobres.jsx  # Sección de regalos (sobres)
│   │   │   │   └── Confirmacion.jsx    # RSVP con integración WhatsApp
│   │   │   └── ui/
│   │   │       ├── Navbar.jsx          # Navegación fija, scroll suave, hamburger mobile
│   │   │       └── CountdownTimer.jsx  # Contador regresivo en tiempo real
│   │   ├── hooks/
│   │   │   └── useDeviceOrientation.js # Hook giroscopio para paralaje 3D en móvil
│   │   ├── App.jsx                # Componente raíz que ensambla todas las secciones
│   │   ├── index.css              # Estilos globales + Tailwind
│   │   └── main.jsx               # Punto de entrada React
│   ├── index.html
│   ├── vite.config.js             # Base: /InvitacionSofiaXV/
│   └── package.json
└── CLAUDE.md                      # Este archivo
```

## Comandos Principales

```bash
# Desde sofia-15/
npm run dev       # Servidor de desarrollo con HMR
npm run build     # Build de producción (genera sofia-15/dist/)
npm run preview   # Preview del build de producción
npm run lint      # ESLint
```

## Deployment

- **Rama de deploy:** `main`
- **Workflow:** `.github/workflows/deploy.yml` — se dispara en cada push a `main`
- **URL pública:** `https://florezz17.github.io/InvitacionSofiaXV/`
- **Base path Vite:** `/InvitacionSofiaXV/`

## Datos del Evento

| Campo | Valor |
|-------|-------|
| Celebrada | Sofía |
| Fecha | 19 de diciembre de 2026, 6:00 PM |
| Lugar | Finca 8, Vereda La Mata, Autopista Piedecuesta, Floridablanca, Colombia |
| WhatsApp RSVP | +573184153751 |

## Diseño & Estética

- **Tema:** Starry Night (inspirado en Van Gogh)
- **Fondo:** Navy oscuro `#050b1f` con gradientes y estrellas 3D animadas
- **Acento principal:** Dorado `#f5e642`
- **Tipografía:** Cormorant Garamond (cuerpo), Cinzel Decorative (títulos)
- **Efecto visual:** Glassmorphism (frosted glass), glow, blur
- **Responsive:** Mobile-first con `clamp()` para tipografía fluida

## Secciones de la SPA

1. **Hero** — Portada con título, fecha, ubicación, countdown y CTA de scroll
2. **StarryNight** (Background) — Canvas 3D con estrellas y paralaje giroscópico
3. **Navbar** — Navegación fija con scroll suave y menú hamburger en mobile
4. **Story** — Galería de fotos con scroll horizontal, marcos dorados y captions
5. **Details** — Información del evento con mapa de Google Maps embebido
6. **Programa** — Timeline del programa (6PM–9PM) con íconos
7. **DressCode** — Reglas de vestimenta y paleta de colores sugerida
8. **LluviaDeSobres** — Sección de información sobre regalos
9. **Confirmacion** — RSVP: abre WhatsApp con mensaje prefillado

## Notas de Desarrollo

- El proyecto **no usa TypeScript** — todo es `.jsx` / `.js`
- Los estilos se mezclan entre Tailwind utilities, inline styles y CSS global
- El estado se maneja solo con hooks de React (useState, useEffect) — sin Redux ni Context global
- La sección `Confirmacion` dispara una animación de partículas de estrellas al confirmar
- `useDeviceOrientation` usa el giroscopio del móvil para mover las estrellas 3D en paralaje
- El CountdownTimer se actualiza cada segundo con `setInterval`

## Historial de Cambios Recientes

Según git log:
- `cambios ios 3` / `cambios ios 2` / `Cambios wsp apple` / `Cambios en mensaje de wsp 4-5` — ajustes recientes al flujo de WhatsApp/RSVP y compatibilidad iOS
