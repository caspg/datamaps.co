import React, { PropTypes } from 'react'

import mapConfig from '@src/config/maps'
import { grey100, grey300 } from '@src/styles/colors'

const example = (type) =>
  mapConfig.configs[type].csvExample.map((item, index) =>
    <p key={index}>{item[0]}, {item[1]}</p>
  )

const CSVExample = (props) =>
  <div className="CSVExample">
    {example(props.type)}

    <style jsx>{`
      .CSVExample {
        margin-top: 20px;
        background-color: ${grey100};
        padding: 5px 20px;
        border: 1px solid ${grey300};
      }
    `}</style>
  </div>

CSVExample.propTypes = { type: PropTypes.string }
CSVExample.defaultProps = { type: 'usa' }

export default CSVExample
