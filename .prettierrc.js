module.exports = {
  printWidth: 100,
  tabWidth: 2,
  singleQuote: true,
  semi: false,
  bracketSpacing: false,
  trailingComma: 'all',
  arrowParens: 'always',
  quoteProps: 'consistent',
  endOfLine: 'auto',
  overrides: [
      {
          files: '*.{json,yml,md}',
          options: {
              tabWidth: 4,
              singleQuote: false,
          },
      },
      {
          files: '*.{ts,tsx}',
          options: {
              parser: 'typescript',
          },
      },
  ],
}