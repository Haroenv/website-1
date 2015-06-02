fs = require 'fs'
path = require 'path'
url = require 'url'
defaultFile = 'index.html'
exports.config =
  paths:
    watched: ['app', 'vendor', 'components']

  modules:
    nameCleaner: (path) ->
      path.replace /^(app|components)[\/\\]/, ''

  files:
    javascripts:
      defaultExtension: 'coffee'
      joinTo:
        'javascripts/app.js': /^(components|app)/
        'javascripts/vendor.js': /^(bower_components|vendor)/
      order:
        before: [
          'bower_components/**/*.*',
          'components/**/*.*',
          'app/**/*.*'
        ]

    stylesheets:
      defaultExtension: 'styl'
      joinTo:
        'styles/app.css': /^(components|app)/
        'styles/vendor.css': /^(bower_components|vendor)/
      order:
        before: [
          'bower_components/**/*.*',
          'components/**/*.*',
          'app/**/*.*'
        ]

    templates:
      defaultExtension: 'hbs'
      joinTo:
        'javascripts/app.js': /^components|app/
        'javascripts/vendor.js': /^vendor/
      before: [
        'components/**/*.*',
        'app/**/*.*'
      ]

  server:
    port: 1111
  
  plugins:
    stylus:
      imports: [
        'nib',
        'styles/_grid.styl',
        'styles/_vars.styl',
        'styles/_mixins.styl',
        'styles/_functions.styl'
        'styles/_fonts.styl'
      ]
  
  overrides:
    production:
      plugins: autoreload: enabled: false
      optimize: true
      sourceMaps: false