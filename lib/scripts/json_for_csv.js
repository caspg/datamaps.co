const fs = require('fs')
const mapType = process.argv[2]
const topoData = require(`../../public/data/topo/${mapType}.json`)

const data = topoData.objects[mapType].geometries.map((item) => {
  return {
    code: item.id.replace('CN.', ''),
    name: item.properties.name,
    value: '',
  }
})

const sortedData = data.sort(function compare(a,b) {
  if (a.name < b.name) {
    return -1;
  }
  else if (a.name > b.name) {
    return 1;
  }
  else {
    return 0;
  }
})

fs.writeFile(__dirname + '/outputs/json_for_csv.json', JSON.stringify(sortedData, null, '\t'), (err) => {
  if (err) return console.log(err);
  console.log('succesfully saved to json_for_csv.json');
});
