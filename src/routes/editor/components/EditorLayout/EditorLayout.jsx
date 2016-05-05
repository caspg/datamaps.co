import React, { PropTypes } from 'react'

import Header from '../Header/Header'

const EditorLayout = (props) =>
  <div>
    <Header />

    {props.children}
  </div>

EditorLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default EditorLayout
