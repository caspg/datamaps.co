import React from 'react'

import maps from 'config/maps'
import MapThumb from '../MapThumb/MapThumb'

const EditorInitView = () => {
  const mapThumbs = maps.types.map((type, i) =>
    <MapThumb key={i} code={type.code} displayName={type.displayName} />
  )

  return (
    <div>
      {mapThumbs}
    </div>
  )
}

export default EditorInitView
