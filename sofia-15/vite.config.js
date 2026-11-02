import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// El sitio se publica en dos lugares:
//  - Vercel (link principal): se sirve desde la raíz → base '/'
//  - GitHub Pages: se sirve en /InvitacionSofiaXV/
// Vercel define VERCEL=1 y VERCEL_PROJECT_PRODUCTION_URL (p. ej. "xv-sofia.vercel.app")
// durante el build, así que cada build se ajusta solo.
const onVercel = !!process.env.VERCEL
const base = onVercel ? '/' : '/InvitacionSofiaXV/'
const siteUrl = onVercel && process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}/`
  : 'https://florezzz17.github.io/InvitacionSofiaXV/'

// Reemplaza __SITE_URL__ en index.html (meta Open Graph para WhatsApp)
const siteUrlPlugin = {
  name: 'site-url',
  transformIndexHtml: (html) => html.replaceAll('__SITE_URL__', siteUrl),
}

export default defineConfig({
  plugins: [react(), tailwindcss(), siteUrlPlugin],
  base,
})
