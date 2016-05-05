import React from 'react'

import style from './Header.css'
import Navbar from 'components/Navbar/Navbar'
import SaveButtons from '../SaveButtons/SaveButtons'

const Header = () =>
  <div>
    <div className={style['navbar-wrapper']}>
      <Navbar textColor="grey" />
    </div>

    <div className={'row middle-xs end-xs ' + style.actionbar}>
      <SaveButtons />
    </div>
  </div>

export default Header
