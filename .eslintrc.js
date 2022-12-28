module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: ['./tsconfig.json'],
    tsconfigRootDir: './',
    createDefaultProgram: true,
  },
  plugins: ['@typescript-eslint', 'import'],
};
