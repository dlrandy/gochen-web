'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const CopyWebpackPlugin = require('copy-webpack-plugin');

const sourceMap = process.env.TEST || process.env.NODE_ENV !== 'production'
  ? [new webpack.SourceMapDevToolPlugin({ filename: null, test: /\.tsx?$/ })]
  : [];

const basePlugins = [
  new webpack.DefinePlugin({
    __DEV__: process.env.NODE_ENV !== 'production',
    __TEST__: JSON.stringify(process.env.TEST || false),
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
  new HtmlWebpackPlugin({
    template: __dirname+'/../../src/index.html',
    inject: 'body',
  }),
  new webpack.NoErrorsPlugin(),

  new CopyWebpackPlugin([
    { from: 'src/assets', to: 'assets' },
  ]),
].concat(sourceMap); 
 
const devPlugins = [
  new StyleLintPlugin({
    configFile: './.stylelintrc',
    files: ['/src/**/*.css'],
    failOnError: false,
  }),
];

const prodPlugins = [

  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    },
  }),
];

module.exports = basePlugins
  .concat(process.env.NODE_ENV === 'production' ? prodPlugins : [])
  .concat(process.env.NODE_ENV === 'development' ? devPlugins : []);