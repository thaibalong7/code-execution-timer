module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testTimeout: 20000,
  globals: {
    'ts-jest': {
      diagnostics: false
    }
  }
};
