import React, { PropTypes } from 'react'
import { Map } from 'immutable'

import LinearLegend from './LinearLegend'
import EquidistantLegend from './EquidistantLegend'

const MapLegend = (props) => {
  const dataClassification = props.mapUi.get('dataClassification')
  const linearLegend = <LinearLegend {...props} />
  const equidistantLegend = <EquidistantLegend {...props} />
  const legends = {
    linear: linearLegend,
    equidistant: equidistantLegend,
  }

  return legends[dataClassification]
}

MapLegend.propTypes = {
  mapUi: PropTypes.instanceOf(Map).isRequired,
}

export default MapLegend;
