import js from '@eslint/js'
import tseslint from 'typescript-eslint'
// import tseslintPlugin from '@typescript-eslint/eslint-plugin'
// import tseslintParser from '@typescript-eslint/parser'
import { defineConfig } from 'eslint/config'
import standard from './lib/index.js'
import pluginImport from 'eslint-plugin-import'

export default defineConfig([
  standard,
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,jsx,tsx}'],
    ignores: [
      'jest.config.ts',
      '**/*.d.ts'
    ],
    plugins: {
      js,
      import: pluginImport,
      standard
    },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended
    ]
  }
])
