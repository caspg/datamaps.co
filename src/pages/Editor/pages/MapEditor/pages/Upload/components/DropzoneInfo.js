import React, { PropTypes } from 'react'

import mapsConfig from '@src/config/maps'
import { grey600, grey300 } from '@src/styles/colors'

import CSVExample from './CSVExample'

const DropzoneInfo = (props) => {
  const { mapType } = props
  const displayMapName = mapsConfig.types.find((item) =>
    item.code === mapType
  ).displayName

  return (
    <div className="DropzoneInfo">
      <p>Data file has to include at least two columns:</p>
      <ul className="DropzoneInfo__list">
        <li className="DropzoneInfo__list-item">code (or name)</li>
        <li className="DropzoneInfo__list-item">value</li>
      </ul>

      <p>Supported files:</p>
      <ul className="DropzoneInfo__list">
        <li className="DropzoneInfo__list-item">CSV</li>
        <li className="DropzoneInfo__list-item">TSV (tabs)</li>
        <li className="DropzoneInfo__list-item">DSV (semicolons or pipes)</li>
      </ul>

      <a href={`/static/data/csv/${mapType}.csv`} download={`${mapType}-data.csv`}>
        example {displayMapName} csv
      </a>

      <CSVExample type={mapType} />

      <style jsx>{`
        .DropzoneInfo {
          border-top: 1px solid ${grey300};
          padding: 0 50px;
          padding-top: 30px;
          color: ${grey600};
        }

        .DropzoneInfo__list {
          margin-left: 10px;
          margin-top: 10px;
          margin-bottom: 5px;
        }

        .DropzoneInfo__list-item {
          margin-bottom: 0;
        }
      `}</style>
    </div>
  )
}

DropzoneInfo.propTypes = {
  mapType: PropTypes.string.isRequired,
}

export default DropzoneInfo
