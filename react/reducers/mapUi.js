import { Map } from 'immutable'

import { CHANGE_MAP_TITLE } from '../constants/ActionTypes'

export default function mapUi(state = Map(), action) {
  switch (action.type) {
    case CHANGE_MAP_TITLE:
      return state.set('title', action.title)

    default:
      return state
  }
}
