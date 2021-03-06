/* global rm, mkdir, cp */
require('shelljs/global');

process.env.NODE_ENV = 'production';

const ora = require('ora');
const webpack = require('webpack');
const conf = require('./webpack.prod.conf');

const spinner = ora('building for production...');
spinner.start();

rm('-rf', './public_html/');
mkdir('./public_html');
cp('-R', 'static/', 'public_html');

webpack(conf, (err, stats) => {
  spinner.stop();
  if (err) throw err;
  process.stdout.write(`${stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false,
  })}\n`);
});
