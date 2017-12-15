import React from 'react'
import PropTypes from 'prop-types'

import { purpleGradient } from '@src/styles/colors';

import HeaderText from './components/HeaderText'
import HeaderImage from './components/HeaderImage'

const Header = (props) =>
  <header>
    {props.children}

    <div className="row middle-xs header-content">

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

    <style jsx>{`
      .header-content {
        min-height: 500px;
        padding: 20px;
        ${purpleGradient}
      }
    `}</style>
  </header>

Header.propTypes = {
  children: PropTypes.object.isRequired,
}

export default Header;
