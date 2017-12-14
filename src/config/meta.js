/* eslint-disable max-len */
function mapEditorTitle(mapType) {
  return `Create map of ${mapType.toUpperCase()} - Datamaps.co`;
}

function mapEditorDescripton(mapType) {
  return `Create and download your free data map of ${mapType.toUpperCase()} or choose from many other maps.`;
}

module.exports = {
  titles: {
    home: 'Create and download data maps - Datamaps.co',
    editor: 'Create and download data maps - Datamaps.co',
    mapEditor: mapEditorTitle,
    contact: 'Contact - Datamaps.co',
    showcase: 'Showcase - Datamaps.co',
  },
  descriptions: {
    generic: 'Free and simple platform for creating data visualisation with data maps. With datamaps.co, you can create a custom map of USA, China, World and many more.',
    mapEditor: mapEditorDescripton,
  },
}
