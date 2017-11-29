import React from 'react'
import { Link } from 'react-router'

import style from './ActionButton.css'

const ActionButton = () =>
  <div className="row center-xs">
    <Link to="/editor" className={'button ' + style.button}>
      Go to the editor
    </Link>
  </div>

export default ActionButton;
