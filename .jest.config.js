module.exports = {
  setupFiles: ["<rootDir>/.jest.setup.js"],
  coverageDirectory: "./coverage",
  testURL: "http://127.0.0.1:3000",
  collectCoverage: true,
  snapshotSerializers: ["enzyme-to-json/serializer"],
  testPathIgnorePatterns: ["<rootDir>/.next", "<rootDir>/node_modules"],
  transform: {
    "^.+\\.jsx$": "babel-jest",
    "^.+\\.js$": "babel-jest",
  },
  moduleNameMapper: {
    "^@/config/(.*)$": "<rootDir>config/$1",
    "^@/atoms/(.*)$": "<rootDir>src/components/1_atoms/$1",
    "^@/molecules/(.*)$": "<rootDir>src/components/2_molecules/$1",
    "^@/organisms/(.*)$": "<rootDir>src/components/3_organisms/$1",
    "^@/templates/(.*)$": "<rootDir>src/components/4_templates/$1",
    "^@/pages/(.*)$": "<rootDir>src/components/5_pages/$1",
    "^@/wrappers/(.*)$": "<rootDir>/src/components/6_wrappers/$1",
    "^@/(.*)$": "<rootDir>src/$1",
  },
};
