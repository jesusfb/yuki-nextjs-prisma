/** @typedef {import('prettier').Config} PrettierConfig */
/** @typedef {import('prettier-plugin-tailwindcss')} TailwindConfig */
/** @typedef {import('@ianvs/prettier-plugin-sort-imports')} SortImportsConfig */

/** @type {PrettierConfig | TailwindConfig | SortImportsConfig} */
const config = {
  semi: false,
  tabWidth: 2,
  printWidth: 100,
  singleQuote: true,
  trailingComma: 'all',
  tailwindFunctions: ['cn', 'cva'],
  plugins: ['prettier-plugin-tailwindcss', '@ianvs/prettier-plugin-sort-imports'],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy', 'moduleStringNames'],
  importOrderTypeScriptVersion: '5.6.2',
  importOrder: [
    '<TYPES>',
    '^(next/(.+))$',
    '^(react/(.+))$|^(react)$',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@/components/(.*)$',
    '_components/(.*)$',
    '',
    '<TYPES>^(@/(.+))$',
    '^(@/server|@/emails|@/hooks|@/lib|@)(/.*)$',
    '^[..]',
    '^[.]',
  ],
}

export default config
