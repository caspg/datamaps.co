import { Map } from 'immutable'

import { RECEIVE_TOPO_DATA } from '../constants/ActionTypes'

export default function topoData(state = Map(), action) {
  switch (action.type) {
    case RECEIVE_TOPO_DATA:
      return state.set(action.mapType, action.topoData)

    default:
      return state
  }
}
