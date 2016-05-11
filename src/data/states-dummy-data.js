import { Map, fromJS } from 'immutable'

function dummyValue() {
  return Math.floor(Math.random() * (120 - 90)) + 90
}

const emptyValue = ''

const statesDummyData = fromJS({
  AL: { regionName: 'Alabama', code: 'AL', value: dummyValue() },
  AK: { regionName: 'Alaska', code: 'AK', value: dummyValue() },
  AZ: { regionName: 'Arizona', code: 'AZ', value: dummyValue() },
  AR: { regionName: 'Arkansas', code: 'AR', value: dummyValue() },
  CA: { regionName: 'California', code: 'CA', value: dummyValue() },
  CO: { regionName: 'Colorado', code: 'CO', value: dummyValue() },
  CT: { regionName: 'Connecticut', code: 'CT', value: emptyValue },
  DE: { regionName: 'Delaware', code: 'DE', value: dummyValue() },
  DC: { regionName: 'District of Columbia', code: 'DC', value: emptyValue },
  FL: { regionName: 'Florida', code: 'FL', value: dummyValue() },
  GA: { regionName: 'Georgia', code: 'GA', value: emptyValue },
  HI: { regionName: 'Hawaii', code: 'HI', value: emptyValue },
  ID: { regionName: 'Idaho', code: 'ID', value: emptyValue },
  IL: { regionName: 'Illinois', code: 'IL', value: emptyValue },
  IN: { regionName: 'Indiana', code: 'IN', value: emptyValue },
  IA: { regionName: 'Iowa', code: 'IA', value: emptyValue },
  KS: { regionName: 'Kansa', code: 'KS', value: emptyValue },
  KY: { regionName: 'Kentucky', code: 'KY', value: emptyValue },
  LA: { regionName: 'Lousiana', code: 'LA', value: emptyValue },
  ME: { regionName: 'Maine', code: 'ME', value: emptyValue },
  MD: { regionName: 'Maryland', code: 'MD', value: emptyValue },
  MA: { regionName: 'Massachusetts', code: 'MA', value: emptyValue },
  MI: { regionName: 'Michigan', code: 'MI', value: emptyValue },
  MN: { regionName: 'Minnesota', code: 'MN', value: emptyValue },
  MS: { regionName: 'Mississippi', code: 'MS', value: emptyValue },
  MO: { regionName: 'Missouri', code: 'MO', value: emptyValue },
  MT: { regionName: 'Montana', code: 'MT', value: emptyValue },
  NE: { regionName: 'Nebraska', code: 'NE', value: emptyValue },
  NV: { regionName: 'Nevada', code: 'NV', value: emptyValue },
  NH: { regionName: 'New Hampshire', code: 'NH', value: emptyValue },
  NJ: { regionName: 'New Jersey', code: 'NJ', value: emptyValue },
  NM: { regionName: 'New Mexico', code: 'NM', value: emptyValue },
  NY: { regionName: 'New York', code: 'NY', value: emptyValue },
  NC: { regionName: 'North Carolina', code: 'NC', value: emptyValue },
  ND: { regionName: 'North Dakota', code: 'ND', value: emptyValue },
  OH: { regionName: 'Ohio', code: 'OH', value: emptyValue },
  OK: { regionName: 'Oklahoma', code: 'OK', value: emptyValue },
  OR: { regionName: 'Oregon', code: 'OR', value: emptyValue },
  PA: { regionName: 'Pennsylvania', code: 'PA', value: emptyValue },
  RI: { regionName: 'Rhode Island', code: 'RI', value: emptyValue },
  SC: { regionName: 'South Carolina', code: 'SC', value: emptyValue },
  SD: { regionName: 'South Dakota', code: 'SD', value: emptyValue },
  TN: { regionName: 'Tennessee', code: 'TN', value: emptyValue },
  TX: { regionName: 'Texas', code: 'TX', value: emptyValue },
  UT: { regionName: 'Utah', code: 'UT', value: emptyValue },
  VT: { regionName: 'Vermont', code: 'VT', value: emptyValue },
  VA: { regionName: 'Virginia', code: 'VA', value: emptyValue },
  WA: { regionName: 'Washington', code: 'WA', value: emptyValue },
  WV: { regionName: 'West Virginia', code: 'WV', value: emptyValue },
  WI: { regionName: 'Wisconsin', code: 'WI', value: emptyValue },
  WY: { regionName: 'Wyoming', code: 'WY', value: emptyValue },
})

const values = statesDummyData.map((item) => item.get('value'))
const filteredValues = values.filterNot((item) => item === emptyValue)
const extremeValues = Map({ min: filteredValues.min(), max: filteredValues.max() })

export { statesDummyData, extremeValues }
