require('dotenv').config();

module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/ui-tests/**/*.ui.test.ts'],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {}],
  },
  verbose: true,
};
