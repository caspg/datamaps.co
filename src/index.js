import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from './redux/store/configureStore'
// import routes from '../routes'

// const store = configureStore()
// const history = syncHistoryWithStore(browserHistory, store)

const Root = () =>
  <h1>Hello world</h1>

render(
  <Root />,
  document.getElementById('application')
)
