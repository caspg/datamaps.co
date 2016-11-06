import React, { Component, PropTypes } from 'react'
import Autosuggest from 'react-autosuggest'

import mapsConfig from 'config/maps'
import './MapAutosuggest.global.css'

const mapsOptions = mapsConfig.types.map(item => (
  { code: item.code, label: item.displayName }
))

class MapAutosuggest extends Component {
  static getSuggestions(value) {
    const inputValue = value.trim().toLowerCase()

    return inputValue.length === 0 ?
      mapsOptions :
      mapsOptions.filter((row) => {
        const regexp = new RegExp(inputValue, 'g')
        return regexp.test(row.label.toLowerCase())
      })
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
      suggestions: mapsOptions,
    }

    this.onChange = this.onChange.bind(this)
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this)
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this)
  }

  onChange(event, { newValue }) {
    this.setState({
      value: newValue,
    })
  }

  onSuggestionsFetchRequested({ value }) {
    this.setState({
      suggestions: MapAutosuggest.getSuggestions(value),
    })
  }

  onSuggestionsClearRequested() {
    this.setState({
      suggestions: mapsOptions,
    })
  }

  render() {
    const { value, suggestions } = this.state

    const inputProps = {
      placeholder: 'Select a map',
      value,
      onChange: this.onChange,
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
      />
    )
  }
}

export default MapAutosuggest
