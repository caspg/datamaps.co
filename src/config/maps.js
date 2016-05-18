export default {
  types: [
    { code: 'usa', displayName: 'usa' },
    { code: 'world', displayName: 'world' },
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
