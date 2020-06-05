module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
  },
  rules: {
    'import/no-extraneous-dependencies': 0,
    // Admit use of console.log and derivates in app
    'no-console': 0,
    'prettier/prettier': 'error',
    'react/require-default-props': 0,
  },
  globals: {
    graphql: true,
    window: true,
  },
  env: {
    browser: true,
  },
};
