import React from 'react'

import style from './Header.css'
import Navbar from 'components/Navbar/Navbar'
import SaveButtons from '../SaveButtons/SaveButtons'
import MapSelect from '../MapSelect/MapSelect'

const Header = () =>
  <div>
    <div className={style['navbar-wrapper']}>
      <Navbar textColor="grey" />
    </div>

    <div className={'row middle-xs end-xs ' + style.actionbar}>
      <MapSelect />
      <SaveButtons />
    </div>
  </div>

export default Header
