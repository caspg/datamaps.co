import React from 'react'

import style from './EditorAttributes.css'
import AttributeItem from '../AttributeItem/AttributeItem'

const EditorAttributes = () =>
  <div className="row center-xs">
    <div className="col-xs-10">
      <div className={style.container}>
        <div className="row around-xs">
          <AttributeItem
            iconName="sheet.svg"
            text="upload csv data"
          />
          <AttributeItem
            iconName="mixer.svg"
            text="customize style"
          />
          <AttributeItem
            iconName="arrows.svg"
            text="save png"
          />
        </div>
      </div>
    </div>
  </div>

export default EditorAttributes
