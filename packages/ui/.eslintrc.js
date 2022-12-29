const baseConfig = require('../../.eslintrc.js');

module.exports = {
  ...baseConfig,
  extends: baseConfig.extends.concat('react-app'),
  rules: {
    ...baseConfig.rules,
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/prefer-regexp-exec': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/unbound-method': 'off',
    'react/jsx-pascal-case': 'off',
    'import/no-anonymous-default-export': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/restrict-plus-operands': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
  },
  ignorePatterns: [
    '*.js',
    '*.d.ts',
    '**/generated/**/*',
    '*.spec.tsx',
  ],
};
