const routes = require('next-routes')()

const routesConfig = require('../src/config/routes')
const pagesConfig = require('../src/config/pages')

routes
  /* routes.add(name, pattern = /name, page = name) */
  .add('root', routesConfig.root, '/index')
  .add('contact', routesConfig.contact)
  .add('showcase', routesConfig.showcase)

  .add('editor', routesConfig.editor)
  .add('mapEditor', routesConfig.mapEditor, pagesConfig.mapEditor)
  .add('upload', routesConfig.upload, pagesConfig.upload)
  .add('editData', routesConfig.editData, pagesConfig.editData)
  .add('editMap', routesConfig.editMap, pagesConfig.editMap)

module.exports = routes
