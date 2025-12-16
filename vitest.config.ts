import { coverageConfigDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      include: ['src/**'],
      exclude: ['src/**/*.test.ts', ...coverageConfigDefaults.exclude],
      reporter: ['text', 'json', 'html'],
    },
  },
});
