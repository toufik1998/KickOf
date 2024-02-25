module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      ['@babel/preset-env', {targets: {node: 'current'}}],
      'module:metro-react-native-babel-preset',
      '@babel/preset-flow',
    ],
  };
};