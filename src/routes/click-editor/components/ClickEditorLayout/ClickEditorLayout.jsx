import React, { PropTypes } from 'react'

import metaTags from 'config/meta'
import routes from 'config/routes'
import HeaderContainer from 'containers/editor/HeaderContainer'

const EditorLayout = (props) => {
  document.title = metaTags.titles.editor

  return (
    <div>
      <HeaderContainer mainPath={routes.clickEditor} currentPath={props.location.pathname} />

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
