import { coverageConfigDefaults, defineConfig } from 'vitest/config';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export default defineConfig({
  test: {
    coverage: {
      include: ['src/**'],
      exclude: ['src/**/*.test.ts', ...coverageConfigDefaults.exclude],
      reporter: ['text', 'json', 'html'],
    },
  },
});
