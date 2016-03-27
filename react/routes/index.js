import React from 'react'
import { Route } from 'react-router'

import App from '../containers/App'
import UploadPage from '../containers/UploadPage'

export default (
  <Route path="/editor" component={App}>
    <Route path="/editor/upload" component={UploadPage} />
  </Route>
)
