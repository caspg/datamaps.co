import React from 'react'

import style from './HamburgerSaveButtons.css'

const HamburgerSaveButtons = () =>
  <div className={style.container}>
    <button
      className={`button ${style['save-btn']}`}
    >
      Save svg
    </button>

    <button
      className={`button ${style['save-btn']}`}
    >
      Save png
    </button>
  </div>

export default HamburgerSaveButtons
