module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/recommended',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'new-cap': 'off',
    'space-before-function-paren': 'off',
    'max-len': 'error'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
