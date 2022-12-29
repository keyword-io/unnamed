module.exports = {
  testTimeout: 30000,
  testMatch: ['<rootDir>/__tests__/**/**.spec.ts?(x)'],
  testPathIgnorePatterns: [
    '/node_modules/',
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/__tests__/config/scriptFileTransformer.js',
    '^.+\\.css$': '<rootDir>/node_modules/react-scripts/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '<rootDir>/node_modules/react-scripts/config/jest/fileTransform.js',
  },
  setupFiles: [
    '<rootDir>/__tests__/config/jest.setup.js',
  ],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/__tests__/config/setupFilesAfterEnv.js'],
  coverageThreshold: {
    global: {
      branches: 89,
      functions: 99,
      lines: 99,
      statements: -5,
    },
  },
}
