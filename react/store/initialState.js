import { fromJS } from 'immutable'

// import statesEmptyData from '../data/states-empty-data'
import statesDummyData from '../data/states-dummy-data'

export default {
  regionData: fromJS(statesDummyData),
  sortState: { key: 'regionName', direction: 'ASC' },
  mapUi: fromJS({
    dataClassification: 'linear',
    linear: {
      startColor: '#f7fbff',
      endColor: '#08519c',
    },
  }),
}
