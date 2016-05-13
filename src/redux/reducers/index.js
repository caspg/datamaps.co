import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import regionData from './regionData'
import mapUi from './mapUi'
import sortState from './sortState'
import regionCodes from './regionCodes'

export default combineReducers({
  regionData,
  mapUi,
  sortState,
  regionCodes,
  routing: routerReducer,
})
