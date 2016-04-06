import { push } from 'react-router-redux'

import { EDIT_ROW, UPLOAD_DATA, TOGGLE_DIRECTION } from '../constants/ActionTypes'

function editRow(regionCode, value) {
  return { type: EDIT_ROW, regionCode, value }
}

function uploadData(data) {
  return { type: UPLOAD_DATA, data }
}

function uploadDataAndRedirect(data) {
  return function (dispatch) {
    dispatch(uploadData(data))
    dispatch(push('/editor/edit-data'))
  }
}

function toggleDirection(sortKey) {
  return { type: TOGGLE_DIRECTION, sortKey };
}

export {
  editRow,
  uploadDataAndRedirect,
  toggleDirection,
}
