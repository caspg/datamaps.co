import React from 'react'
import Select from 'react-select'

import mapsConfig from 'config/maps'
import style from './MapSelect.css'

const MapSelect = () => {
  const options = mapsConfig.types.map((item) => {
    return { value: item.code, label: item.displayName }
  })

  return (
    <div className={'map-select ' + style.container}>
      <Select
        value={options[0].value}
        options={options}
        clearable={false}
      />
    </div>
  )
}

export default MapSelect
