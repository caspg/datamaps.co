import { Map, List } from 'immutable'
import { createSelector } from 'reselect'

const replaceUndefined = (value) =>
  (typeof value === 'undefined') ? '' : value

const getMapType = (state) => state.mapType
const getRegionData = (state) => state.regionData
const domainStartValue = (state) => state.mapUi.getIn(['equidistant', 'domainStartValue'])
const domainEndValue = (state) => state.mapUi.getIn(['equidistant', 'domainEndValue'])

const makeExtremeValuesSelector = () =>
  createSelector(
  [getMapType, getRegionData, domainStartValue, domainEndValue],
  (mapType, regionData, startValue, endValue) => {
    const currentRegionData = regionData.get(mapType, Map())
    const values = currentRegionData.map((item) => item.get('value'))
    const combinedValues = List([values, startValue, endValue]).flatten()
    const filteredValues = combinedValues.filterNot((item) => item === '')

    return Map({
      min: replaceUndefined(filteredValues.min()),
      max: replaceUndefined(filteredValues.max()),
    })
  }
)

export default makeExtremeValuesSelector;
