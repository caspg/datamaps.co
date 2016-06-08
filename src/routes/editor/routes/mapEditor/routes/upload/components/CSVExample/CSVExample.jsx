import React, { PropTypes } from 'react'

import style from './CSVExample.css'

const examplesData = {
  usa: [['code', 'value'], ['AL', 95], ['CA', 102], ['NY', 99]],
  world: [['code', 'value'], ['POL', 103], ['GBR', 101], ['USA', 105]],
  china: [['code', 'value'], ['GX', 104], ['SA', 101], ['JX', 106]],
}

const example = (type) =>
  examplesData[type].map((item, index) =>
    <p key={index}>{item[0]}, {item[1]}</p>
  )

const CSVExample = (props) =>
  <div className={style['csv-example']}>
    {example(props.type)}
  </div>

CSVExample.propTypes = { type: PropTypes.string }
CSVExample.defaultProps = { type: 'usa' }

export default CSVExample
