const routes = require('next-routes')()

const routesConfig = require('../src/config/routes')

routes
  .add('root', routesConfig.root, 'index')
  .add('contact', routesConfig.contact)
  .add('showcase', routesConfig.showcase)
  .add('editor', routesConfig.editor)
  .add('mapEditor', routesConfig.mapEditor)

module.exports = routes
