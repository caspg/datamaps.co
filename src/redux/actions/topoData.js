import axios from 'axios'
import topojson from 'topojson'

import { setMapType } from '../actions'
import { RECEIVE_TOPO_DATA, REQUEST_TOPO_DATA } from '../constants/ActionTypes'

function requestTopoData() {
  return { type: REQUEST_TOPO_DATA }
}

function receiveTopoData(mapType, topoData) {
  return { type: RECEIVE_TOPO_DATA, mapType, topoData }
}

export function fetchTopoData(mapType) {
  return dispatch => {
    dispatch(requestTopoData())
    dispatch(setMapType(mapType))

    const url = `/data/topo/${mapType}.json`
    return axios.get(url)
      .then((response) => dispatch(receiveTopoData(mapType, response.data)))
  }
}
