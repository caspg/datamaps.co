import { Map } from 'immutable'

import { CHANGE_MAP_TITLE, CHANGE_LINEAR_START_COLOR } from '../constants/ActionTypes'

export default function mapUi(state = Map(), action) {
  switch (action.type) {
    case CHANGE_MAP_TITLE:
      return state.set('title', action.title)

    case CHANGE_LINEAR_START_COLOR:
      return state.setIn(['linear', 'startColor'], action.color)

    default:
      return state
  }
}
