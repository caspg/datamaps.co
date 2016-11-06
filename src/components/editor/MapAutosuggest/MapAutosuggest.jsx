import React, { Component, PropTypes } from 'react'
import Autosuggest from 'react-autosuggest'

import routes from 'config/routes'
import mapsConfig from 'config/maps'
import './MapAutosuggest.global.css'

const mapsOptions = mapsConfig.types.map(item => (
  { code: item.code, label: item.displayName }
))

class MapAutosuggest extends Component {
  static getSuggestions(value) {
    const inputValue = value.trim().toLowerCase()

    const testRow = (row) => {
      const regexp = new RegExp(inputValue, 'g')
      return regexp.test(row.label.toLowerCase())
    }

    return inputValue.length === 0 ?
      mapsOptions :
      [
        ...mapsOptions.filter(row => testRow(row)),
        ...mapsOptions.filter(row => !testRow(row)),
      ]
  }

  static getSuggestionValue(suggestion) {
    return suggestion.code
  }

  static renderSuggestion(suggestion) {
    return (
      <div>
        {suggestion.label}
      </div>
    )
  }

  static shouldRenderSuggestions() {
    return true;
  }

  constructor(props) {
    super(props)

    this.state = {
      value: '',
      suggestions: [],
    }

    this.onChange = this.onChange.bind(this)
    this.onBlur = this.onBlur.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this)
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this)
    this.onSuggestionSelected = this.onSuggestionSelected.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: (nextProps.currentPath === routes.editor) ? '' : nextProps.mapType,
    })
  }

  onChange(event, { newValue }) {
    this.setState({
      value: newValue,
    })
  }

  onBlur(event, { focusedSuggestion }) {
    if (!focusedSuggestion) return;
    this.handleValueChanged(focusedSuggestion);
  }

  onSuggestionsFetchRequested({ value }) {
    this.setState({
      suggestions: MapAutosuggest.getSuggestions(value),
    })
  }

  onSuggestionsClearRequested() {
    this.setState({
      suggestions: [],
    })
  }

  onSuggestionSelected(event, { suggestion }) {
    this.handleValueChanged(suggestion);
  }

  handleValueChanged(suggestion) {
    const { code } = suggestion;
    this.props.onMapTypeChange(code);
  }

  render() {
    const { value, suggestions } = this.state

    const inputProps = {
      placeholder: 'Select a map',
      value,
      onChange: this.onChange,
      onBlur: this.onBlur,
    }

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={MapAutosuggest.getSuggestionValue}
        renderSuggestion={MapAutosuggest.renderSuggestion}
        inputProps={inputProps}
        focusFirstSuggestion
        shouldRenderSuggestions={MapAutosuggest.shouldRenderSuggestions}
        onSuggestionSelected={this.onSuggestionSelected}
      />
    )
  }
}

MapAutosuggest.propTypes = {
  onMapTypeChange: PropTypes.func.isRequired,
  currentPath: PropTypes.string.isRequired,
  mapType: PropTypes.string.isRequired,
}

export default MapAutosuggest
