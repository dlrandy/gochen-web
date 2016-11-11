'use strict';

const path = require('path');
const loaders = require('./config/loaders');
const plugins = require('./config/plugins');
const postcssInit = require('./config/postcss')();
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const devEntry = [];
let cssLoader = loaders.css;
if (process.env.NODE_ENV == 'development') {
   devEntry.concat(['react-hot-loader/patch',
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000']);
  
} else {
  cssLoader = {
    test: /\.css$/,
    include: [ path.join(__dirname, 'styles') ],
    loader: ExtractTextPlugin.extract(
          'style-loader',  
        'css-loader?sourceMap&-minimize&-autoprefixer&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader?parser=sugarss'
        ),
    };
}
module.exports = {
  entry: [  
    './src/index.tsx'
  ].concat(devEntry),
  output: {
    path: __dirname + '/dist',//path.join(__dirname, 'dist')
    filename: '[name].[hash].js',
    publicPath: '/',
    sourceMapFilename: '[name].[hash].js.map',
    chunkFilename: '[id].chunk.js',
  },
  devtool: process.env.NODE_ENV === 'production' ?
    'source-map' :
    'inline-source-map',
  module: {
    loaders: [
        loaders.tsx,
        cssLoader
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