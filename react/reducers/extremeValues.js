import { Map } from 'immutable'
import { EDIT_ROW, UPLOAD_DATA } from '../constants/ActionTypes'

export default function extremeValues(state = Map(), action) {
  switch (action.type) {
    case EDIT_ROW: {
      const { value } = action
      if (value < state.get('min')) return state.set('min', value)
      if (value > state.get('max')) return state.set('max', value)
      return state
    }

    case UPLOAD_DATA: {
      const values = action.data.map((item) => item.get('value'))
      return state.set('min', values.min()).set('max', values.max())
    }

    default:
      return state
  }
}
