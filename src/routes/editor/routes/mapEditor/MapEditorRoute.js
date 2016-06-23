import React from 'react'
import { Route, IndexRoute } from 'react-router'

import MapEditorContainer from 'containers/editor/MapEditorContainer'
import MapEditorWrapper from './containers/MapEditorWrapper'
import InitView from './components/InitView/InitView'

import routes from 'config/routes'
import UploadRoute from './routes/upload/UploadRoute'
import EditDataRoute from './routes/editData/EditDataRoute'
import EditMapRoute from './routes/editMap/EditMapRoute'

import { validateEditorParam } from 'utils/validateRouteParam'

const validateParam = (nextState, replace) => {
  validateEditorParam(nextState, replace, routes.editor)
}

export default (
  <Route path={routes.mapEditor} component={MapEditorContainer} onEnter={validateParam}>
    <Route component={MapEditorWrapper}>
      <IndexRoute component={InitView} />
      {UploadRoute}
      {EditDataRoute}
      {EditMapRoute}
    </Route>
  </Route>
)
