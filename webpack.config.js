
const path = require('path');

module.exports = {
  context: path.join(__dirname, '/client/src'),
  entry: './index.jsx',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'env'],
        },
      },
    ],
  },
  output: {
    path: path.joiin(__dirname, '/client/dist'),
    filename: 'app.js',
  },
  env: {
    browser: true,
    jest: true,
  },
  jest: {
    testEnvironment: 'jsdom',
  },
};
