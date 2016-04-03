import { EDIT_ROW } from '../constants/ActionTypes';

export default function regionData(state = [], action) {
  switch (action.type) {
    case EDIT_ROW: {
      const regionIndex = state.findIndex((item) => item.get('regionName') === action.regionName)
      return state.update(regionIndex, (item) => item.set('value', action.value))
    }

    default:
      return state
  }
}
