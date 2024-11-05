import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true  // Aktiviert die Source Maps für den Produktionsmodus
  },
  server: {
    sourcemap: true  // Aktiviert die Source Maps für den Entwicklungsmodus
  }
})
