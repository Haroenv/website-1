const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// add hot-reload related code to entry chunks
Object.keys(baseConfig.entry).forEach((name) => {
  baseConfig.entry[name] = [ './build/dev-client' ].concat(baseConfig.entry[name]);
});

module.exports = merge(baseConfig, {
  debug: true,
  devtool: '#eval-source-map',
  plugins: [
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.DefinePlugin({
      'process.env': {
        GHOST_CLIENT_ID: '"ghost-frontend"',
        GHOST_SECRET: '"a60992ae4379"',
      },
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js', Infinity),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../src/index.html'),
      inject: true,
    }),
  ],
});
