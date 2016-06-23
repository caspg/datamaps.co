import { Map } from 'immutable'

export default {
  mapType: '',
  regionData: Map(),
  topoData: Map(),
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
}
