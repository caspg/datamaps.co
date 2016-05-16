const express = require('express')
const morgan = require('morgan')
const path = require('path')
const webpackDevMiddleware = require('webpack-dev-middleware')

const webpackConfig = require('../webpack/config.js');
const webpack = require('webpack')
const compiler = webpack(webpackConfig);

const app = express()

app.use(morgan('dev'))

app.use('/css', express.static(path.join(__dirname, '../public/css')))
app.use('/js', express.static(path.join(__dirname, '../public/js')))
app.use('/images', express.static(path.join(__dirname, '../public/images')))

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  publicPath: '/bundles/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

module.exports = app
