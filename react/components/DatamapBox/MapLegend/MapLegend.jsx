import React, { PropTypes } from 'react'
import { Map } from 'immutable'

import LinearLegend from './LinearLegend'

const MapLegend = (props) => {
  const dataClassification = props.mapUi.get('dataClassification')
  const linearLegend = <LinearLegend {...props} />
  const legends = {
    linear: linearLegend,
  }

  return legends[dataClassification]
}

MapLegend.propTypes = {
  mapUi: PropTypes.instanceOf(Map).isRequired,
}

export default MapLegend;
