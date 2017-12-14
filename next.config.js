// next.config.js
module.exports = {
  exportPathMap: () => ({
    '/': { page: '/' },
    '/contact': { page: '/contact' },
    '/showcase': { page: '/showcase' },
    '/editor': { page: '/editor' },

    '/editor/usa': { page: '/editor/mapEditor', query: { mapType: 'usa' } },
    '/editor/world': { page: '/editor/mapEditor', query: { mapType: 'world' } },
  }),
}
