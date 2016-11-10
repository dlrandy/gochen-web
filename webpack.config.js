'use strict';

const path = require('path');
const loaders = require('./config/loaders');
const plugins = require('./config/plugins');
const postcssInit = require('./config/postcss')();

module.exports = {
  entry: [   
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    './src/index.tsx'
  ],
  output: {
    path: __dirname + '/dist',//path.join(__dirname, 'dist')
    filename: '[name].[hash].js',
    publicPath: '/',
    sourceMapFilename: '[name].[hash].js.map',
    chunkFilename: '[id].chunk.js',
  },
  module: {
    loaders: [
        loaders.tsx,
        loaders.css
    ]
  },
  resolve: {
    modules: ['src', 'node_modules'],
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
  plugins: plugins,
  postcss: postcssInit
};