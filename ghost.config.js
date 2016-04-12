module.exports = {
  production: {
    url: 'http://blakenewman.co.uk',
    mail: {},
    database: {
      client: 'sqlite3',
      connection: {
        filename: require('path').join(__dirname, '../../ghost-data/prod.db'),
      },
      debug: false,
    },
    server: {
      host: '127.0.0.1',
      port: '2368',
    },
    paths: {
      contentPath: require('path').join(__dirname, '/content/'),
    },
  },

  development: {
    url: 'http://localhost:2368',
    database: {
      client: 'sqlite3',
      connection: {
        filename: require('path').join(__dirname, '../../ghost-data/dev.db'),
      },
      debug: false,
    },
    server: {
      host: '127.0.0.1',
      port: '2368',
    },
    paths: {
      contentPath: require('path').join(__dirname, '/content/'),
    },
  },
};
