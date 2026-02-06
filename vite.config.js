import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Replace 'your-repo-name' with: gesix-internship-personalportfolio
  base: "/gesix-internship-personalportfolio/", 
})