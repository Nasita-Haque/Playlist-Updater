const path = require("path");
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: "./frontend/app.jsx",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, '/public')
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', `react`]
        }
      },
       {
        test: /\.css$/,
        loader: 'style!css!'
      },
      {
        test: /\.(ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        loader: 'file'
      }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: [".js", ".jsx", ".css"]
  }
};