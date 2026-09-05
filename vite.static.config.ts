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
    assetsDir: 'site-assets',
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        entryFileNames: 'site-assets/[name]-[hash].js',
        chunkFileNames: 'site-assets/[name]-[hash].js',
        assetFileNames: 'site-assets/[name]-[hash][extname]',
      },
    },
  },
});
