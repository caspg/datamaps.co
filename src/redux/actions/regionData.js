import { push } from 'react-router-redux'

import { EDIT_ROW, UPLOAD_DATA, TOGGLE_DIRECTION, LOAD_EMPTY_DATA } from '../constants/ActionTypes'

function editRow(regionCode, value, mapType) {
  return { type: EDIT_ROW, regionCode, value, mapType }
}

function uploadData(payload, mapType) {
  return { type: UPLOAD_DATA, payload, mapType }
}

function uploadDataAndRedirect(payload, mapType) {
  return dispatch => {
    dispatch(uploadData(payload, mapType))
    dispatch(push(`/editor/${mapType}/edit-data`))
  }
}

function toggleDirection(sortKey) {
  return { type: TOGGLE_DIRECTION, sortKey };
}

function loadEmptyData(mapType, topoData) {
  return { type: LOAD_EMPTY_DATA, mapType, topoData }
}

export {
  editRow,
  uploadDataAndRedirect,
  toggleDirection,
  loadEmptyData,
}
