const mapConfig = require('./src/config/maps')
const pages = require('./src/config/pages')

const mapTypes = mapConfig.types.map(i => i.code)

const editorMapRoutes = {}
mapTypes.forEach((mapType) => {
  editorMapRoutes[`/editor/${mapType}`] = { page: pages.mapEditor, query: { mapType } }
  editorMapRoutes[`/editor/${mapType}/upload`] = { page: pages.upload, query: { mapType } }
  editorMapRoutes[`/editor/${mapType}/edit-data`] = { page: pages.editData, query: { mapType } }
  editorMapRoutes[`/editor/${mapType}/edit-map`] = { page: pages.editMap, query: { mapType } }
})

// next.config.js
module.exports = {
  exportPathMap: () => ({
    '/': { page: '/' },
    '/contact': { page: '/contact' },
    '/showcase': { page: '/showcase' },
    '/editor': { page: '/editor' },

    ...editorMapRoutes,
  }),
}
