const fs = require('fs')
const mapType = process.argv[2]
const topoData = require(`../../public/data/topo/${mapType}.json`)

const obj = topoData.objects
const mapTopoData = obj[Object.keys(obj)[0]]

const emptyData = mapTopoData.geometries.reduce((object, item) => {
  object[item.id.replace('CA.', '')] = {
    name: item.properties.name,
    code: item.id.replace('CA.', ''),
    value: '',
  }

  return object
}, {})

fs.writeFile(__dirname + '/outputs/extracted-data.json', JSON.stringify(emptyData, null, '\t'), (err) => {
  if (err) return console.log(err);
  console.log('succesfully saved to world-empty-data.json');
});
