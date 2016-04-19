import { CHANGE_MAP_TITLE } from '../constants/ActionTypes'

export function changeMapTitle(title) {
  return { type: CHANGE_MAP_TITLE, title }
}
