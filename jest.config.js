module.exports = {
  preset: 'jest-expo',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native' +
      '|@react-navigation' +
      '|expo(nent)?' +
      '|@expo(nent)?' +
      '|react-clone-referenced-element' +
      '|@unimodules' +
      '|native-base' +
      '|react-redux' +
      '|react-native-svg)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
};