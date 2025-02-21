import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import tsconfigpath from 'vite-tsconfig-paths'
import * as path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigpath()],
  resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      }
   },
})
