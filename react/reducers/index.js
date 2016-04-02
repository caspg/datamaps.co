import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import emptyData from './emptyData'

export default combineReducers({
  emptyData,
  routing: routerReducer,
})
