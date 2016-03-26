const express = require('express')
const sassMiddleware = require('node-sass-middleware')
const path = require('path')
var expresshbs  = require('express-handlebars');
const app = express()

app.engine('hbs', expresshbs({ defaultLayout: 'default', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(sassMiddleware({
  src: path.resolve(__dirname, '../assets/scss'),
  dest: path.resolve(__dirname, '../public/css'),
  outputStyle: 'compressed',
  prefix: '/css'
}))
app.use('/css', express.static(path.join(__dirname, '../public/css')))

module.exports = app
