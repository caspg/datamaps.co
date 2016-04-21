import * as actions from '../constants/ActionTypes'

export function changeMapTitle(title) {
  return { type: actions.CHANGE_MAP_TITLE, title }
}

export function changeLinearStartColor(color) {
  return { type: actions.CHANGE_LINEAR_START_COLOR, color }
}

export function changeLinearEndColor(color) {
  return { type: actions.CHANGE_LINEAR_END_COLOR, color }
}

export function changeLinearNoDataColor(color) {
  return { type: actions.CHANGE_LINEAR_NO_DATA_COLOR, color }
}
