import React from 'react'
import { Route, IndexRoute } from 'react-router'

import routes from 'config/routes'
import EditorView from './components/EditorView/EditorView'
import SelectMapContainer from './containers/SelectMapContainer'

import MapEditorRoute from './routes/mapEditor/MapEditorRoute'

export default (
  <Route path={routes.editor} component={EditorView}>
    <IndexRoute component={SelectMapContainer} />

    {MapEditorRoute}
  </Route>
)
