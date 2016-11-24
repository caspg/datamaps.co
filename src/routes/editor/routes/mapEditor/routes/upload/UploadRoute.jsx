import React from 'react'
import { Route } from 'react-router'

import routes from 'config/routes'
import UploadMainLayout from './components/UploadMainLayout'

export default (
  <Route path={routes.upload} component={UploadMainLayout} />
)
