import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from './redux/store/configureStore'
import HomeRoute from './routes/home/HomeRoute'
import EditorRoute from './routes/editor/EditorRoute'

import 'styles/globals.css'
import 'styles/react-select.global.css'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

const Root = () =>
  <Provider store={store}>
    <Router history={history}>
      {HomeRoute}
      {EditorRoute}
    </Router>
  </Provider>

render(
  <Root />,
  document.getElementById('application')
)
