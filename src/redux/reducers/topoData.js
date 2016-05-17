import { Map } from 'immutable'

import { RECEIVE_TOPO_DATA, REQUEST_TOPO_DATA } from '../constants/ActionTypes'

export default function topoData(state = Map(), action) {
  switch (action.type) {
    case REQUEST_TOPO_DATA:
      return state.set('isFetching', true)

    case RECEIVE_TOPO_DATA:
      return state.merge(Map({
        isFetching: false,
        [action.mapType]: action.topoData,
      }))

    default:
      return state
  }
}
