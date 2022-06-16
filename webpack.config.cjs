/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    static: './public',
    hot: true,
  },
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
    //    clean: true,
  },
  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
  resolve: {
    alias: {
      $src: path.resolve(__dirname, 'src/'),
    },
  },
};
