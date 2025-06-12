import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'

// Safely access environment variables
const getEnvVariable = (key, defaultValue) => {
  if (typeof process !== 'undefined' && process.env && process.env[key]) {
    return process.env[key]
  }
  
  if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env[key]) {
    return import.meta.env[key]
  }
  
  return defaultValue
}

const BACKEND_URL = getEnvVariable('VITE_REACT_APP_BACKEND_BASEURL', 'https://edu-soft-main.vercel.app')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: BACKEND_URL,
        changeOrigin: true,
      },
      '/auth': BACKEND_URL,
    },
    // Add history API fallback for client-side routing
    historyApiFallback: true,
  },
})
