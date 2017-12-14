const routes = require('next-routes')()

const routesConfig = require('../src/config/routes')

routes
  /* routes.add(name, pattern = /name, page = name) */
  .add('root', routesConfig.root, 'index')
  .add('contact', routesConfig.contact)
  .add('showcase', routesConfig.showcase)
  .add('editor', routesConfig.editor)
  .add('mapEditor', routesConfig.mapEditor, 'editor/mapEditor')

module.exports = routes
