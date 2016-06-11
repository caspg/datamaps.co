import React from 'react'
import { Route, IndexRoute } from 'react-router'

import routes from 'config/routes'
import ClickEditorLayout from './components/ClickEditorLayout/ClickEditorLayout'
import EditorInitContainer from 'containers/editor/EditorInitContainer'

import MapEditorRoute from './routes/mapEditor/MapEditorRoute'

export default (
  <Route path={routes.clickEditor} component={ClickEditorLayout}>
    <IndexRoute component={EditorInitContainer} mainPath={routes.clickEditor} />

    {MapEditorRoute}
  </Route>
)
