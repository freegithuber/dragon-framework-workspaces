const path = require('path');

module.exports = {
  testEnvironment: 'jsdom',
  testURL: 'http://127.0.0.1:4444',
  verbose: true,
  rootDir: path.resolve(__dirname, '../../'),
  moduleFileExtensions: [
    'js',
    'json',
    'vue',
  ],
  moduleNameMapper: {
    '^.+\\.css': '<rootDir>/node_modules/jest-css-modules',
    '^.+\\.less': '<rootDir>/node_modules/jest-css-modules',
    '^.+\\.scss': '<rootDir>/node_modules/jest-css-modules',
    '^.+\\.sass': '<rootDir>/node_modules/jest-css-modules',
    '^.+\\.styl': '<rootDir>/node_modules/jest-css-modules',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
  },
  testPathIgnorePatterns: [
    '<rootDir>/test/e2e',
  ],
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  setupFiles: ['<rootDir>/test/unit/setup'],
  mapCoverage: true,
  coverageDirectory: '<rootDir>/test/unit/coverage',
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/main.js',
    '!src/router/index.js',
    '!**/node_modules/**',
  ],
};

