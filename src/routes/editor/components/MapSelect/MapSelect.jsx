import React, { Component, PropTypes } from 'react'
import Select from 'react-select'

import mapsConfig from 'config/maps'
import style from './MapSelect.css'

class MapSelect extends Component {
  constructor(props) {
    super(props)
    this.handleOnChange = this.handleOnChange.bind(this)
  }

  handleOnChange(option) {
    this.props.onMapTypeChange(option.value)
  }

  render() {
    const options = mapsConfig.types.map((item) => {
      return { value: item.code, label: item.displayName }
    })

    return (
      <div className={'map-select ' + style.container}>
        <Select
          value={this.props.mapType}
          options={options}
          onChange={this.handleOnChange}
          clearable={false}
        />
      </div>
    )
  }
}

MapSelect.propTypes = {
  mapType: PropTypes.string.isRequired,
  onMapTypeChange: PropTypes.func.isRequired,
}

export default MapSelect
