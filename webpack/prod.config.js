const Webpack = require('webpack')
const config = require('./config')

config.plugins.push(
  new Webpack.DefinePlugin({ 'process.env': { 'NODE_ENV': '"production"' } })
)

module.exports = config
