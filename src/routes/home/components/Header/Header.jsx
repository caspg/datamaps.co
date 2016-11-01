import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import routes from 'config/routes'
import style from './Header.css'

const Header = (props) =>
  <header>
    {props.children}

    <div className={`row middle-sm center-xs ${style['header-content']}`}>

      <div className="col-sm-6 col-xs-12">
        <div className="row end-sm center-xs ">


          <div className={style['title-container']}>
            <h1 className={style.title}>
              Create your free data map of world
            </h1>

            <Link to={routes.editor} className={`button ${style.button}`}>
              go to the editor
            </Link>
          </div>

        </div>
      </div>

      <div className="col-sm-6 col-xs-12">
        <img className={style.image} src="/images/editor-screen.png" alt="datamaps-editor" />
      </div>

    </div>
  </header>

Header.propTypes = {
  children: PropTypes.object.isRequired,
}

export default Header;
