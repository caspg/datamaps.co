import { fromJS } from 'immutable'

import statesEmptyData from '../data/states-empty-data'

const immutableRegionData = fromJS(statesEmptyData)

export default {
  regionData: immutableRegionData,
}
