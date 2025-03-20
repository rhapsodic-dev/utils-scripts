import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      reporter: ['text'],
      exclude: ['node_modules', 'test', '*.config.js', '*.config.ts', 'dist', '**/types.ts'],
    },
  },
});
