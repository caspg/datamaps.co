import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from './redux/store/configureStore'
import HomeRoute from './routes/home/HomeRoute'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

const Root = () =>
  <Provider store={store}>
    <Router history={history}>
      {HomeRoute}
    </Router>
  </Provider>

render(
  <Root />,
  document.getElementById('application')
)
