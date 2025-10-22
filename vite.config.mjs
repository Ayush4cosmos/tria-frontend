import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'your-username' and 'repo-name' with your actual GitHub username & repository name
export default defineConfig({
  plugins: [react()],
  base: 'tria-frontend',  // 👈 important for GitHub Pages
})
