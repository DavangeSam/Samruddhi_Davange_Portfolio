import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Samruddhi-Davange-Portfolio/', 
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
})

