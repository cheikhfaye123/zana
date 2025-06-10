import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// @ts-ignore
import ViteRewriteAll from 'vite-plugin-rewrite-all';

export default defineConfig({
  plugins: [
    react(),
    ViteRewriteAll()
  ]
});
