import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import { defineConfig } from 'eslint/config'
import standard from './lib/index.js'
import pluginImport from 'eslint-plugin-import'
export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,jsx,tsx}'],
    ignores: ['jest.config.ts', '**/*.d.ts', '**/*.spec.ts'],
    plugins: {
      js,
      import: pluginImport
    },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      standard.configs.recommended
    ]
  }
])
