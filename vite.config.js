import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-redirect',
      generateBundle() {
        this.emitFile({
          type: 'asset',
          fileName: '_redirects',
          source: '/* /index.html 200'
        })
      }
    }
  ],
  build: {
    outDir: 'dist'
  }
})
