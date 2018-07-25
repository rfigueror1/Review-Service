const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  // context: path.join(__dirname, '/client/src'),
  entry: __dirname + './client/src/index.jsx',
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?modules,localIdentName="[name]-[local]-[hash:base64:6]"',
        }),
      },
    ],
  },
  output: {
    path: path.join(__dirname, '/client/dist'),
    filename: 'app.js',
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'app.css',
      allChunks: true,
    }),
  ],
};
