import React, { PropTypes } from 'react';

const sortArrowConstructor = (direction) => {
  const sortDirection = direction === 'ASC' ? 'asc' : 'desc'
  return <span className={`sort-arrow ${sortDirection}`} />
}

const SortableHeader = (props) => {
  const { sortState, toggleDirection, sortKey } = props
  const sortArrow = (sortState.key === sortKey) ? sortArrowConstructor(sortState.direction) : null

  return (
    <th onClick={() => toggleDirection(sortKey)}>
      <h6>{props.label}</h6>
      {sortArrow}
    </th>
  );
}

SortableHeader.propTypes = {
  label: PropTypes.string.isRequired,
  sortKey: PropTypes.string.isRequired,
  toggleDirection: PropTypes.func.isRequired,
  sortState: PropTypes.object.isRequired,
}

export default SortableHeader
