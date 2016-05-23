import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'

import HomeRoute from '../../routes/home/HomeRoute'
import EditorRoute from '../../routes/editor/EditorRoute'
import ContactRoute from '../../routes/contact/ContactRoute'

const Root = (props) =>
  <Provider store={props.store}>
    <div>
      <Router history={props.history}>
        {HomeRoute}
        {EditorRoute}
        {ContactRoute}
      </Router>
    </div>
  </Provider>

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
}

export default Root
