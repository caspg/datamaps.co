import { CHANGE_MAP_TITLE, CHANGE_LINEAR_START_COLOR } from '../constants/ActionTypes'

export function changeMapTitle(title) {
  return { type: CHANGE_MAP_TITLE, title }
}

export function changeLinearStartColor(color) {
  return { type: CHANGE_LINEAR_START_COLOR, color }
}
