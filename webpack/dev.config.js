const config = require('./config')

config.devtool = 'eval-source-map'

const jsxLoader = config.module.loaders.filter(loader =>
  loader.key === 'jsx'
)[0]

jsxLoader.loaders.push('eslint-loader')

module.exports = config
