import React, { PropTypes } from 'react'

import mapsConfig from 'config/maps'
import style from './DropzoneInfo.css'
import CSVExample from '../CSVExample/CSVExample'

const DropzoneInfo = (props) => {
  const { mapType } = props
  const displayMapName = mapsConfig.types.find((item) =>
    item.code === mapType
  ).displayName

  return (
    <div className={style.container}>
      <p>Data file has to include at least two columns:</p>
      <ul className={style.list}>
        <li className={style['list-item']}>code (or name)</li>
        <li className={style['list-item']}>value</li>
      </ul>

      <p>Supported files:</p>
      <ul className={style.list}>
        <li className={style['list-item']}>CSV</li>
        <li className={style['list-item']}>TSV (tabs)</li>
        <li className={style['list-item']}>DSV (semicolons or pipes)</li>
      </ul>

      <a href={`/data/csv/${mapType}.csv`} download={`${mapType}-data.csv`}>
        example {displayMapName} csv
      </a>

      <CSVExample type={mapType} />
    </div>
  )
}

DropzoneInfo.propTypes = {
  mapType: PropTypes.string.isRequired,
}

export default DropzoneInfo
