import React from 'react'
import { Route } from 'react-router'

import routes from 'config/routes'
import UploadContainer from './containers/UploadContainer/UploadContainer'

export default (
  <Route path={routes.upload} component={UploadContainer} />
)
