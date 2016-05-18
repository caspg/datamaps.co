import axios from 'axios'
import topojson from 'topojson'

import { RECEIVE_TOPO_DATA } from '../constants/ActionTypes'

function receiveTopoData(mapType, topoData) {
  return { type: RECEIVE_TOPO_DATA, mapType, topoData }
}

export function fetchTopoData(mapType) {
  return dispatch => {
    const url = `/data/topo/${mapType}.json`
    return axios.get(url)
      .then((response) => {
        const topoJSONData = response.data
        const topoJSONFeatures = topojson.feature(
          topoJSONData,
          topoJSONData.objects[mapType]
        ).features

        dispatch(receiveTopoData(mapType, topoJSONFeatures))
      })
  }
}
