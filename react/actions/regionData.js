import { push } from 'react-router-redux'

import { EDIT_ROW, UPLOAD_DATA } from '../constants/ActionTypes'

function editRow(regionName, value) {
  return { type: EDIT_ROW, regionName, value }
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

export {
  editRow,
  uploadDataAndRedirect,
}
