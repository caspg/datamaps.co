import { Map, fromJS } from 'immutable'
import uploadSteps from 'config/constants/upload'
import { EDIT_ROW, UPLOAD_DATA, LOAD_EMPTY_DATA } from '../constants/ActionTypes'

function updateEmptyData(emptyData, payload) {
  const { data, idKey, columnIndexes } = payload

  for (let i = 0; i < data.length; i++) {
    const idIndex = columnIndexes[idKey]
    const valueIndex = columnIndexes[uploadSteps.VALUE]
    const newDatum = data[i]
    const emptyDatum = emptyData.find(d => d.get(idKey) === newDatum[idIndex])
    const numericValue = parseFloat(newDatum[valueIndex])

    if (emptyDatum && !isNaN(numericValue)) {
      const code = emptyDatum.get('code')
      emptyData.setIn([code, 'value'], numericValue)
    }
  }
}

function reduceTopoData(topoData) {
  const reducedData = topoData.reduce((object, item) => {
    object[item.id] = { // eslint-disable-line no-param-reassign
      name: item.properties.name,
      code: item.id,
      value: '',
    }

    return object
  }, {})

  return fromJS(reducedData)
}

export default function regionData(state = Map(), action) {
  switch (action.type) {
    case EDIT_ROW: {
      const { regionCode, value, mapType } = action
      return state.updateIn([mapType, regionCode], (item) =>
        item.set('value', value)
      )
    }

    case UPLOAD_DATA: {
      const emptyData = state.get(action.mapType).map(datum => datum.set('value', ''))
      return state.set(action.mapType, emptyData.withMutations(data =>
        updateEmptyData(data, action.payload))
      )
    }

    case LOAD_EMPTY_DATA: {
      const emptyData = reduceTopoData(action.topoData)
      return state.set(action.mapType, emptyData)
    }

    default:
      return state
  }
}
