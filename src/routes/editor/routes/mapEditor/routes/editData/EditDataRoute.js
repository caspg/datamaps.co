import React from 'react'
import { Route } from 'react-router'

import routes from 'config/routes'
import EditDataView from './components/EditDataView/EditDataView'

export default (
  <Route path={routes.editData} component={EditDataView} />
)
