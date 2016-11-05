import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import TypistWrapper from '../TypistWrapper/TypistWrapper'

import maps from 'config/maps'
import routes from 'config/routes'
import style from './Header.css'

const currentMaps = () =>
  maps.types.map(i => i.displayName)

const HeaderText = () => (
  <div className={style['title-container']}>
    <h1 className={style.title}>
      Create your free data map of{' '}

      <TypistWrapper
        className={style.typist}
        words={currentMaps()}
      />
    </h1>

    <Link to={routes.editor} className={`button ${style.button}`}>
      go to the editor
    </Link>
  </div>
)

const HeaderImage = () => (
  <div className={style['image-container']}>
    <img className={style.image} src="/images/editor-screen.png" alt="datamaps-editor" />
  </div>
)

const Header = (props) =>
  <header>
    {props.children}

    <div className={`row middle-xs ${style['header-content']}`}>

      <div className="col-sm-6 col-xs-12">
        <div className="row end-sm center-xs">
            <div className="row center-sm">
              <HeaderText />
            </div>
        </div>
      </div>

      <div className="col-sm-6 col-xs-12">
        <div className="row start-sm center-xs">
          <HeaderImage />
        </div>
      </div>

    </div>
  </header>

Header.propTypes = {
  children: PropTypes.object.isRequired,
}

export default Header;
