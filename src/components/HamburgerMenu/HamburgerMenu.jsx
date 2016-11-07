import React, { PropTypes } from 'react'

import style from './HamburgerMenu.css'

const HamburgerMenu = (props) => {
  return (
    <button className={`${style['hamburger-menu']} show-xs`}>
      <div className={style['hamburger-slice']} />
      <div className={style['hamburger-slice']} />
      <div className={style['hamburger-slice']} />
    </button>
  )
}

HamburgerMenu.propTypes = {

}

export default HamburgerMenu
