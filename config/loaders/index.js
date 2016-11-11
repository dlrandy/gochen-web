'use strict';



exports.tsx = {
  test: /\.tsx?$/,
  loaders: ['babel','awesome-typescript-loader'],
  exclude: /node_modules/,
};

 
exports.html = {
  test: /\.html$/,
  loader: 'raw',
  exclude: /node_modules/,
};

exports.css = {
  test: /\.css$/,
  loaders:[
         'style-loader',
          'css-loader?importLoaders=1',
          'postcss-loader'
  ],
  exclude: /node_modules/
};


exports.svg = makeUrlLoader(/\.svg$/);
exports.eot = makeUrlLoader(/\.eot$/);
exports.woff = makeUrlLoader(/\.woff$/);
exports.woff2 = makeUrlLoader(/\.woff2$/);
exports.ttf = makeUrlLoader(/\.ttf$/);

function makeUrlLoader(pattern) {
  return {
    test: pattern,
    loader: 'url',
    exclude: /node_modules/,
    options: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
   }
  };
}