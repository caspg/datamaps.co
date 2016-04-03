import { createStore } from 'redux'

import rootReducer from '../reducers'
import initialState from './initialState'

export default function configureStore() {
  return createStore(
    rootReducer,
    initialState
  )
}
