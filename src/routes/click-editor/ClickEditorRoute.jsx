import React from 'react'
import { Route } from 'react-router'

import routes from 'config/routes'
import ClickEditorLayout from './components/ClickEditorLayout/ClickEditorLayout'

export default (
  <Route path={routes.clickEditor} component={ClickEditorLayout} />
)
