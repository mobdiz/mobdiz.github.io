/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  plugins: ["effector", "import"],
  extends: [
    "eslint:recommended",
    "plugin:effector/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  rules: {
    'import/named': ['error'],
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    'shared-node-browser': true
  },
};
