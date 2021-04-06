module.exports = {
  env: {
    browser: true,
    es2021: true,
    'cypress/globals': true,
    'jest/globals': true,
  },
  extends: [
    'plugin:cypress/recommended',
    'plugin:react/recommended',
    'airbnb',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/no-array-index-key': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-props-no-spreading': 0,
    'import/no-named-as-default': 0,
  },
  overrides: [
    {
      files: ['**/*.test.js'],
      plugins: ['jest'],
      env: {
        jest: true,
      },
      // eslint-disable-next-line global-require, import/no-extraneous-dependencies
      ...require('eslint-plugin-jest').configs.recommended,
    },
  ],
};
