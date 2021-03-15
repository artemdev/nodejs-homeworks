module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    'jest/globals': true,
  },
  extends: ['standart', 'plugin:json/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {

  }
}