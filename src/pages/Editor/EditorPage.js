import React from 'react';
import PropTypes from 'prop-types'

import routes from '@src/config/routes'
import metaTags from '@src/config/meta'
import AppHead from '@src/components/AppHead';
import GlobalStyles from '@src/components/GlobalStyles';
import withReduxStore from '@src/hocs/withReduxStore';

import HeaderContainer from './containers/HeaderContainer'
import EditorInitContainer from './containers/EditorInitContainer'

EditorPage.propTypes = {
  url: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

function EditorPage(props) {
  return (
    <div>
      <AppHead title={metaTags.titles.editor} />
      <GlobalStyles />

      <HeaderContainer
        mainPath={routes.editor}
        currentPath={props.url.pathname}
      />

      <EditorInitContainer
        mainPath={routes.editor}
      />
    </div>
  );
}

export default withReduxStore(EditorPage);
