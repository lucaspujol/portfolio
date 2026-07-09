import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// gh-pages project site is served from /portfolio/
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
});
