module.exports = {
  mongodbMemoryServerOptions: {
    instance: {
      dbName: 'LinkApi'
    },
    binary: {
      version: '4.2.8',
      skipMD5: true

    },
    autoStart: false
  }
}