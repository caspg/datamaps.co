import React from 'react'
import PropTypes from 'prop-types'
import { Map } from 'immutable'

import { grey300, darkColor } from '@src/styles/colors'

const arrowH = '5px'

const sortArrowConstructor = (direction) => {
  const className = direction === 'ASC'
    ? 'SortableHeader__arrow-asc'
    : 'SortableHeader__arrow-desc'

  return <span className={className} />
}

const SortableHeader = (props) => {
  const { sortState, toggleDirection, sortKey } = props
  const sortArrow = (sortState.get('key') === sortKey) ?
    sortArrowConstructor(sortState.get('direction')) : null

  return (
    <th
      className="SortableHeader__cell"
      onClick={() => toggleDirection(sortKey)}
    >
      <h6 className="SortableHeader__label">{props.label}</h6>
      {sortArrow}

      <style jsx>{`
        .SortableHeader__cell {
          padding: 10px 0;
          border-top: 1px solid ${grey300};
          border-right: 1px solid ${grey300};
          cursor: pointer;
        }

        .SortableHeader__label {
          margin-bottom: 0;
          display: inline-block;
        }

        .SortableHeader__label:first-of-type {
          padding-left: 15px;
        }
      `}</style>

      <style jsx global>{`
        .SortableHeader__arrow-asc {
          display: inline-block;
          vertical-align: middle;
          margin-bottom: ${arrowH} / 2;
          margin-left: 10px;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: ${arrowH} ${arrowH} 0 ${arrowH};
          border-color: ${darkColor} transparent transparent transparent;
        }

        .SortableHeader__arrow-desc {
          display: inline-block;
          vertical-align: middle;
          margin-bottom: ${arrowH} / 2;
          margin-left: 10px;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 0 ${arrowH} ${arrowH} ${arrowH};
          border-color: transparent transparent ${darkColor} transparent;
        }
      `}</style>
    </th>
  )
}

SortableHeader.propTypes = {
  label: PropTypes.string.isRequired,
  sortKey: PropTypes.string.isRequired,
  toggleDirection: PropTypes.func.isRequired,
  sortState: PropTypes.instanceOf(Map).isRequired,
}

export default SortableHeader
