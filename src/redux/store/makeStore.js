import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from '../reducers'
import initialState from './initialState'

/**
 * TODO:
 * - use the same store in Client-side
 * - create new store on each request in Server-side (?)
 */
function makeStore() {
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      )
  )
}

export default makeStore;
