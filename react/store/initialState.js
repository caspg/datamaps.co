import { fromJS, Map } from 'immutable'

// import statesEmptyData from '../data/states-empty-data'
import { stateCodes } from '../data/states-empty-data'
import statesDummyData from '../data/states-dummy-data'

export default {
  regionCodes: stateCodes,
  regionData: fromJS(statesDummyData),
  sortState: Map({ key: 'regionName', direction: 'ASC' }),
  mapUi: fromJS({
    dataClassification: 'linear',
    linear: {
      startColor: '#f7fbff',
      endColor: '#08519c',
    },
  }),
}
