import React, { PropTypes } from 'react'

const examplesData = {
  usa: [['code', 'value'], ['AL', 95], ['CA', 102], ['NY', 99]],
}

const example = (type) =>
  examplesData[type].map((item, index) =>
    <p key={index}>{item[0]}, {item[1]}</p>
  )

const CSVExample = (props) =>
  <div className="csv-example">
    {example(props.type)}
  </div>

CSVExample.propTypes = { type: PropTypes.string }
CSVExample.defaultProps = { type: 'usa' }

export default CSVExample
