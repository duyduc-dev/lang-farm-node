const path = require('path');

module.exports = {
  entry: {
    // lib: './src/core/js/lib/index.ts',
    bundle: './src/core/js/index.ts',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },

  output: {
    path: path.resolve(__dirname, 'src/public/javascripts'),
    filename: '[name].js',
  },
};
