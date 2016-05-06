import React from 'react'
import { Route, IndexRoute } from 'react-router'

import InitView from './components/InitView/InitView'
import EditorLayout from './components/EditorLayout/EditorLayout'
import UploadRoute from './routes/upload/UploadRoute'
import EditDataRoute from './routes/editData/EditDataRoute'
import EditMapRoute from './routes/editMap/EditMapRoute'

export default (
  <Route path="/editor" component={EditorLayout}>
    <IndexRoute component={InitView} />
    {UploadRoute}
    {EditDataRoute}
    {EditMapRoute}
  </Route>
)
