import React from 'react'
import { Route, IndexRoute } from 'react-router'

import EditorLayout from '../layouts/EditorLayout'
import InitPage from '../components/InitPage'
import UploadPage from '../containers/pages/UploadPage'
import EditDataPage from '../containers/pages/EditDataPage'

export default (
  <Route path="/editor" component={EditorLayout}>
    <IndexRoute component={InitPage} />
    <Route path="/editor/upload" component={UploadPage} />
    <Route path="/editor/edit-data" component={EditDataPage} />
  </Route>
)
