import React, { PropTypes } from 'react'

import style from './ShowcaseItem.css'

const ShowcaseItem = (props) =>
  <div className={style.container}>
    <img className={style.image} src={`/images/showcase/${props.fileName}`} alt={props.title}/>

    <div className={style.text}>
      <p className={style.description}>{props.description}</p>
      <p className={style.source}>
        <a href={props.source}>{props.source}</a>
      </p>
    </div>
  </div>

ShowcaseItem.propTypes = {}

export default ShowcaseItem
