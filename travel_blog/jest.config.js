module.exports = {
  preset: "react-native",
  setupFiles: ["<rootDir>/node_modules/react-native/jest/setup.js", "<rootDir>/test/setup.ts"],
  testPathIgnorePatterns: ["/node_modules/", "/e2e"],
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|react-native|react-navigation|@react-navigation|@react-native-community)",
  ],
}
