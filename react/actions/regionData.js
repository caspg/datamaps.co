import { EDIT_ROW, UPLOAD_DATA } from '../constants/ActionTypes'

export function editRow(regionName, value) {
  return { type: EDIT_ROW, regionName, value }
}

export function uploadData(data) {
  return { type: UPLOAD_DATA, data }
}
