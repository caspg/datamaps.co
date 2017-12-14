import React, { PropTypes } from 'react';

import metaTags from '@src/config/meta'
import AppHead from '@src/components/AppHead';
import GlobalStyles from '@src/components/GlobalStyles';
import withReduxStore from '@src/hocs/withReduxStore';

MapEditorPage.propTypes = {
  url: PropTypes.shape({
    query: PropTypes.shape({
      mapType: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

function MapEditorPage(props) {
  const { url: { query: { mapType } } } = props;

  return (
    <div>
      <AppHead
        title={metaTags.titles.mapEditor(mapType)}
        description={metaTags.descriptions.mapEditor(mapType)}
      />
      <GlobalStyles />

      <h1>MapEditorPage</h1>

      <h1>{props.url.query.mapType}</h1>
    </div>
  );
}

export default withReduxStore(MapEditorPage);
