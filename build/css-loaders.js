const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function cssLoader(_options) {
  const options = _options || {};
  // generate loader string to be used with extract text plugin
  function generateLoaders(loaders) {
    const sourceLoader = loaders.map((_loader) => {
      let extraParamChar;
      let loader;
      if (/\?/.test(_loader)) {
        loader = _loader.replace(/\?/, '-loader?');
        extraParamChar = '&';
      } else {
        loader = `${_loader}-loader`;
        extraParamChar = '?';
      }
      return `${loader}${options.sourceMap ? `${extraParamChar}sourceMap` : ''}`;
    }).join('!');

    if (options.extract) return ExtractTextPlugin.extract('vue-style-loader', sourceLoader);
    return [ 'vue-style-loader', sourceLoader ].join('!');
  }

  // http://vuejs.github.io/vue-loader/configurations/extract-css.html
  return {
    css: generateLoaders([ 'css' ]),
    postcss: generateLoaders([ 'css' ]),
    less: generateLoaders([ 'css', 'less' ]),
    sass: generateLoaders([ 'css', 'sass?indentedSyntax' ]),
    scss: generateLoaders([ 'css', 'sass' ]),
    stylus: generateLoaders([ 'css', 'stylus' ]),
    styl: generateLoaders([ 'css', 'stylus' ]),
  };
};
