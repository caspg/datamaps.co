import { fromJS, Map } from 'immutable'

// import statesEmptyData from '../data/states-empty-data'
import { stateCodes } from '../data/states-empty-data'
import statesDummyData from '../data/states-dummy-data'

export default {
  regionCodes: stateCodes,
  regionData: statesDummyData,
  sortState: Map({ key: 'regionName', direction: 'ASC' }),
  mapUi: fromJS({
    title: 'Super map test title',
    dataClassification: 'linear',
    linear: {
      startColor: '#f7fbff',
      endColor: '#08519c',
    },
    noDataColor: '#f5f5f5',
  }),
}
