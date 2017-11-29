import React from 'react'
import { Route, IndexRoute } from 'react-router'

import routes from 'config/routes'
import EditorLayout from 'components/editor/EditorLayout/EditorLayout'
import EditorInitContainer from 'containers/editor/EditorInitContainer'

import MapEditorRoute from './routes/mapEditor/MapEditorRoute'

export default (
  <Route path={routes.editor} component={EditorLayout} mainPath={routes.editor}>
    <IndexRoute component={EditorInitContainer} mainPath={routes.editor} />

    {MapEditorRoute}
  </Route>
)
