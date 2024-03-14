import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Other build configurations
  },
  server: {
    // Other server configurations
  },
});
