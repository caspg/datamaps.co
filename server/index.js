const express = require('express')
const sassMiddleware = require('node-sass-middleware')
const path = require('path')
var expresshbs  = require('express-handlebars');

const isDev = process.env.NODE_ENV !== 'production'
const port = isDev ? 3000 : process.env.PORT
const app = express()

app.engine('hbs', expresshbs({ defaultLayout: 'default', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(sassMiddleware({
  src: path.resolve(__dirname, '../assets/scss'),
  dest: path.resolve(__dirname, '../public/css'),
  outputStyle: 'compressed',
  prefix: '/css',
  debug: true
}))
app.use('/css', express.static(path.join(__dirname, '../public/css')))

app.get('/', function(req, res) {
  res.render('home/index')
})

app.listen(port, '0.0.0.0', function _onStart(err) {
  if (err) {
    console.log(err)
  }
  console.info('==> 🌎  Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port)
})
