import React, { PropTypes } from 'react'

import HeaderContainer from '../../containers/HeaderContainer'

const EditorView = (props) =>
  <div>
    <HeaderContainer />

    {props.children}
  </div>

EditorView.propTypes = {
  children: PropTypes.node.isRequired,
}

export default EditorView
