import React, { PropTypes } from 'react';

import routes from '@src/config/routes'
import metaTags from '@src/config/meta'
import AppHead from '@src/components/AppHead';
import GlobalStyles from '@src/components/GlobalStyles';
import HeaderContainer from '@src/containers/editor/HeaderContainer'
import withReduxStore from '@src/hocs/withReduxStore';

Editor.propTypes = {
  url: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

function Editor(props) {
  return (
    <div>
      <AppHead title={metaTags.titles.editor} />
      <GlobalStyles />

      <HeaderContainer
        mainPath={routes.editor}
        currentPath={props.url.pathname}
      />
    </div>
  );
}

export default withReduxStore(Editor);
