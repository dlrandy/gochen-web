'use strict';

const webpack = require('webpack');
const path = require('path')
const postcssBasePlugins = [
  require('postcss-modules-local-by-default'),
  require('postcss-import')({
    addDependencyTo: webpack,
    path: [path.resolve(__dirname, '../../src')],
  }),
  require('postcss-cssnext')(),
  require('postcss-browser-reporter')(),
      require('postcss-reporter')(),
];
const postcssDevPlugins = [];
const postcssProdPlugins = [
  require("postcss-custom-properties")(),
  require('autoprefixer')({
      browsers: [
          '>1%',
          'last 4 versions',
          'Firefox ESR',
          'not ie < 9',
         ]
    }), 
  require('precss'),
  // require('cssnano')({
  //   safe: true,
  //   sourcemap: true,
  //   autoprefixer: false,
  // }),
];

const postcssPlugins = postcssBasePlugins
  .concat(process.env.NODE_ENV === 'production' ? postcssProdPlugins : [])
  .concat(process.env.NODE_ENV === 'development' ? postcssDevPlugins : []);

module.exports = () => {
  return postcssPlugins;
};