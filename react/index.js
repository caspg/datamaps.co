import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import Root from './containers/Root'
import configureStore from './store/configureStore'
import statesEmptyData from './data/states-empty-data'

const initialState = {
  regionData: statesEmptyData,

}

const store = configureStore(initialState)
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Root store={store} history={history} />,
  document.getElementById('editor-container')
)
