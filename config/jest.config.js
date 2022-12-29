const path = require("path");

module.exports = {
  transform: {
    '.ts': [
      'ts-jest',
      {
        isolatedModules: true,
        diagnostics: false,
        tsconfig: path.resolve(__dirname, './tsconfig.test.json'),
      }
    ],
  },

  moduleFileExtensions: ['ts', 'js'],

  testMatch: ['<rootDir>/__tests__/**/**.spec.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/lib/', '<rootDir>/lib/'],

  testEnvironment: "node",
  maxWorkers: "50%",
  coveragePathIgnorePatterns: ['generated']
};
