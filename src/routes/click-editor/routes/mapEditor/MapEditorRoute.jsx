import React from 'react'
import { Route, IndexRoute } from 'react-router'

import MapEditorContainer from 'containers/editor/MapEditorContainer'
import InitView from './components/InitView/InitView'

import mapConfig from 'config/maps'
import routes from 'config/routes'

const validateParam = (nextState, replace) => {
  const mapTypes = mapConfig.types.map(i => i.code)

  if (mapTypes.indexOf(nextState.params.mapType) < 0) {
    replace({
      pathname: '/editor',
      state: { nextPathname: nextState.location.pathname },
    })
  }
}

export default (
  <Route path={routes.clickMapEditor} component={MapEditorContainer} onEnter={validateParam}>
    <IndexRoute component={InitView} />
  </Route>
)
