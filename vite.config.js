import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Samruddhi_Davange_Portfolio/', 
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
})

