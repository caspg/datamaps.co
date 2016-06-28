const fs = require('fs')
const mapType = process.argv[2]
const topoData = require(`../../public/data/topo/${mapType}.json`)

const minify = process.argv[3] === 'minify'
const minifyArg = minify ? null : '\t'

fs.writeFile(__dirname + '/outputs/extracted-data.json', JSON.stringify(topoData, null, minifyArg), (err) => {
  if (err) return console.log(err);
  console.log('succesfully saved to world-empty-data.json');
});
