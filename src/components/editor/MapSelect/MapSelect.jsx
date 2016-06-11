import React, { Component, PropTypes } from 'react'
import Select from 'react-select'

import mapsConfig from 'config/maps'
import style from './MapSelect.css'
import routes from 'config/routes'

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

    const selectValue = (this.props.currentPath === routes.editor) ? '' : this.props.mapType

    return (
      <div className={'map-select ' + style.container}>

        &nbsp;

        <div className={style.wrapper}>
          <Select
            value={selectValue}
            options={options}
            onChange={this.handleOnChange}
            clearable={false}
          />
        </div>
      </div>
    )
  }
}

MapSelect.propTypes = {
  mapType: PropTypes.string.isRequired,
  onMapTypeChange: PropTypes.func.isRequired,
  currentPath: PropTypes.string.isRequired,
}

export default MapSelect
