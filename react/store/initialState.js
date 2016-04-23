import { fromJS, Map } from 'immutable'

// import statesEmptyData from '../data/states-empty-data'
import { stateCodes } from '../data/states-empty-data'
import { statesDummyData, extremeValues } from '../data/states-dummy-data'

export default {
  regionCodes: stateCodes,
  regionData: statesDummyData,
  extremeValues: extremeValues,
  sortState: Map({ key: 'regionName', direction: 'ASC' }),
  mapUi: Map({
    title: 'Super map test title',
    dataClassification: 'linear',
    linear: Map({
      startColor: '#f7fbff',
      endColor: '#08519c',
    }),
    equidistant: Map({
      classesCount: 5,
      pallete: ['#f0f9e8', '#bae4bc', '#7bccc4', '#43a2ca', '#0868ac'],
    }),
    noDataColor: '#f5f5f5',
  }),
}
