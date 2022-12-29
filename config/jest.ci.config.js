const path = require('path');

module.exports = {
  transform: {
    '.ts': 'ts-jest',
  },

  globals: {
    'ts-jest': {
      isolatedModules: true,
      diagnostics: false,
      tsconfig: path.resolve(__dirname, './tsconfig.test.json'),
    },
  },

  moduleFileExtensions: ['ts', 'js'],

  testEnvironment: 'node',
  maxWorkers: '30%',

  rootDir: path.resolve(__dirname, '../'),
  projects: [
    '<rootDir>/packages/utils',
    '<rootDir>/packages/i18n',
  ],

  collectCoverage: true,
  collectCoverageFrom: ['**/src/**/*.ts'],
  coveragePathIgnorePatterns: [
    'typings',
    'generated',
  ],
  coverageReporters: ['text-summary', 'lcov'],

  coverageThreshold: {
    global: {
      branches: 89,
      functions: 99,
      lines: 99,
      statements: -5,
    },
  },
};
