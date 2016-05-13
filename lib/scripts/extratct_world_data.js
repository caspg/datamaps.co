const fs = require('fs')
const worldTopo = require('../../src/data/topo/world')

const data = worldTopo.objects.world.geometries.reduce((object, item) => {
  object[item.id] = {
    regionName: item.properties.name,
    code: item.id,
    value: '',
  }

  return object
}, {})

const countryCodes = worldTopo.objects.world.geometries.map((item) => item.id)

fs.writeFile(__dirname + '/outputs/world-empty-data.json', JSON.stringify(countryCodes, null, '\t'), (err) => {
  if (err) return console.log(err);
  console.log('succesfully saved to world-empty-data.json');
});
