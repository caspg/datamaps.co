import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { grey300 } from '@src/styles/colors'

class MapThumb extends Component {
  static propTypes = {
    code: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    handleMapSelect: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
    this.props.handleMapSelect(this.props.code)
  }

  render() {
    const { code, displayName } = this.props

    return (
      <div className="MapThumb__container">
        <div
          className="MapThumb__imagewrapper"
          onClick={this.handleClick}
        >
          <img
            className="MapThumb__image"
            src={`/static/images/maps/${code}.jpg`}
            alt={displayName}
          />
        </div>

        <h4 className="MapThumb__title">
          {displayName}
        </h4>

        <style jsx>{`
          .MapThumb__container {
            display: inline-block;
            padding: 20px;
          }

          .MapThumb__imagewrapper {
            padding: 2px;
            width: 250px;
            height: 180px;
            border: 1px solid ${grey300};
            border-radius: 8px;
            cursor: pointer;

            -webkit-transition: box-shadow 0.1s ease-in-out;
            -moz-transition: box-shadow 0.1s ease-in-out;
            -o-transition: box-shadow 0.1s ease-in-out;
            transition: box-shadow 0.1s ease-in-out;
          }

          .MapThumb__imagewrapper:hover {
            -webkit-box-shadow: 3px 3px 8px 0px ${grey300};
            -moz-box-shadow: 3px 3px 8px 0px ${grey300};
            box-shadow: 3px 3px 8px 0px ${grey300};
          }

          .MapThumb__image {
            width: 100%;
            height: auto;
          }

          .MapThumb__title {
            margin-top: 15px;
          }
        `}</style>
      </div>
    )
  }
}

export default MapThumb
