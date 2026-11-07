import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// Relative base so the build works on both user (<user>.github.io) and project Pages URLs.
export default defineConfig({
  base: './',
  plugins: [svelte()],
  // GitHub Pages serves the committed docs/ folder from main.
  build: { outDir: 'docs', emptyOutDir: true },
  // Listen on all interfaces so the server is reachable from outside the container.
  server: { host: true, port: 5173 },
  preview: { host: true, port: 4173 },
});
