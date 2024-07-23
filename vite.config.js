import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://gergely-k5a.github.io',
  plugins: [react()],
  server: {
    open: true,
  },
});
