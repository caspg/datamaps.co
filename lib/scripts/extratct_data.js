const fs = require('fs')
const topoData = require('../../public/data/topo/china.json')

const type = 'china'

const emptyData = topoData.objects[type].geometries.reduce((object, item) => {
  object[item.id.replace('CN.', '')] = {
    regionName: item.properties.name,
    code: item.id.replace('CN.', ''),
    value: '',
  }

  return object
}, {})

const codes = topoData.objects[type].geometries.map((item) => item.id.replace('CN.', ''))

fs.writeFile(__dirname + '/outputs/world-empty-data.json', JSON.stringify(codes, null, '\t'), (err) => {
  if (err) return console.log(err);
  console.log('succesfully saved to world-empty-data.json');
});
