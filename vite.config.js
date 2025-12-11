import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// =============================================================================
// VITE CONFIGURATION
// =============================================================================
// This file configures Vite build tool for your portfolio
// - React plugin: Enables JSX and React Fast Refresh
// - Tailwind CSS: Enables Tailwind styling
// =============================================================================

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  
  // Base URL for GitHub Pages deployment
  // Change this if deploying to a subdirectory
  base: '/',
  
  // Build optimizations
  build: {
    // Generate sourcemaps for debugging
    sourcemap: false,
    // Minimize output
    minify: 'terser',
    // Chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          icons: ['lucide-react'],
        },
      },
    },
  },
})
