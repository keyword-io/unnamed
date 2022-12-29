const babelJest = require('babel-jest');
const path = require('path');

module.exports = {
  process(src, filename, config, options) {
    const babelConfig = {
      configFile: path.resolve(__dirname, 'babel.config.js'),
    };
    const babelProcess = babelJest.createTransformer(babelConfig).process;
    return babelProcess(src, filename, config, options);
  },
  getCacheKey: babelJest.createTransformer().getCacheKey,
  canInstrument: true,
};
