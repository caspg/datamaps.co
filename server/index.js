const express = require('express');

const isDev = process.env.NODE_ENV !== 'production';
const port = isDev ? 3000 : process.env.PORT;
const app = express();

app.get('/', function(req, res) {
  res.send('Hello, world!');
});

app.listen(port, '0.0.0.0', function _onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎  Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
