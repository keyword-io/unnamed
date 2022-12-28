module.exports = {
  presets: [
    [
      '@babel/preset-react',
      {
        runtime: 'classic',
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
