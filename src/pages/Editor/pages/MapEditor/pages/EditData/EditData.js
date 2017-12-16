import React from 'react'
import PropTypes from 'prop-types'

import { Link } from '@routes'
import DataTableContainer from './containers/DataTableContainer'

const EditDataView = (props) =>
  <div className="EditDataView">
      <Link prefetch route={`/editor/${props.mapType}/edit-map`}>
        <a className="button EditDataView__link">
          edit map style
        </a>
      </Link>
      <Link prefetch route={`/editor/${props.mapType}/upload`}>
        <a className="EditDataView__link">
          upload new data
        </a>
      </Link>

      <DataTableContainer />

      <style jsx>{`
        .EditDataView {
          margin-top: 30px;
        }

        .EditDataView__link {
          margin-left: 15px;
        }
      `}</style>
   </div>

EditDataView.propTypes = {
  mapType: PropTypes.string.isRequired,
}

export default EditDataView
