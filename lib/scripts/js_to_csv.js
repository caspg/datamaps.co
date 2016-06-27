const fs = require('fs')
const mapType = process.argv[2]
const topoData = require(`../../public/data/topo/${mapType}.json`)
const json2csv = require('json2csv')

const data = topoData.objects[mapType].geometries.map((item) => {
  return {
    code: item.id.replace('CN.', ''),
    name: item.properties.name,
    value: '',
  }
})

const sortedData = data.sort((a, b) => {
  if (a.name < b.name) {
    return -1
  }
  else if (a.name > b.name) {
    return 1
  }
  else {
    return 0
  }
})

json2csv({ data: sortedData, fields: ['code', 'name', 'value'] }, (error, csv) => {
  if (error) console.log(error)
  fs.writeFile(`${__dirname}/outputs/${mapType}.csv`, csv, (err) => {
    if (err) throw err
    console.log(`succesfully saved to ${mapType}.csv`);
  })
})
