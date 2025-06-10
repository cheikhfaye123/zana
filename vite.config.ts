import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ViteRewriteAll from 'vite-plugin-rewrite-all';

export default defineConfig({
  plugins: [
    react(),
    ViteRewriteAll(),
  ],
});
