import React from 'react'
import { Route, IndexRoute } from 'react-router'

import MapEditorLayout from './components/MapEditorLayout/MapEditorLayout'
import InitView from './components/InitView/InitView'

import UploadRoute from './routes/upload/UploadRoute'
import EditDataRoute from './routes/editData/EditDataRoute'
import EditMapRoute from './routes/editMap/EditMapRoute'

export default (
  <Route path=":mapType" component={MapEditorLayout}>
    <IndexRoute component={InitView} />
    {UploadRoute}
    {EditDataRoute}
    {EditMapRoute}
  </Route>
)
