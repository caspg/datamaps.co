import React from 'react'
import { Route } from 'react-router'

import routes from 'config/routes'
import ShowcaseView from './components/ShowcaseView/ShowcaseView'

export default (
  <Route path={routes.showcase} component={ShowcaseView} />
)
