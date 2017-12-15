import React, { PropTypes } from 'react';

import routes from '@src/config/routes'
import metaTags from '@src/config/meta'
import mapsConfig from '@src/config/maps';
import AppHead from '@src/components/AppHead';
import GlobalStyles from '@src/components/GlobalStyles';
import withReduxStore from '@src/hocs/withReduxStore';
import HeaderContainer from '@src/pages/Editor/containers/HeaderContainer'

import MapEditorContainer from './containers/MapEditorContainer'
import MapEditorRegionDataContainer from './containers/MapEditorRegionDataContainer'
import MapEditorSidebarSwitch from './MapEditorSidebarSwitch'

MapEditorPage.propTypes = {
  url: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    query: PropTypes.shape({
      mapType: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  children: PropTypes.element,
}

function MapEditorPage(props) {
  const { url: { query: { mapType }, pathname } } = props;
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

      <HeaderContainer
        mainPath={routes.editor}
        currentPath={props.url.pathname}
      />

      <MapEditorContainer params={{ mapType }}>
        <MapEditorRegionDataContainer>
          <MapEditorSidebarSwitch
            pathname={pathname}
            mapType={mapType}
          />
        </MapEditorRegionDataContainer>
      </MapEditorContainer>
    </div>
  );
}

export default withReduxStore(MapEditorPage);
