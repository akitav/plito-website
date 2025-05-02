import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default {
  base: '/plito-website/',
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
