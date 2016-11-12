# datamaps.co

[Datamaps.co](http://datamaps.co/) is a free and simple platform for creating visualizations with data maps. It allows you to upload CSV file with region data, and fully customize your map's appearance. Your Map can be saved as PNG or SVG.

![](http://i.imgur.com/hDBUXO7.gif)

## Main technology stack

* React
* Redux
* d3
* Node + express
* css-modules

## Adding new map

* prepare topoJSON file:
  * http://www.diva-gis.org/gdata - free spatial data
  * http://www.mapshaper.org/ - Tool for editing and converting Shapefile to topoJSON
* place topoJSON file in `public/data/topo/MAP_TYPE.json`
* create example csv and put to `public/data/csv/`
  * you can run: `node lib/scripts/js_to_csv.js [MAP_TYPE]` (it will load topojson file from previous steps)
* add map info to `src/config/maps.js`
* create map image thumb and put to `public/images/maps/` [resolution: 350x250]

## Dependencies

* Node v6.6.0
* npm v3.10.7
* yarnpkg v0.15.1

## Development

* clone this repo
* run `yarn install` from main repo directory
* start express.js server: `npm start`
* go to localhost:3030 in your browser

## License

The project is available as open source under the terms of the MIT License.
