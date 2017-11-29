import React from 'react'
import { Route, IndexRoute } from 'react-router'

import MapEditorContainer from 'containers/editor/MapEditorContainer'
import ClickEditorView from './components/ClickEditorView/ClickEditorView'

import routes from 'config/routes'

import { validateEditorParam } from 'utils/validateRouteParam'

const validateParam = (nextState, replace) => {
  validateEditorParam(nextState, replace, routes.clickEditor)
}

export default (
  <Route path={routes.clickMapEditor} component={MapEditorContainer} onEnter={validateParam}>
    <IndexRoute component={ClickEditorView} />
  </Route>
)
