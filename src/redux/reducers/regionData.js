import { Map } from 'immutable'
import { EDIT_ROW, UPLOAD_DATA } from '../constants/ActionTypes'

import worldEmptyData from '../../data/empty/world'
import usaEmptyData from '../../data/empty/usa'
import chinaEmptyData from '../../data/empty/china'
import canadaEmptyData from '../../data/empty/canada'

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

export default function regionData(state = Map(), action) {
  switch (action.type) {
    case EDIT_ROW: {
      const { regionCode, value, mapType } = action
      return state.updateIn([mapType, regionCode], (item) =>
        item.set('value', value)
      )
    }

    case UPLOAD_DATA: {
      const emptyData = {
        usa: usaEmptyData,
        world: worldEmptyData,
        china: chinaEmptyData,
        canada: canadaEmptyData,
      }[action.mapType]

      return state.set(action.mapType, emptyData.withMutations((data) =>
        updateEmptyData(data, action.data))
      )
    }

    default:
      return state
  }
}
