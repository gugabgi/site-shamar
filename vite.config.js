import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        privacy: fileURLToPath(new URL('./shamar-igrejas/politica-de-privacidade/index.html', import.meta.url)),
        deletion: fileURLToPath(new URL('./shamar-igrejas/exclusao-de-conta/index.html', import.meta.url)),
        terms: fileURLToPath(new URL('./shamar-igrejas/termos-de-uso/index.html', import.meta.url)),
      },
    },
  },
})
