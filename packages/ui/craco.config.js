const path = require('path');
const fs = require('fs');
const CracoAntDesignPlugin = require('craco-antd');
const CracoLinariaPlugin = require('craco-linaria');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const GLOBAL_SASS_VARIABLES_PATH = path.resolve(__dirname,
  'src/styles/common/variables.scss',
);

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: [
    { plugin: CracoAntDesignPlugin },
    {
      plugin: CracoLinariaPlugin,
      options: {
        displayName: isDev,
        preprocessor: 'none',
        source: isDev,
      }
    },
  ],
  devServer: {
    open: false,
  },
};
