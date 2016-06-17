import { Map } from 'immutable'

import worldEmptyData, { countryCodes } from '../../data/empty/world'
import usaEmptyData, { stateCodes } from '../../data/empty/usa'
import chinaEmptyData, { chinaCodes } from '../../data/empty/china'
import canadaEmptyData, { canadaCodes } from '../../data/empty/canada'
import franceEmptyData, { franceCodes } from '../../data/empty/france'
import germanyEmptyData, { germanyCodes } from '../../data/empty/germany'
import italyEmptyData, { italyCodes } from '../../data/empty/italy'
import polandEmptyData, { polandCodes } from '../../data/empty/poland'

export default {
  mapType: '',
  regionCodes: Map({
    usa: stateCodes,
    world: countryCodes,
    china: chinaCodes,
    canada: canadaCodes,
    france: franceCodes,
    germany: germanyCodes,
    italy: italyCodes,
    poland: polandCodes,
  }),
  regionData: Map({
    usa: usaEmptyData,
    world: worldEmptyData,
    china: chinaEmptyData,
    canada: canadaEmptyData,
    france: franceEmptyData,
    germany: germanyEmptyData,
    italy: italyEmptyData,
    poland: polandEmptyData,
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
