import { Map } from 'immutable'
import { EDIT_ROW, UPLOAD_DATA } from '../constants/ActionTypes'

function updateStateWithUpload(map, data) {
  for (let i = 0; i < data.size; i++) {
    const datum = data.get(i)
    map.set(datum.get('code'), datum.get('value'))
  }
}

export default function regionData(state = Map(), action) {
  switch (action.type) {
    case EDIT_ROW: {
      const { regionCode, value } = action
      return state.update(regionCode, (item) => item.set('value', value))
    }

    case UPLOAD_DATA: {
      return state.withMutations((map) =>
        updateStateWithUpload(map, action.data))
    }

    default:
      return state
  }
}
