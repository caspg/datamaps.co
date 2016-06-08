import React, { PropTypes } from 'react'

import style from './CSVExample.css'
import mapConfig from 'config/maps'

const example = (type) =>
  mapConfig.configs[type].csvExample.map((item, index) =>
    <p key={index}>{item[0]}, {item[1]}</p>
  )

const CSVExample = (props) =>
  <div className={style['csv-example']}>
    {example(props.type)}
  </div>

CSVExample.propTypes = { type: PropTypes.string }
CSVExample.defaultProps = { type: 'usa' }

export default CSVExample
