import React, { PropTypes } from 'react'

import metaTags from 'config/meta'
import HeaderContainer from '../../containers/HeaderContainer'

const EditorLayout = (props) => {
  document.title = metaTags.titles.editor

  return (
    <div>
      <HeaderContainer currentPath={props.location.pathname} />

      {props.children}
    </div>
  )
}

EditorLayout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
}

export default EditorLayout
