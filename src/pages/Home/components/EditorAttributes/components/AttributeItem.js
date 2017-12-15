import React from 'react'
import PropTypes from 'prop-types'

const AttributeItem = (props) =>
  <div className="col-xs-12 col-sm-4">
    <div className="AttributeItem__icon">
      <img
        className="AttributeItem__image"
        src={`/static/images/icons/${props.iconName}`}
        alt={props.iconName}
      />
      <p className="AttributeItem__text">{props.text}</p>
    </div>

    <style jsx>{`
      .AttributeItem__icon {
        margin-top: 40px;
      }

      .AttributeItem__image {
        display: inline-block;
        width: 35px;
        height: auto;
        margin-right: 10px;
        vertical-align: middle;
      }

      .AttributeItem__text {
        margin-top: -10px;
        margin-bottom: 0;
        display: inline-block;
      }
    `}</style>
  </div>

AttributeItem.propTypes = {
  iconName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default AttributeItem
