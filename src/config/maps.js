import d3 from 'd3'

module.exports = {
  types: [
    { code: 'usa', displayName: 'USA' },
    { code: 'world', displayName: 'World' },
    { code: 'china', displayName: 'China' },
    { code: 'canada', displayName: 'Canada' },
  ],
  configs: {
    usa: {
      mapUi: {
        projection: function _projection(width, height) {
          return d3.geo.albersUsa().scale(width).translate([width / 2, height / 2])
        },
      },
      csvExample: [['code', 'value'], ['AL', 95], ['CA', 102], ['NY', 99]],
    },
    world: {
      mapUi: {
        projection: function _projection(width, height) {
          return d3.geo.equirectangular().scale(width / 2 / Math.PI)
            .translate([width / 2, height / 2])
        },
      },
      csvExample: [['code', 'value'], ['POL', 103], ['GBR', 101], ['USA', 105]],
    },
    china: {
      mapUi: {
        projection: function _projection(width, height) {
          return d3.geo.mercator().center([105, 38]).scale(width / 1.3)
            .translate([width / 2, height / 2.2])
        },
      },
      csvExample: [['code', 'value'], ['GX', 104], ['SA', 101], ['JX', 106]],
    },
    canada: {
      mapUi: {
        projection: function _projection(width, height) {
          return d3.geo.azimuthalEqualArea().rotate([100, -45]).center([5, 20])
            .scale(width / 1.24).translate([width / 2, height / 2.35])
        },
      },
      csvExample: [['code', 'value'], ['QC', 104], ['YT', 101], ['ON', 106]],
    },
  },
}
