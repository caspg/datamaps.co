import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import CommonEditor from './containers/CommonEditor'
import LinearScaleEditor from './containers/LinearScaleEditor'
import EquidistantScaleEditor from './containers/EquidistantScaleEditor'

MapEditor.propTypes = {
  mapUi: PropTypes.object.isRequired,
};

const editors = {
  linear: <LinearScaleEditor />,
  equidistant: <EquidistantScaleEditor />,
}

function MapEditor(props) {
  const dataClassification = props.mapUi.get('dataClassification')

  return (
    <CommonEditor>
      {editors[dataClassification]}
    </CommonEditor>
  )
}

function mapStateToProps(state) {
  return { mapUi: state.mapUi };
}

export default connect(mapStateToProps)(MapEditor);
