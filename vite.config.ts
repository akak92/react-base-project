// vite.config.ts
import { defineConfig } from 'vitest/config';   // 👈 importa desde vitest/config
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.ts',
    css: true,
  },
});
