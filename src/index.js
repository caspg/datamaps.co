import 'styles/vendors'
import 'styles/globals.css'

import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from './redux/store/configureStore'
import Root from './containers/Root'


const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

history.listen((location) => {
  if (process.env.NODE_ENV === 'production') {
    window.ga('send', 'pageview', location.pathname)
  }
})

render(
  <Root store={store} history={history} />,
  document.getElementById('application')
)
