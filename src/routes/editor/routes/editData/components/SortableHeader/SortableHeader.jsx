import { Map } from 'immutable'
import React, { PropTypes } from 'react'

import style from './SortableHeader.css'

const sortArrowConstructor = (direction) => {
  const className = direction === 'ASC' ? style['arrow-asc'] : style['arrow-desc']
  return <span className={className} />
}

const SortableHeader = (props) => {
  const { sortState, toggleDirection, sortKey } = props
  const sortArrow = (sortState.get('key') === sortKey) ?
    sortArrowConstructor(sortState.get('direction')) : null

  return (
    <th
      className={style.cell}
      onClick={() => toggleDirection(sortKey)}
    >
      <h6 className={style.label}>{props.label}</h6>
      {sortArrow}
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
