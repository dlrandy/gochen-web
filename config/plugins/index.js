'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const SplitByPathPlugin = require('webpack-split-by-path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

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
   new webpack.optimize.OccurenceOrderPlugin(),
   new webpack.HotModuleReplacementPlugin(),
];
 
const prodPlugins = [
   new webpack.DefinePlugin({
     'process.env':{
       'NODE_ENV': JSON.stringify('production')
     }
   }),
   new CleanWebpackPlugin(['dist'], {
      root: path.join(__dirname, '..','..'),
      verbose: true, 
      dry: false,
    }),
  new SplitByPathPlugin([
    { name: 'vendor', path: [path.join(__dirname, '..','..', 'node_modules/')] }
  ]),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    },
  }),
  // new webpack.optimize.CommonsChunkPlugin({
  //     name: 'vendor',
  //     children: true,
  //     minChunks: 2,
  //     async: true,
  // }),
  new ExtractTextPlugin("index.css",{
      allChunks: false
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   names: ['vendor'],
    //   filename: '[name].js',
    //   minChunks: Infinity
    // })
];

module.exports = basePlugins
  .concat(process.env.NODE_ENV === 'production' ? prodPlugins : [])
  .concat(process.env.NODE_ENV === 'development' ? devPlugins : []);