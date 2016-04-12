const path = require('path');
const projectRoot = path.resolve(__dirname, '../src');
import packageJSON from '../package.json';
import styleVars from '../src/styles/vars.js';
import styleMedia from '../src/styles/media.js';

const excludeVendors = [ 'normalize.css' ];
const vendor = Object.keys(packageJSON.dependencies).filter((key) => {
  return excludeVendors.indexOf(key) === -1;
});

module.exports = {
  entry: {
    app: './src/main.js',
    vendor,
  },
  output: {
    path: path.resolve(__dirname, '../public_html/'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  resolve: {
    extensions: [ '', '.vue', '.js' ],
    fallback: [ path.join(__dirname, '../node_modules') ],
    alias: {
      src: projectRoot,
      'normalize.css': path.resolve(__dirname, '../node_modules/normalize.css/normalize.css'),
    },
  },
  resolveLoader: {
    fallback: [ path.join(__dirname, '../node_modules') ],
  },
  module: {
    preLoaders: [
      {
        test: /\.js|.vue$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: /node_modules/,
      },
    ],
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue',
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        loader: 'vue-html',
      },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        loaders: [
          'url?limit=10000&name=assets/[name].[ext]?[hash:7]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
        ],
      },
      {
        test: /\.(woff2?|eot|ttf|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 1000,
          name: 'assets/[name].[ext]?[hash:7]',
        },
      },
    ],
  },
  vue: {
    loaders: require('./css-loaders')(),
    postcss(webpack) {
      return [
        require('postcss-import')({ addDependencyTo: webpack }),
        require('stylelint'),
        require('postcss-mixins'),
        require('postcss-simple-vars'),
        require('postcss-cssnext')({
          features: {
            customProperties: {
              variables: styleVars,
            },
            customMedia: {
              extensions: styleMedia,
            },
          },
        }),
        require('postcss-browser-reporter'),
        require('postcss-reporter'),
      ];
    },
    // Done by cssnext
    autoprefixer: false,
  },
  eslint: {
    formatter: require('eslint-friendly-formatter'),
  },
};
