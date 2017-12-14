require('babel-core/register')

const renderHtml = require('./helpers/renderHtml')
const port = 3030
const app = require('./config')
const metaData = require('../src/config/meta')
const metaTitles = metaData.titles
const metaDescription = metaData.descriptions
const mapTypes = require('../src/config/maps').types

app.get('/', (req, res) => {
  res.send(renderHtml({ title: metaTitles.home, description: metaDescription.generic }))
})

app.get(['/editor', '/click-editor'], (req, res) => {
  res.send(renderHtml({ title: metaTitles.editor, description: metaDescription.generic }))
})

app.get(['/editor/*', '/click-editor/*'], (req, res) => {
  const mapType = req.originalUrl.replace('/editor/', '').replace('/click-editor/', '').replace(/\/.*/, '')
  const displayName = mapTypes.find(i => i.code === mapType).displayName
  const title = metaTitles.mapEditor.replace('{{mapType}}', displayName)
  const description = metaDescription.mapEditor.replace('{{mapType}}', displayName)

  res.send(renderHtml({ title, description }))
})

app.get('/contact', (req, res) => {
  res.send(renderHtml({ title: metaTitles.contact, description: metaDescription.generic }))
})

app.get('/showcase', (req, res) => {
  res.send(renderHtml({ title: metaTitles.showcase, description: metaDescription.generic }))
})

app.listen(port, '0.0.0.0', (err) => {
  if (err) {
    console.log(err)
  }
  console.info('==> 🌎  Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port)
})
