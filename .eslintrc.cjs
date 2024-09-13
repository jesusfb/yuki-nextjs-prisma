/** @type {import("eslint").Linter.Config} */
const config = {
  parser: '@typescript-eslint/parser',
  parserOptions: { project: true },
  plugins: ['@typescript-eslint'],
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
  ],
  ignorePatterns: ['**/env.js'],
  rules: {
    '@typescript-eslint/array-type': 'off',
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/no-unnecessary-condition': [2, { allowConstantLoopConditions: true }],
    '@typescript-eslint/no-misused-promises': [2, { checksVoidReturn: { attributes: false } }],
    '@typescript-eslint/no-unused-vars': [2, { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      { prefer: 'type-imports', fixStyle: 'separate-type-imports' },
    ],
    'no-restricted-properties': [
      'error',
      {
        object: 'process',
        property: 'env',
        message: "Use `import { env } from '@/env'` instead to ensure validated types.",
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        name: 'process',
        importNames: ['env'],
        message: "Use `import { env } from '@/env'` instead to ensure validated types.",
      },
    ],
  },
}
module.exports = config
