import React, { PropTypes } from 'react'

import { mapEditorLayoutZIndex } from '@src/styles/variables';
import { grey300 } from '@src/styles/colors';
import Footer from '@src/components/Footer'

import MapContainer from '../../MapContainer'

const editorBodyWidth = '400px';

function MapEditorLayout(props) {
  return (
    <div className="MapEditorLayout">
      <div className="MapEditorLayout__map-column">
        {props.isDataReady && <MapContainer />}
      </div>

      <div className="MapEditorLayout__body-column">
        {props.isDataReady && props.children}

        <Footer>
          <i>
            Color schemes from <a style={{ color: 'inherit' }} href="http://www.colorbrewer.org" title="colorbrewer" target="_blank">colorbrewer.org</a>
          </i>
        </Footer>
      </div>

      <style jsx>{`
        .MapEditorLayout {
          margin-top: 100px;
          position: relative;
          z-index: ${mapEditorLayoutZIndex};
        }

        .MapEditorLayout__map-column {
          height: 600px;
          padding-bottom: 20px;
          overflow: scroll;
        }

        @media(min-width: 950px) {
          .MapEditorLayout {
            margin-top: 102px;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            overflow: hidden;
          }

          .MapEditorLayout__map-column {
            margin-right: ${editorBodyWidth};
            height: 100%;
            border-bottom: 1px solid ${grey300};
          }

          .MapEditorLayout__body-column {
            width: ${editorBodyWidth};
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            border-left: 1px solid ${grey300};
            overflow-y: scroll;
            overflow-x: hidden;
          }
        }
      `}</style>
    </div>
  )
}

MapEditorLayout.propTypes = {
  isDataReady: PropTypes.bool.isRequired,

  children: PropTypes.node,
}

export default MapEditorLayout
