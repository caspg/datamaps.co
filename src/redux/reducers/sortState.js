import { Map } from 'immutable'

import { TOGGLE_DIRECTION, UPLOAD_DATA } from '../constants/ActionTypes'

function newSortDirection(state, action) {
  if (state.get('key') !== action.sortKey) return state.get('direction')
  return state.get('direction') === 'ASC' ? 'DESC' : 'ASC'
}

export default function sortState(state = Map(), action) {
  switch (action.type) {
    case TOGGLE_DIRECTION:
      return Map({
        key: action.sortKey,
        direction: newSortDirection(state, action),
      })

    case UPLOAD_DATA:
      return Map({
        key: 'name',
        direction: 'ASC',
      })

    default:
      return state
  }
}
