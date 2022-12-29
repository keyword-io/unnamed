module.exports = {
  presets: [
    ['react-app', { typescript: true }],
    [
      'linaria/babel',
      {
        babelOptions: {
          presets: ['@babel/preset-typescript'],
        },
      },
    ],
    [
      '@babel/preset-typescript',
      {
        allowNamespaces: true,
      },
    ],
  ],
};
