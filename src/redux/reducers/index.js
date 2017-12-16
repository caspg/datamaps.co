import { combineReducers } from 'redux'

import regionData from './regionData'
import mapUi from './mapUi'
import sortState from './sortState'
import topoData from './topoData'
import mapType from './mapType'

export default combineReducers({
  regionData,
  mapUi,
  sortState,
  topoData,
  mapType,
})
