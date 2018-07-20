
const path = require('path');

module.exports = {
  context: path.join(__dirname, '/client/src'),
  entry: './index.jsx',
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  output: {
    path: path.join(__dirname, '/client/dist'),
    filename: 'app.js',
  },
};
