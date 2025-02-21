import tseslint from '@typescript-eslint/eslint-plugin'
import tseslintParser from '@typescript-eslint/parser'
import nextPlugin from '@next/eslint-plugin-next'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import tailwindcss from 'eslint-plugin-tailwindcss'
import jsx_a11y from 'eslint-plugin-jsx-a11y'
import reactPlugin from 'eslint-plugin-react'
import globals from 'globals'
import prettierConfig from 'eslint-config-prettier'
import prettier from 'eslint-plugin-prettier'

export default [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ignores: [
      '.cache/**',
      'public/**',
      '*.esm.js',
      'node_modules/**',
      '.next/**',
      'dist/**',
      'src/paraglide/**',
    ],
    languageOptions: {
      parser: tseslintParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      react: reactPlugin,
      next: nextPlugin,
      'simple-import-sort': simpleImportSort,
      tailwindcss: tailwindcss,
      prettier: prettier,
      'jsx-a11y': jsx_a11y,
    },
    rules: {
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
      'sort-imports': 'off',
      'tailwindcss/no-custom-classname': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^.+\\.s?css$'],
            [
              '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
              '^react',
              '^@?\\w',
            ],
            ['^components(/.*|$)'],
            ['^lib(/.*|$)', '^hooks(/.*|$)'],
            ['^\\.'],
          ],
        },
      ],
      // TypeScript rules
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',

      // React rules
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/jsx-uses-react': 'off',
    },
    settings: {
      tailwindcss: {
        callees: ['cn'],
        config: 'tailwind.config.js',
      },
    },
  },
  prettierConfig,
]
