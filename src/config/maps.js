import d3 from 'd3'

module.exports = {
  types: [
    { code: 'usa', displayName: 'USA' },
    { code: 'world', displayName: 'World' },
    { code: 'china', displayName: 'China' },
    { code: 'canada', displayName: 'Canada' },
    { code: 'france', displayName: 'France' },
    { code: 'germany', displayName: 'Germany' },
    { code: 'italy', displayName: 'Italy' },
    { code: 'poland', displayName: 'Poland' },
    { code: 'russia', displayName: 'Russia' },
    { code: 'india', displayName: 'India' },
    { code: 'brazil', displayName: 'Brazil' },
    { code: 'netherlands', displayName: 'Netherlands' },
    { code: 'australia', displayName: 'Australia' },
    { code: 'switzerland', displayName: 'Switzerland' },
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
    france: {
      mapUi: {
        projection: function _projection(width, height) {
          return d3.geo.mercator().center([2.2, 46.4]).scale(width * 2)
            .translate([width / 2, height / 2])
        },
      },
      csvExample: [['name', 'value'], ['Corsica', 105], ['Normandy', 99], ['Île-de-France', 103]]
    },
    germany: {
      mapUi: {
        projection: function _projection(width, height) {
          return d3.geo.mercator().center([10.5, 51.35]).scale(width * 2.5)
            .translate([width / 2, height / 2.2])
        },
      },
      csvExample: [['code', 'value'], ['HE', 101], ['SH', 99], ['MV', 103]],
    },
    italy: {
      mapUi: {
        projection: function _projection(width, height) {
          return d3.geo.albers().center([0, 41]).rotate([347, 0]).scale(width * 2.9)
            .translate([width / 2, height / 2.1])
        },
      },
      csvExample: [['name', 'value'], ['Abruzzo', 102], ['Sicily', 99], ['Piemonte', 103]],
    },
    poland: {
      mapUi: {
        projection: function _projection(width, height) {
          return d3.geo.mercator().center([20.5, 51.35]).scale(width * 3.2)
            .translate([width / 2, height / 1.9])
        },
      },
      csvExample: [['name', 'value'], ['Silesian', 102], ['Masovian', 99], ['Pomeranian', 103]],
    },
    russia: {
      mapUi: {
        projection: function _projection(width, height) {
          return d3.geo.albers()
            .rotate([-105, 0])
            .center([-10, 65])
            .parallels([52, 64])
            .scale(width / 1.4)
            .translate([width / 2, height / 2.1])
        },
      },
      csvExample: [['name', 'value'], ['Republic of Buryatia', 102], ['Moscow Oblast', 99], ['Smolensk Oblast', 103]],
    },
    india: {
      mapUi: {
        projection: function _projection(width, height) {
          return d3.geo.mercator()
            .center([78, 27])
            .scale(width)
            .translate([width / 2, height / 3])
        },
      },
      csvExample: [['name', 'value'], ['Delhi', 102], ['Puducherry', 99], ['Rajasthan', 103]],
    },
    brazil: {
      mapUi: {
        projection: function _projection(width, height) {
          return d3.geo.mercator()
            .center([-52, -15])
            .scale(width / 1.3)
            .translate([width / 2, height / 2.2])
        },
      },
      csvExample: [['name', 'value'], ['Mato Grosso', 102], ['São Paulo', 99], ['Alagoas', 103]],
    },
    netherlands: {
      mapUi: {
        projection: function _projection(width, height) {
          return d3.geo.mercator()
            .center([5.6, 52])
            .scale(width * 7)
            .translate([width / 2, height / 2])
        },
      },
      csvExample: [['name', 'value'], ['Friesland', 102], ['Limburg', 99], ['Utrecht', 103]],
    },
    australia: {
      mapUi: {
        projection: function _projection(width, height) {
          return d3.geo.mercator()
            .center([134, -28])
            .scale(width / 1.2)
            .translate([width / 2.1, height / 2.2])
        },
      },
      csvExample: [['name', 'value'], ['Northern Territory', 102], ['Tasmania', 99], ['Queensland', 103]],
    },
    switzerland: {
      mapUi: {
        projection: function _projection(width, height) {
          return d3.geo.mercator()
            .center([8, 46.5])
            .scale(width * 10)
            .translate([width / 2.1, height / 1.8])
        },
      },
      csvExample: [['name', 'value'], ['Zürich', 102], ['Fribourg', 99], ['Geneva', 103]],
    },

  },
}
