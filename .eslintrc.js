/** Разрешенные импорты (с публичными API) */
const ALLOWED_PATH_GROUPS = [
  'pages',
  'pages/**',
  'widgets/**',
  'features/**',
  'entities/**',
  'shared/**',
].map((pattern) => ({
  pattern,
  group: 'internal',
}))
/** Для запрета приватных путей */
const DENIED_PATH_GROUPS = [
  // Private imports are prohibited, use public imports instead
  'app/**',
  'pages/*/**',
  'widgets/*/**',
  'features/*/**',
  'entities/*/**',
  'shared/*/*/**',
  // Prefer absolute imports instead of relatives (for root modules)
  '../**/app',
  '../**/pages',
  '../**/widgets',
  '../**/features',
  '../**/entities',
  '../**/shared',
]

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
  },
  plugins: ['react', '@typescript-eslint'],
  extends: [
    'react-app',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  rules: {
    // imports
    'import/first': 2,
    'import/no-unresolved': 0,
    'import/order': [
      1,
      {
        'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'pathGroups': ALLOWED_PATH_GROUPS,
        'pathGroupsExcludedImportTypes': ['react'],
        'alphabetize': {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
    'import/newline-after-import': [2, { count: 1 }],
    'no-restricted-imports': [2, { patterns: DENIED_PATH_GROUPS }],
    // variables
    'prefer-const': 2,
    'no-var': 2,
    // base
    'camelcase': [1, { ignoreDestructuring: true, ignoreImports: true, properties: 'never' }],
    'no-else-return': 2,
    'max-len': [1, { code: 120, ignoreStrings: true }],
    'dot-notation': 2,
    'eol-last': 2,
    // prettier
    'prettier/prettier': [
      1,
      {
        semi: false,
        bracketSpacing: false,
      },
    ],
    // alert, console
    'no-alert': 2,
    'no-console': 0,
    // equals
    'eqeqeq': 1,
    'no-eq-null': 2,
    // function
    'max-params': [1, 2],
    'arrow-parens': [2, 'always'],
  },
}
