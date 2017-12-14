const express = require('express')
const morgan = require('morgan')
const path = require('path')

const app = express()

app.use(morgan('dev'))

app.use('/bundles', express.static(path.join(__dirname, '../public/bundles')))
app.use('/images', express.static(path.join(__dirname, '../public/images')))
app.use('/data', express.static(path.join(__dirname, '../public/data')))
app.use('/favicon.ico', express.static(path.join(__dirname, '../public/favicon.ico')))

if (process.env.NODE_ENV !== 'production') {
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackConfig = require('../webpack/config.js')
  const webpack = require('webpack')
  const compiler = webpack(webpackConfig)

  app.use(webpackDevMiddleware(compiler, {
    hot: true,
    publicPath: '/bundles/',
    stats: {
      colors: true,
    },
    historyApiFallback: true,
  }))
}

module.exports = app
