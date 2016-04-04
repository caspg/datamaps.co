import { createStore } from 'redux'

import rootReducer from '../reducers'
import initialState from './initialState'
import DevTools from '../containers/DevTools'

export default function configureStore() {
  return createStore(
    rootReducer,
    initialState,
    DevTools.instrument()
  )
}
