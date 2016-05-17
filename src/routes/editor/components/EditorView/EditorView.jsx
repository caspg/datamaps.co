import React, { PropTypes } from 'react'

import Header from '../Header/Header'

const EditorView = (props) =>
  <div>
    <Header />

    {props.children}
  </div>

EditorView.propTypes = {
  children: PropTypes.node.isRequired,
}

export default EditorView
