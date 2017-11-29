import React, { PropTypes } from 'react'

import style from './MapsImages.css'

const MapImage = (props) =>
  <div>
    <img
      className={style.image}
      src={`/images/landing-page/${props.name}-color.jpg`}
      alt={props.name}
    />
  </div>

MapImage.propTypes = {
  name: PropTypes.string.isRequired,
}

const MapsImages = () =>
  <div className={style.container}>
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
  </div>

export default MapsImages;
