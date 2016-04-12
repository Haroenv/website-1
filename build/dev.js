const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.dev.conf');
const proxyMiddleware = require('http-proxy-middleware');

const app = express();
const compiler = webpack(config);

// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
const proxyTable = {
  '/ghost': {
    target: 'http://127.0.0.1:2368/',
    changeOrigin: true,
  },
};

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
    chunks: false,
  },
});

const hotMiddleware = require('webpack-hot-middleware')(compiler);
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', (compilation) => {
  compilation.plugin('html-webpack-plugin-after-emit', (data, cb) => {
    hotMiddleware.publish({ action: 'reload' });
    cb();
  });
});

// proxy api requests
Object.keys(proxyTable).forEach((context) => {
  let options = proxyTable[context];
  if (typeof options === 'string') options = { target: options };
  app.use(proxyMiddleware(context, options));
});

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')());

// serve webpack bundle output
app.use(devMiddleware);

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware);

const path = require('path');
// serve pure static assets
app.use('/', express.static(path.join(__dirname, '../static')));

module.exports = app.listen(8080, (err) => {
  /* eslint no-console: "off" */
  if (err) return console.log(err);
  return console.log('Listening at http://localhost:8080\n');
});
