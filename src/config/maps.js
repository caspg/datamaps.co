module.exports = {
  types: [
    { code: 'usa', displayName: 'USA' },
    { code: 'world', displayName: 'World' },
  ],
  configs: {
    usa: {
      mapUi: {
        projection: 'albersUsa',
        scaleDenominator: 1,
      },
    },
    world: {
      mapUi: {
        projection: 'equirectangular',
        scaleDenominator: 2 * Math.PI,
      },
    },
  },
}
