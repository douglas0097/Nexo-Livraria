import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    // Quando o frontend rodar em, por exemplo, localhost:5173:
    proxy: {
      // Qualquer requisição que comece com /api será redirecionada para o backend
      '/api': {
        target: 'http://localhost:3000', // A URL onde o seu backend Node.js está rodando
        changeOrigin: true,
        secure: false, // Pode ser necessário dependendo da configuração
      },
    },
  },
})
