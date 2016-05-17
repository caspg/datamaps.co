import React from 'react'
import { Route, IndexRoute } from 'react-router'

import EditorView from './components/EditorView/EditorView'
import SelectMapView from './components/SelectMapView/SelectMapView'

import MapEditorRoute from './routes/mapEditor/MapEditorRoute'

export default (
  <Route path="/editor" component={EditorView}>
    <IndexRoute component={SelectMapView} />

    {MapEditorRoute}
  </Route>
)
