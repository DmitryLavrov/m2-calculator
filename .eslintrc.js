module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    indent: 'off',
    semi: ['error', 'never'],
    'space-before-function-paren': ['error', 'never'],
    quotes: ['error', 'single', {allowTemplateLiterals: true, avoidEscape: true}],
    'object-curly-spacing': ['error', 'never']
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
