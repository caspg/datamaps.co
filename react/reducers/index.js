import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import regionData from './regionData'
import mapUi from './mapUi'

export default combineReducers({
  regionData,
  mapUi,
  routing: routerReducer,
})
