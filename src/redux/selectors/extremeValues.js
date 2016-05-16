import { Map } from 'immutable'
import { createSelector } from 'reselect'

const getRegionData = (state) => state.regionData

const makeExtremeValuesSelector = () =>
  createSelector([getRegionData], (regionData) => {
    const values = regionData.map((item) => item.get('value'))
    const filteredValues = values.filterNot((item) => item === '')
    return Map({ min: filteredValues.min(), max: filteredValues.max() })
  }
)

export default makeExtremeValuesSelector;
