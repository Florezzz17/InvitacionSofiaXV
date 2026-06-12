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
| Animaciones | CSS keyframes (centralizados en `index.css`) |
| Íconos | lucide-react |
| Lenguaje | JavaScript + JSX (sin TypeScript) |
| Deploy | GitHub Actions → GitHub Pages |

## Estructura del Proyecto

```
XVSOFIA1/
├── .github/workflows/deploy.yml   # CI/CD: deploy automático a GitHub Pages al hacer push a main
├── generador-links.html            # Herramienta LOCAL (no se publica): genera links personalizados
├── sofia-15/                       # Directorio principal de la app
│   ├── public/
│   │   ├── musica.mp3             # Canción de fondo (suena al abrir la invitación)
│   │   └── og.jpg                 # Imagen de previsualización Open Graph (WhatsApp)
│   ├── src/
│   │   ├── assets/
│   │   │   ├── photos/            # foto1.jpg – foto5.jpg (galería de Sofía)
│   │   │   └── starry-night.jpg   # Imagen de fondo Van Gogh (recomprimida, 314 KB)
│   │   ├── components/
│   │   │   ├── Background/
│   │   │   │   └── StarryNight.jsx     # Estrellas 3D + estrellas fugaces + Ken Burns + giroscopio
│   │   │   ├── sections/
│   │   │   │   ├── Hero.jsx            # Portada: título, fecha, countdown, ubicación
│   │   │   │   ├── Story.jsx           # Galería horizontal con marcos dorados
│   │   │   │   ├── Details.jsx         # Detalles + mapa + Cómo Llegar / Agregar al Calendario
│   │   │   │   ├── Programa.jsx        # Cronograma del evento (6PM–9PM)
│   │   │   │   ├── DressCode.jsx       # Código de vestimenta + paleta de colores
│   │   │   │   ├── LluviaDeSobres.jsx  # Sección de regalos (sobres)
│   │   │   │   ├── Indicaciones.jsx    # Info práctica: fecha límite RSVP, parqueo, hashtag
│   │   │   │   └── Confirmacion.jsx    # RSVP con integración WhatsApp (personalizable)
│   │   │   └── ui/
│   │   │       ├── Navbar.jsx          # Links inline desktop / hamburguesa móvil
│   │   │       ├── Welcome.jsx         # Portada de apertura "Abrir Invitación ✨"
│   │   │       └── CountdownTimer.jsx  # Contador regresivo en tiempo real
│   │   ├── hooks/
│   │   │   ├── useDeviceOrientation.js # Giroscopio (ref + permiso iOS en primer toque)
│   │   │   └── useScrollReveal.js      # Animación de entrada por sección (one-shot)
│   │   ├── utils/
│   │   │   └── guest.js           # Lee ?i=nombre&c=cupos para invitaciones personalizadas
│   │   ├── App.jsx                # Raíz: portada, música, loader y todas las secciones
│   │   ├── index.css              # Estilos globales, keyframes, .glass, .btn-gold, etc.
│   │   └── main.jsx               # Punto de entrada React
│   ├── index.html                 # Meta OG + favicon + loader estático
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
- **URL pública:** `https://florezzz17.github.io/InvitacionSofiaXV/` (usuario de GitHub: `Florezzz17`, con tres "z")
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
- **Efecto visual:** Glassmorphism (frosted glass), glow, blur — centralizado en la clase `.glass`: blur 18px en desktop, **9px en pantallas táctiles** (`@media (pointer: coarse)`); mismo aspecto por la densidad de píxeles del móvil, mitad de costo de GPU. **No volver a poner `backdropFilter` inline en tarjetas** — usar `.glass`
- **Responsive:** Mobile-first con `clamp()` para tipografía fluida

## Secciones de la SPA

0. **Loader estático** (index.html) — estrella pulsando mientras descarga el bundle JS; React lo elimina al montar
0.5. **Welcome** (ui/Welcome.jsx) — portada "Abrir Invitación ✨" que cubre la página; el primer toque habilita giroscopio iOS e inicia la música. App agrega la clase `.app-opened` al abrir, que dispara las animaciones del Hero
1. **Hero** — Portada con título, fecha, ubicación, countdown y CTA de scroll
2. **StarryNight** (Background) — Canvas 3D con estrellas, paralaje giroscópico, estrellas fugaces CSS y Ken Burns del fondo
3. **Navbar** — Links inline en desktop (≥920px), hamburguesa en móvil
4. **Story** — Galería de fotos con scroll horizontal, marcos dorados y captions
5. **Details** — Información del evento con mapa de Google Maps embebido + botones Cómo Llegar / Agregar al Calendario
6. **Programa** — Timeline del programa (6PM–9PM) con íconos
7. **DressCode** — Reglas de vestimenta y paleta de colores sugerida
8. **LluviaDeSobres** — Sección de información sobre regalos
9. **Indicaciones** (id `info`) — Información práctica: fecha límite RSVP (1 dic 2026), parqueadero, clima finca, hashtag #LaNocheDeSofia
10. **Confirmacion** — RSVP: abre WhatsApp con mensaje prefillado; incluye fecha límite

### Música de fondo
- App busca `public/musica.mp3` con un `fetch` HEAD; si existe y es audio, muestra el botón flotante 🔊 (`.music-btn`) y arranca la canción al abrir la invitación (volumen 0.45, loop)
- **Si no hay archivo, no se muestra nada** — para cambiar la canción basta con reemplazar `sofia-15/public/musica.mp3` (el nombre debe ser exactamente ese, en minúsculas)
- Canción actual: la entregó el usuario el 2026-06-12 (3.22 MB, 3:45)

## Notas de Desarrollo

- El proyecto **no usa TypeScript** — todo es `.jsx` / `.js`
- Los estilos se mezclan entre Tailwind utilities, inline styles y CSS global; los elementos interactivos (botones, links de navegación) usan clases CSS definidas en `index.css` (`.btn-gold`, `.btn-ghost`, `.nav-link`, `.menu-link`, etc.) con estados `:hover` y `:focus-visible`
- Los `@keyframes` compartidos (fadeInUp, float, bounce, popIn, starFall, shootingStar) viven en `index.css` — no duplicarlos en componentes
- El estado se maneja solo con hooks de React (useState, useEffect) — sin Redux ni Context global
- La sección `Confirmacion` dispara una animación de partículas de estrellas al confirmar
- `useDeviceOrientation` guarda los ángulos del giroscopio en un **ref** (no estado, para evitar 60 re-renders/s) y devuelve `orientationRef`; en iOS 13+ pide el permiso automáticamente en el primer toque (`pointerdown` one-shot)
- El CountdownTimer se actualiza cada segundo con `setInterval`; la fecha objetivo lleva offset explícito `-05:00` (hora de Colombia)
- El navbar muestra links inline en pantallas ≥920px y menú hamburguesa por debajo
- `public/og.jpg` es la imagen de previsualización Open Graph al compartir el link por WhatsApp
- `useScrollReveal` usa `IntersectionObserver` para disparar animaciones de entrada al hacer scroll — se desconecta luego de la primera intersección (one-shot)
- `StarryNight` usa un `ShaderMaterial` custom con uniforms `uTime`, `uHeight`, `uDpr` para parpadeo por estrella y tamaño correcto en cualquier pantalla

## Estrellas 3D (StarryNight.jsx)

El fondo usa un shader GLSL custom en lugar del `pointsMaterial` original:

- **400 estrellas** en 3 niveles: 75% pequeñas, 18% medianas, 7% grandes/brillantes
- **Parpadeo individual**: cada estrella tiene `aPhase` y `aSpeed` aleatorios → `sin(uTime * aSpeed + aPhase)`
- **Tamaño correcto**: fórmula `projectionMatrix[1][1] * uHeight * 0.5 / -mvPosition.z * uDpr` (equivalente a `sizeAttenuation: true` de Three.js)
- **Colores**: blanco, blanco cálido, amarillo, dorado, azul-blanco, azul pálido
- **Forma**: círculo suave con halo (no punto cuadrado) via `smoothstep` en el fragment shader
- **Blending**: `THREE.AdditiveBlending` — estrellas superpuestas suman su luz

## Correcciones Aplicadas (sesión 2026-06-08)

### Bugs visuales corregidos
- 6 valores `clamp()` estaban invertidos (min > max) en `Hero.jsx`, `DressCode.jsx`, `LluviaDeSobres.jsx`
- Mapa embebido en `Details.jsx` apuntaba a Floridablanca genérico → corregido a coordenadas `7.0130127, -73.0606502`
- Comentario de debug `//sasdasdasdadasdasda` eliminado de `Confirmacion.jsx`

### Mejoras de diseño
- **Scroll reveal**: `useScrollReveal.js` — fade + slide de 28px al entrar cada sección en viewport
- **Navbar activa**: `IntersectionObserver` resalta en dorado la sección visible actual
- **Navbar footer**: texto corregido a `0.8rem`, color sutil, tilde en "Sofía"
- **Hint galería**: `fontSize` de `1.75rem` → `0.75rem` sutil
- **Programa mobile**: tarjetas centradas en pantallas < 560px via media query
- **Hero ubicación**: emoji `📍` reemplazado por ícono `MapPin` de lucide-react

## Mejora Integral (sesión 2026-06-12)

### Bugs corregidos
- **Giroscopio iOS**: nadie llamaba a `requestPermission()` — ahora se pide en el primer toque (iOS 13+ exige gesto de usuario); el paralaje nunca funcionaba en iPhone
- **Re-renders 60/s en Android**: la orientación pasó de `useState` a `useRef`
- **Día equivocado**: `Details.jsx` decía "Miércoles, 19 de Diciembre de 2026" — es **sábado**
- **Zona horaria del countdown**: fecha objetivo ahora con offset `-05:00`
- **CSS global filtrado**: `Story.jsx` inyectaba `div::-webkit-scrollbar { display:none }` sin scope (ocultaba scrollbars de toda la página) — ahora scoped a `.story-gallery`
- **Keyframes duplicados** con valores distintos entre secciones — consolidados en `index.css`
- Tilde de "Código de Vestimenta" en navbar (label acortado a "Vestimenta")

### Mejoras de diseño / UX
- Navbar con **links inline en desktop** (≥920px); hamburguesa solo en móvil; cierre con Escape; `aria-expanded`/`aria-current`
- **Animación de entrada escalonada** en el Hero (clase `.hero-reveal` con `--reveal-delay`)
- **Estrellas fugaces** ocasionales en el fondo (CSS puro, 3 instancias con delays distintos)
- Botón **"Agregar al Calendario"** (Google Calendar) junto a "Cómo Llegar" en Details
- CTA "Desliza para ver la magia" ahora es un botón que hace scroll a la galería
- Hover migrado de `onMouseEnter/Leave` inline a clases CSS con `:hover`/`:focus-visible` (soporte de teclado)
- `scroll-margin-top` en secciones para que el navbar fijo no tape los títulos
- Galería con `scroll-snap`, imágenes `loading="lazy"` y `draggable={false}`
- `prefers-reduced-motion` respetado globalmente
- Meta tags **Open Graph** + favicon ✨ + `public/og.jpg` para previsualización en WhatsApp
- `starry-night.jpg` recomprimida: 604 KB → 314 KB (calidad 62, sin pérdida visible)
- Partículas de confirmación: 150 → 80 (rendimiento móvil)
- Nota de paleta en DressCode más sutil (0.9rem); bordes visibles en las muestras de color
- Eliminados `App.css` y `react.svg` (restos de la plantilla Vite); deploy con `npm ci`

## Experiencia de Entrada + Sección Información (sesión 2026-06-12, parte 2)

- **Loader estático** en `index.html`: estrella dorada pulsando + "La Noche Estrellada de Sofía" visible desde el primer byte (el bundle JS pesa ~1.1 MB); App lo desvanece al montar
- **Portada de apertura** (`Welcome.jsx`): "Tienes una invitación → Abrir Invitación ✨"; bloquea el scroll hasta abrir; el toque habilita giroscopio iOS y autoplay de música
- **Música de fondo opcional**: detectada vía HEAD a `public/musica.mp3`; botón flotante de mute
- **Animaciones del Hero** ahora arrancan al abrir la invitación (clase `.app-opened`), no al cargar la página
- **Nueva sección Indicaciones** (`id="info"`, label "Información" en navbar): fecha límite de confirmación, parqueadero, noche campestre/abrigo, hashtag
- **Ken Burns**: zoom 1.0→1.08 en 80s sobre el fondo Van Gogh (`.bg-kenburns`)
- **Contraste mejorado**: gradiente oscurecedor detrás de Details, DressCode e Indicaciones
- Fecha límite de RSVP repetida en la sección Confirmación
- **Textos CONFIRMADOS por el usuario**: fecha límite (1 de diciembre de 2026), la finca sí tiene parqueadero, hashtag #LaNocheDeSofia
- **Decisión del usuario**: sección padres/padrinos descartada

## Invitaciones Personalizadas (sesión 2026-06-12, parte 3)

- **`src/utils/guest.js`** lee `?i=<nombre>` y `&c=<cupos>` de la URL una sola vez al cargar (exporta `GUEST`); nombre limitado a 60 caracteres, cupos válidos 1–20
- **Welcome**: con nombre muestra "— Esta invitación es para — / {nombre}" y "✦ N lugares reservados ✦"; sin parámetros, versión genérica intacta
- **Confirmacion**: muestra el nombre del invitado y el mensaje de WhatsApp dice "Confirmo la asistencia de {nombre} (N personas)…"
- **`generador-links.html`** (raíz del repo, NO se publica): herramienta local — pegar lista "Nombre, cupos" (uno por línea) → genera todos los links con encoding correcto y botones de copiar
- **⚠️ Al armar links a mano**: los espacios deben ir como `%20` o WhatsApp corta el link en el espacio — por eso usar siempre el generador
- **PENDIENTE: el usuario pasará la lista de invitados en una próxima sesión**

## Ajustes Finales (sesión 2026-06-12, parte 4)

### Estrellas fugaces "sutil-pero-visible"
- El usuario no las veía: eran de 2px, se apagaban apenas aparecían y el cuadro las camuflaba (además la portada de apertura las tapa — solo se ven tras abrir)
- Ajuste aprobado: trazo de 3px con punto brillante en la cabeza (`::after`), doble resplandor (blanco + dorado), brillo pleno del 1.5% al 10% del ciclo, ciclos 9/12/15s → un destello cada ~4s en promedio
- Viajan por detrás de las tarjetas de contenido (correcto); se aprecian en el cielo abierto de los costados

### Rendimiento de scroll en móvil
- Usuario reportó ~30fps al hacer scroll en celular de 120Hz; ya verificó que el fix funcionó: **va fluido**
- Causa: `backdrop-filter: blur(18px)` inline en ~15 tarjetas sobre un fondo que anima en cada frame (canvas 3D + Ken Burns); en pantalla 3× el kernel real era ~54px de GPU por tarjeta
- Fix sin cambiar el diseño: clase `.glass` (18px desktop / 9px táctil), blur inútil bajo el iframe del mapa eliminado, canvas `dpr` 2 → 1.5
- El usuario y sus clientes valoran el diseño glassmorphism: **cualquier optimización futura debe preservar el aspecto visual**

## Historial de Commits

| Hash | Descripción |
|------|-------------|
| `10773d3` | Optimizar fluidez de scroll en móvil sin cambiar el diseño (.glass) |
| `013ee47` | Estrellas fugaces más visibles (sutil pero perceptible) |
| `5b7b5b5` | Invitaciones personalizadas por URL (?i=nombre&c=cupos) + generador |
| `f387c80` | Reemplazar canción de fondo |
| `6063c75` | Corregir URL de Open Graph (usuario GitHub: Florezzz17, tres z) |
| `243f7e0` | Mejora integral: bugs, experiencia de entrada, música y nueva sección |
| `1dcaf5e` | Mejoras de diseño y correcciones visuales (sesión 2026-06-08) |
| `273e7ee` | cambios ios 3 |
