import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import regionData from './regionData'

export default combineReducers({
  regionData,
  routing: routerReducer,
})
