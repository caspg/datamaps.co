import { Map } from 'immutable'
import { EDIT_ROW, UPLOAD_DATA } from '../constants/ActionTypes'

export default function regionData(state = Map(), action) {
  switch (action.type) {
    case EDIT_ROW: {
      const { regionCode, value } = action
      return state.update(regionCode, (item) => item.set('value', value))
    }

    case UPLOAD_DATA: {
      return state
    }

    default:
      return state
  }
}
