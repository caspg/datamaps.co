import { List, fromJS } from 'immutable'
import { EDIT_ROW, UPLOAD_DATA } from '../constants/ActionTypes'

import statesEmptyData from '../data/states-empty-data'

export default function regionData(state = List(), action) {
  switch (action.type) {
    case EDIT_ROW: {
      const regionIndex = state.findIndex((item) => item.get('regionName') === action.regionName)
      return state.update(regionIndex, (item) => item.set('value', action.value))
    }

    case UPLOAD_DATA: {
      return fromJS(statesEmptyData).merge(action.data)
    }

    default:
      return state
  }
}
