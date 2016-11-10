'use strict';

const path = require('path');
const loaders = require('./config/loaders');
const plugins = require('./config/plugins');


module.exports = {
  entry: ['./src/index.tsx'],
  output: {
    path: __dirname + '/dist',//path.join(__dirname, 'dist')
    filename: '[name].[hash].js',
    publicPath: '/',
    sourceMapFilename: '[name].[hash].js.map',
    chunkFilename: '[id].chunk.js',
  },
  module: {
    loaders: [
        loaders.tsx
    ]
  },
  resolve: {
    extensions: [
      '',
      '.webpack.js',
      '.web.js',
      '.tsx',
      '.ts',
      '.js',
      '.json',
    ],
  },
  plugins: plugins
};