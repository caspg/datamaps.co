import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'
import thunk from 'redux-thunk'

import rootReducer from '../reducers'
import initialState from './initialState'

export default function configureStore() {
  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(thunk, routerMiddleware(browserHistory)))
  )
}
