import React from 'react'
import { Route, IndexRoute } from 'react-router'

import MapEditorContainer from './containers/MapEditorContainer'
import InitView from './components/InitView/InitView'

import mapConfig from 'config/maps'
import routes from 'config/routes'
import UploadRoute from './routes/upload/UploadRoute'
import EditDataRoute from './routes/editData/EditDataRoute'
import EditMapRoute from './routes/editMap/EditMapRoute'

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
  <Route path={routes.mapEditor} component={MapEditorContainer} onEnter={validateParam}>
    <IndexRoute component={InitView} />
    {UploadRoute}
    {EditDataRoute}
    {EditMapRoute}
  </Route>
)
