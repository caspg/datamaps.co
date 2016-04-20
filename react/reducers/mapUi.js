import { Map } from 'immutable'

import * as actions from '../constants/ActionTypes'

export default function mapUi(state = Map(), action) {
  switch (action.type) {
    case actions.CHANGE_MAP_TITLE:
      return state.set('title', action.title)

    case actions.CHANGE_LINEAR_START_COLOR:
      return state.setIn(['linear', 'startColor'], action.color)

    case actions.CHANGE_LINEAR_END_COLOR:
      return state.setIn(['linear', 'endColor'], action.color)

    default:
      return state
  }
}
