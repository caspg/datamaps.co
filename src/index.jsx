import 'styles/vendors'
import 'styles/globals.css'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from './redux/store/configureStore'
import HomeRoute from './routes/home/HomeRoute'
import EditorRoute from './routes/editor/EditorRoute'
import Devtools from './containers/Devtools'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

const Root = () =>
  <Provider store={store}>
    <div>
      <Router history={history}>
        {HomeRoute}
        {EditorRoute}
      </Router>
      <Devtools />
    </div>
  </Provider>

render(
  <Root />,
  document.getElementById('application')
)
