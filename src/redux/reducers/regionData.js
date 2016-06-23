import { Map, fromJS } from 'immutable'
import { EDIT_ROW, UPLOAD_DATA, LOAD_EMPTY_DATA } from '../constants/ActionTypes'

function codeByName(emptyData, newDatum) {
  const datum = emptyData.find((item) =>
    item.get('name') === newDatum.get('name')
  )

  return (!!datum) ? datum.get('code') : ''
}

function updateEmptyData(emptyData, data) {
  for (let i = 0; i < data.size; i++) {
    const newDatum = data.get(i)
    const code = newDatum.get('code') || codeByName(emptyData, newDatum)
    const emptyDatum = emptyData.get(code)

    if (!!emptyDatum) {
      emptyData.setIn([code, 'value'], newDatum.get('value'))
    }
  }
}

function reduceTopoData(topoData) {
  const reducedData = topoData.reduce((object, item) => {
    object[item.id] = {
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
        updateEmptyData(data, action.data))
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
