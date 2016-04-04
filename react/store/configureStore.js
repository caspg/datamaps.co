import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from '../reducers'
import initialState from './initialState'
import DevTools from '../containers/DevTools'

export default function configureStore() {
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      DevTools.instrument()
      )
  )
}
