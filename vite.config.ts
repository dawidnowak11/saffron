import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // <- DODAJ TO TUTAJ
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
