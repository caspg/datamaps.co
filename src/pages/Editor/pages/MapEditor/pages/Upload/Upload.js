import React from 'react'
import PropTypes from 'prop-types'

import { Link } from '@routes'

import DropzoneBox from './components/DropzoneBox'
import DropzoneInfo from './components/DropzoneInfo'

const Upload = (props) => {
  const { mapType } = props

  return (
    <div>
      <div className="Upload">
        <Link prefetch route={`/editor/${mapType}/edit-data`}>
          <a className="Upload__empty-table-btn">
            go to the data table
          </a>
        </Link>

        <DropzoneBox mapType={mapType} />
      </div>

      <DropzoneInfo mapType={mapType} />

      <style jsx>{`
        .Upload {
          padding: 0 50px;
          margin: 30px 0;
        }

        .Upload__empty-table-btn {
          margin-top: 30px;
        }
      `}</style>
    </div>
  )
}

Upload.propTypes = {
  mapType: PropTypes.string.isRequired,
}

export default Upload
