import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/postcss';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

export default defineConfig({
  root: 'static-src',
  publicDir: false,
  base: '/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('.', import.meta.url)),
    },
  },
  css: { postcss: { plugins: [tailwindcss()] } },
  plugins: [react()],
  build: {
    outDir: '../.apache-build',
    emptyOutDir: true,
    manifest: 'site-assets/manifest.json',
    assetsDir: 'site-assets',
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        // Keep shell-only edits from rotating every lazy route. Do not group
        // all dependencies here: the heavier dialog code must stay on demand.
        // React and Lucide share modules across the shell and route chunks.
        manualChunks(id) {
          if (
            id.includes('/node_modules/react/') ||
            id.includes('/node_modules/react-dom/') ||
            id.includes('/node_modules/scheduler/') ||
            id.includes('/node_modules/lucide-react/')
          ) {
            return 'ui-runtime';
          }
        },
        entryFileNames: 'site-assets/[name]-[hash].js',
        chunkFileNames: 'site-assets/[name]-[hash].js',
        assetFileNames: 'site-assets/[name]-[hash][extname]',
      },
    },
  },
});
