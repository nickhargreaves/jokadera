import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Repo is served from https://nickhargreaves.github.io/jokadera/
export default defineConfig({
  base: '/jokadera/',
  plugins: [react()],
})
