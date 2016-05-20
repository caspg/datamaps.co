import React from 'react'
import { Route } from 'react-router'

import routes from 'config/routes'
import ContactView from './components/ContactView/ContactView'

export default (
  <Route path={routes.contact} component={ContactView} />
)
