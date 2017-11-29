import React, { PropTypes } from 'react'

import style from './AttributeItem.css'

const AttributeItem = (props) =>
  <div className="col-xs-12 col-sm-4">
    <div className={style.icon}>
      <img className={style.image} src={`/images/icons/${props.iconName}`} alt={props.iconName} />
      <p className={style.text}>{props.text}</p>
    </div>
  </div>

AttributeItem.propTypes = {
  iconName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default AttributeItem
