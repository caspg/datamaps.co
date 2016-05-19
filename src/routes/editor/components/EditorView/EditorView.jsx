import React, { PropTypes } from 'react'

import HeaderContainer from '../../containers/HeaderContainer'

const EditorView = (props) =>
  <div>
    <HeaderContainer currentPath={props.location.pathname} />

    {props.children}
  </div>

EditorView.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
}

export default EditorView
