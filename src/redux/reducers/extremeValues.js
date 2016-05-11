import { Map } from 'immutable'
import * as constants from '../constants/ActionTypes'

export default function extremeValues(state = Map(), action) {
  switch (action.type) {
    case constants.EDIT_ROW: {
      const { value } = action
      if (!value) return state
      if (value < state.get('min')) return state.set('min', value)
      if (value > state.get('max')) return state.set('max', value)
      return state
    }

    case constants.UPLOAD_DATA: {
      const values = action.data.map((item) => item.get('value'))
      return state.merge({ min: values.min(), max: values.max() })
    }

    case constants.CHANGE_DOMAIN_START_VALUE:
      return state.set('customMin', action.value)

    case constants.CHANGE_DOMAIN_END_VALUE:
      return state.set('customMax', action.value)

    default:
      return state
  }
}
