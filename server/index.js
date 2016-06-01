const renderHtml = require('./helpers/renderHtml')
const port = 3030
const app = require('./config')
const metaTitles = require('../src/config/meta').titles
const mapTypes = require('../src/config/maps').types

app.get('/', (req, res) => {
  res.send(renderHtml({ title: metaTitles.home, description: 'description' }))
})

app.get('/editor', (req, res) => {
  res.send(renderHtml({ title: metaTitles.editor, description: 'description' }))
})

app.get('/editor/*', (req, res) => {
  const mapType = req.originalUrl.replace('/editor/', '').replace('/', '')
  const displayName = mapTypes.find(i => i.code === mapType).displayName
  const title = metaTitles.mapEditor.replace('{{mapType}}', displayName)

  res.send(renderHtml({ title, description: 'description' }))
})

app.get('/contact', (req, res) => {
  res.send(renderHtml({ title: metaTitles.contact, description: 'description' }))
})

app.get('/showcase', (req, res) => {
  res.send(renderHtml({ title: metaTitles.showcase, description: 'description' }))
})

app.listen(port, '0.0.0.0', (err) => {
  if (err) {
    console.log(err)
  }
  console.info('==> 🌎  Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port)
})
