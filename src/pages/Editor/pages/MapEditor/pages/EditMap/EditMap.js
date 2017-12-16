import React from 'react'
import PropTypes from 'prop-types'

import { Link } from '@routes'

import MapEditor from './containers/MapEditor'

EditMap.propTypes = {
  mapType: PropTypes.string.isRequired,
}

function EditMap(props) {
  return (
    <div className="EditMap">
      <div className="EditMap__wrapper">
        <Link prefetch route={`/editor/${props.mapType}/upload`}>
          <a className="EditMap__link">
            Upload new data
          </a>
        </Link>
        <Link prefetch route={`/editor/${props.mapType}/edit-data`}>
          <a className="EditMap__link">
            Edit data
          </a>
        </Link>

        <MapEditor />
      </div>

      <style jsx>{`
        .EditMap {
          min-height: 100%;
          margin-bottom: -120px; /* Height of Footer and footer's margin */
        }

        .EditMap__wrapper {
          padding: 30px;
        }

        .EditMap__link {
          margin-right: 20px;
        }
      `}</style>
    </div>
  )
}

export default EditMap
