import React from 'react';
import PropTypes from 'prop-types';

import pages from '@src/config/pages'
import MapEditorInitiView from './components/MapEditorInitiView'
import Upload from './pages/Upload'
import EditData from './pages/EditData'
import EditMap from './pages/EditMap'

MapEditorSidebarSwitch.propTypes = {
  pathname: PropTypes.string.isRequired,
  mapType: PropTypes.string.isRequired,
};

function MapEditorSidebarSwitch(props) {
  switch (props.pathname) {
    case pages.upload:
      return (
        <Upload mapType={props.mapType} />
      )

    case pages.editData:
      return (
        <EditData mapType={props.mapType} />
      )

    case pages.editMap:
      return (
        <EditMap mapType={props.mapType} />
      )

    default:
      return (
        <MapEditorInitiView mapType={props.mapType} />
      )
  }
}

export default MapEditorSidebarSwitch;
