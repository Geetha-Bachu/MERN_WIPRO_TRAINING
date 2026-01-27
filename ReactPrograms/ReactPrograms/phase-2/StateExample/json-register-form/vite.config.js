import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),jsonServer({
apiPath: '/api',
source: 'db.json',
delay: 500, // simulate network latency
readonly: false})],
})
