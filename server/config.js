const express = require('express')
const morgan = require('morgan')
const sassMiddleware = require('node-sass-middleware')
const path = require('path')
const expresshbs = require('express-handlebars')

const app = express()

app.use(morgan('dev'))

app.engine('hbs', expresshbs({ defaultLayout: 'default', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(sassMiddleware({
  src: path.resolve(__dirname, '../assets/scss'),
  dest: path.resolve(__dirname, '../public/css'),
  outputStyle: 'compressed',
  prefix: '/css',
}))
app.use('/css', express.static(path.join(__dirname, '../public/css')))
app.use('/js', express.static(path.join(__dirname, '../public/js')))

module.exports = app
