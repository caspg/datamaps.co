import { SET_MAP_TYPE } from '../constants/ActionTypes'

export default function mapType(state = '', action) {
  switch (action.type) {
    case SET_MAP_TYPE:
      return action.mapType

    default:
      return state
  }
}
