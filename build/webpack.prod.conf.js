const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// whether to generate source map for production files.
// disabling this can speed up the build.
const SOURCE_MAP = true;

module.exports = merge(baseConfig, {
  devtool: SOURCE_MAP ? '#source-map' : false,
  output: {
    // naming output files with hashes for better caching.
    // dist/index.html will be auto-generated with correct URLs.
    filename: 'js/[name].[chunkhash].js',
    chunkFilename: 'js/[name].[chunkhash].js',
  },
  vue: {
    // Extract main css
    loaders: require('./css-loaders')({
      sourceMap: SOURCE_MAP,
      extract: true,
    }),
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
        GHOST_CLIENT_ID: '"ghost-frontend"',
        // CHANGE TO PRODUCTION KEY - http://api.ghost.org/docs/ajax-calls-from-an-external-website
        GHOST_SECRET: '"a60992ae4379"',
      },
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.MinChunkSizePlugin({
      minChunkSize: 51200, // ~50kb
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    // extract main css into its own file
    new ExtractTextPlugin('[name].[contenthash].css'),
    new HtmlWebpackPlugin({
      filename: '../public_html/index.html',
      template: 'src/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    }),
  ],
});
