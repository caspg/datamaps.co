import d3 from 'd3'

module.exports = {
  types: [
    { code: 'usa', displayName: 'USA' },
    { code: 'world', displayName: 'World' },
    { code: 'china', displayName: 'China' },
  ],
  configs: {
    usa: {
      mapUi: {
        projection: function _projection(width, height) {
          return d3.geo.albersUsa().scale(width).translate([width / 2, height / 2])
        },
      },
    },
    world: {
      mapUi: {
        projection: function _projection(width, height) {
          return d3.geo.equirectangular().scale(width / 2 / Math.PI)
            .translate([width / 2, height / 2])
        },
      },
    },
    china: {
      mapUi: {
        projection: function _projection(width, height) {
          return d3.geo.mercator().center([105, 38]).scale(width / 1.3)
            .translate([width / 2, height / 2.2])
        },
      },
    },
  },
}
