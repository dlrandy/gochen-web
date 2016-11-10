'use strict';

const path = require('path');
const loaders = require('./config/loaders');
const plugins = require('./config/plugins');


const applicationEntries = process.env.NODE_ENV === 'development'
  ? [ 'webpack-hot-middleware/client?reload=true' ]
  : [ ];

module.exports = {
  context: process.cwd(),
  entry: [ path.resolve('./src/index.tsx') ].concat(applicationEntries),

  output: {
    path: path.join(__dirname, '..','dist'),
    filename: '[name].[hash].js',
    publicPath: '/',
    sourceMapFilename: '[name].[hash].js.map',
    chunkFilename: '[id].chunk.js',
  },

  devtool: process.env.NODE_ENV === 'production' ?
    'source-map' :
    'inline-source-map',
 
  // resolve: {
  //   modules:[
  //     path.resolve(__dirname+'node_modules')
  //   ],
  //   extensions: [
  //     '*',
  //     '.webpack.js',
  //     '.web.js',
  //     '.tsx',
  //     '.ts',
  //     '.js',
  //     '.json',
  //   ],
  // },
  // resolveLoader: {
  //   modules: ['node_modules'],
  //    moduleExtensions: ["-loader"],
  // },
  plugins: plugins,

  module: {
    loaders: [
      loaders.tslint,
      loaders.tsx,
      loaders.html,
      loaders.css,
      loaders.svg,
      loaders.eot,
      loaders.woff,
      loaders.woff2,
      loaders.ttf,
      loaders.json,
    ],
  },

  externals: {
    'react/lib/ReactContext': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/addons': true,
  },


};