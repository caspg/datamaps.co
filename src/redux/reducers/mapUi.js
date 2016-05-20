import { Map } from 'immutable'

import * as constants from '../constants/ActionTypes'

export default function mapUi(state = Map(), action) {
  switch (action.type) {
    case constants.CHANGE_MAP_TITLE:
      return state.set('title', action.title)

    case constants.CHANGE_LEGEND_TITLE:
      return state.set('legendTitle', action.title)

    case constants.CHANGE_LINEAR_START_COLOR:
      return state.setIn(['linear', 'startColor'], action.color)

    case constants.CHANGE_LINEAR_END_COLOR:
      return state.setIn(['linear', 'endColor'], action.color)

    case constants.CHANGE_LINEAR_NO_DATA_COLOR:
      return state.set('noDataColor', action.color)

    case constants.CHANGE_DATA_CLASSIFICATION:
      return state.set('dataClassification', action.classification)

    case constants.CHANGE_COLOR_PALLETE: {
      const newState = Map({
        equidistant: Map({
          palleteKey: action.palleteKey,
          pallete: action.pallete,
        }),
      })

      return state.mergeDeep(newState)
    }

    case constants.CHANGE_CLASSES_COUNT: {
      const newState = Map({
        equidistant: Map({
          classesCount: action.count,
          pallete: action.pallete,
        }),
      })

      return state.mergeDeep(newState)
    }

    case constants.CHANGE_DOMAIN_START_VALUE:
      return state.setIn(['equidistant', 'domainStartValue'], action.value)

    case constants.CHANGE_DOMAIN_END_VALUE:
      return state.setIn(['equidistant', 'domainEndValue'], action.value)

    case constants.CHANGE_BORDER_COLOR:
      return state.set('borderColor', action.color)

    case constants.SET_MAP_TYPE:
      return state.merge({ title: '', legendTitle: '' })

    default:
      return state
  }
}
