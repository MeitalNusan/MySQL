import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", // Esto es necesario para que los recursos se carguen correctamente en producción
  build: {
    outDir: 'dist' // Asegúrate de que los archivos de salida se coloquen en la carpeta 'dist'
  }
})
