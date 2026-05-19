import js from '@eslint/js';
import prettier from 'eslint-plugin-prettier/recommended';

export default [
  {
    ignores: [
      'node_modules/**',
      'imagens/**',
      'tailwind.config.js',
      'scripts/*.js',
    ],
  },
  js.configs.recommended,
  prettier,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
  },
];
