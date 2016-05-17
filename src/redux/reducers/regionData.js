import { Map } from 'immutable'
import { EDIT_ROW, UPLOAD_DATA } from '../constants/ActionTypes'

import usaEmptyData from '../../data/usa-empty-data'

function updateEmptyData(emptyData, data) {
  for (let i = 0; i < data.size; i++) {
    const newDatum = data.get(i)
    const code = newDatum.get('code')

    emptyData.set(code,
      emptyData.get(code).set('value', newDatum.get('value'))
    )
  }
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
      return state.set(action.mapType, usaEmptyData.withMutations((emptyData) =>
        updateEmptyData(emptyData, action.data))
      )
    }

    default:
      return state
  }
}
