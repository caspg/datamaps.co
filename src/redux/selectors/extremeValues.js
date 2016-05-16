import { Map, List } from 'immutable'
import { createSelector } from 'reselect'

const replaceUndefined = (value) =>
  (typeof value === 'undefined') ? '' : value

const getRegionData = (state) => state.regionData
const domainStartValue = (state) => state.mapUi.getIn(['equidistant', 'domainStartValue'])
const domainEndValue = (state) => state.mapUi.getIn(['equidistant', 'domainEndValue'])

const makeExtremeValuesSelector = () =>
  createSelector(
  [getRegionData, domainStartValue, domainEndValue],
  (regionData, startValue, endValue) => {
    const values = regionData.map((item) => item.get('value'))
    const combinedValues = List([values, startValue, endValue]).flatten()
    const filteredValues = combinedValues.filterNot((item) => item === '')

    return Map({
      min: replaceUndefined(filteredValues.min()),
      max: replaceUndefined(filteredValues.max()),
    })
  }
)

export default makeExtremeValuesSelector;
