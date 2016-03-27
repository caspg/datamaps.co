import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from '../containers/App'
import InitPage from '../containers/pages/InitPage'
import UploadPage from '../containers/pages/UploadPage'

export default (
  <Route path="/editor" component={App}>
    <IndexRoute component={InitPage} />
    <Route path="/editor/upload" component={UploadPage} />
  </Route>
)
