import React, { PropTypes } from 'react';

import metaTags from '@src/config/meta'
import mapsConfig from '@src/config/maps';
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
  const prettyMapType = mapsConfig.types.find(i =>
      i.code === mapType
  ).displayName

  return (
    <div>
      <AppHead
        title={metaTags.titles.mapEditor(prettyMapType)}
        description={metaTags.descriptions.mapEditor(prettyMapType)}
      />
      <GlobalStyles />

      <h1>MapEditorPage</h1>

      <h1>{props.url.query.mapType}</h1>
    </div>
  );
}

export default withReduxStore(MapEditorPage);
