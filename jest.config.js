module.exports = {
  roots: ['./test'],
  testMatch: ['**/__tests__/**/*.+(js)', '**/?(*.)+(spec|test).+(js)'],
  collectCoverageFrom: ['**/*.{js}', '!**/node_modules/**'],
  testEnvironment: 'node',
};
