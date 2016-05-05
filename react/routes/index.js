import React from 'react'
import { Route, IndexRoute } from 'react-router'

import EditorLayout from '../layouts/EditorLayout'
import InitPage from '../components/InitPage'
import UploadPage from '../containers/pages/UploadPage'
import EditDataPage from '../containers/pages/EditDataPage'
import EditMapPage from '../containers/pages/EditMapPage'

export default (
  <Route path="/old/editor" component={EditorLayout}>
    <IndexRoute component={InitPage} />
    <Route path="/old/editor/upload" component={UploadPage} />
    <Route path="/old/editor/edit-data" component={EditDataPage} />
    <Route path="/old/editor/edit-map" component={EditMapPage} />
  </Route>
)
