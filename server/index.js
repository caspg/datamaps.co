const port = 3030
const app = require('./config')
const path = require('path')

app.get(['/', '/editor', '/editor/*'], (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.listen(port, '0.0.0.0', (err) => {
  if (err) {
    console.log(err)
  }
  console.info('==> 🌎  Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port)
})
