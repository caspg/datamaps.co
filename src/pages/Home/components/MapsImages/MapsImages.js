import React, { PropTypes } from 'react'

const MapImage = (props) =>
  <div>
    <img
      className="MapImage__image"
      src={`/static/images/landing-page/${props.name}-color.jpg`}
      alt={props.name}
    />

    <style jsx>{`
      .MapImage__image {
        width: 100%;
        max-width: 650px;
        height: auto;
      }
    `}</style>
  </div>

MapImage.propTypes = {
  name: PropTypes.string.isRequired,
}

const MapsImages = () =>
  <div className="MapsImages__container">
    <div className="row">
      <div className="col-xs-4">
        <MapImage name="france" />
      </div>

      <div className="col-xs-4">
        <MapImage name="germany" />
      </div>

      <div className="col-xs-4">
        <MapImage name="poland" />
      </div>
    </div>

    <style jsx>{`
      .MapsImages__container {
        padding: 0 40px;
        margin: 120px 0;
      }
    `}</style>
  </div>

export default MapsImages;
