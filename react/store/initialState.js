import { fromJS } from 'immutable'

import statesEmptyData from '../data/states-empty-data'

export default {
  regionData: fromJS(statesEmptyData),
  mapUi: fromJS({
    dataClassification: 'linear',
    linear: {
      startColor: '#f7fbff',
      endColor: '#08519c',
    },
  }),
}
