const babelJest = require('babel-jest');

module.exports = {
  process(src, filename, config, options) {
    const babelConfig = {
      configFile: './__tests__/config/babel.config.js',
    };
    const babelProcess = babelJest.createTransformer(babelConfig).process;
    return babelProcess(src, filename, config, options);
  },
  getCacheKey: babelJest.createTransformer().getCacheKey,
  canInstrument: true,
};
