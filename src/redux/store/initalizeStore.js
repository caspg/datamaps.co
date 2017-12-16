import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import isSSR from '@src/utils/isSSR'

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

let reduxStore = null

function initalizeStore() {
  if (isSSR()) {
    // Create new store for every server-side request
    return makeStore()
  }

  if (!reduxStore) {
    reduxStore = makeStore()
  }

  return reduxStore;
}

export default initalizeStore;
