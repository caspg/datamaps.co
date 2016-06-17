import { Map } from 'immutable'

import worldEmptyData from '../../data/empty/world'
import usaEmptyData from '../../data/empty/usa'
import chinaEmptyData from '../../data/empty/china'
import canadaEmptyData from '../../data/empty/canada'

export default {
  mapType: '',
  regionData: Map({
    usa: usaEmptyData,
    world: worldEmptyData,
    china: chinaEmptyData,
    canada: canadaEmptyData,
  }),
  sortState: Map({ key: 'name', direction: 'ASC' }),
  mapUi: Map({
    title: '',
    legendTitle: '',
    dataClassification: 'linear',
    linear: Map({
      startColor: '#f7fbff',
      endColor: '#08519c',
    }),
    equidistant: Map({
      classesCount: 5,
      palleteKey: 'GnBu',
      pallete: ['#f0f9e8', '#bae4bc', '#7bccc4', '#43a2ca', '#0868ac'],
      domainStartValue: '',
      domainEndValue: '',
    }),
    noDataColor: '#f5f5f5',
    borderColor: '#ccc',
  }),
  topoData: Map(),
}
