import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' 
import { defineConfig } from 'vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  //Criando apelido(alias) para voltarmos a pasta root de src usando @
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
  },
})
