'use strict';

const webpack = require('webpack');
const path = require('path')
const postcssBasePlugins = [
  require("postcss-import")({ addDependencyTo: webpack }),
      require("postcss-url")(),
      require('postcss-utilities')(),
    require("precss")(),
      require("postcss-cssnext")({
         customProperties: { preserve: true }
      }    
      ),
      // add your "plugins" here

      // and if you want to compress,
      // just use css-loader option that already use cssnano under the hood
      require("postcss-browser-reporter")(),
      require("postcss-reporter")(),
];
const postcssDevPlugins = [];
const postcssProdPlugins = [

];

const postcssPlugins = postcssBasePlugins
  .concat(process.env.NODE_ENV === 'production' ? postcssProdPlugins : [])
  .concat(process.env.NODE_ENV === 'development' ? postcssDevPlugins : []);

module.exports = () => {
  return postcssPlugins;
};