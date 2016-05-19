import React from 'react'
import { Route, IndexRoute } from 'react-router'

import routes from 'config/routes'
import EditorLayout from './components/EditorLayout/EditorLayout'
import EditorInitContainer from './containers/EditorInitContainer'

import MapEditorRoute from './routes/mapEditor/MapEditorRoute'

export default (
  <Route path={routes.editor} component={EditorLayout}>
    <IndexRoute component={EditorInitContainer} />

    {MapEditorRoute}
  </Route>
)
