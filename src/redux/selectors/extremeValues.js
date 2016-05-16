import { Map } from 'immutable'
import { createSelector } from 'reselect'

const replaceUndefined = (value) =>
  (typeof value === 'undefined') ? '' : value

const getRegionData = (state) => state.regionData

const makeExtremeValuesSelector = () =>
  createSelector([getRegionData], (regionData) => {
    const values = regionData.map((item) => item.get('value'))
    const filteredValues = values.filterNot((item) => item === '')
    return Map({
      min: replaceUndefined(filteredValues.min()),
      max: replaceUndefined(filteredValues.max())
    })
  }
)

export default makeExtremeValuesSelector;
