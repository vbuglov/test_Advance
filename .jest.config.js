module.exports = {
  setupFiles: ['<rootDir>/.jest.setup.js'],
  coverageDirectory: './coverage',
  testURL: 'http://172.25.78.153',
  collectCoverage: true,
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testPathIgnorePatterns: ['<rootDir>/.next', '<rootDir>/node_modules'],
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.js$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@/config/(.*)$': '<rootDir>config/$1',
    '^@/(.*)$': '<rootDir>src/$1',
  },
}
