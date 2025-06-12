import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'


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
        target: import.meta.env.VITE_REACT_APP_BACKEND_BASEURL,
        changeOrigin: true,
      },
      '/auth': import.meta.env.VITE_REACT_APP_BACKEND_BASEURL,
    },
    // Add history API fallback for client-side routing
    historyApiFallback: true,
  },
})
