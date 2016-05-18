import React from 'react'
import { Route } from 'react-router'

import routes from 'config/routes'
import EditMapView from './containers/EditMapView/EditMapView'

export default (
  <Route path={routes.editMap} component={EditMapView} />
)
