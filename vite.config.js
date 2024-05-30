import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],


  server:{
    proxy:{
      "/api/decouvrir":{
        target:"http://localhost:3001",
        changeOrigin: true,
        rewrite:(path)=>path.replace(/^\/api/,'')
      },
      "/api/actualite":{
        target:"http://localhost:3002",
        changeOrigin: true,
        rewrite:(path)=>path.replace(/^\/api/,'')
      }
    }
  }
})

//npm i concurrently
