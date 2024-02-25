module.exports = {
    preset: 'react-native',
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
    "transformIgnorePatterns": [
        "node_modules/(?!(jest-)?react-native|@react-native-community|@react-navigation|@react-native|@unimodules)"
    ]
  };