import React from 'react'
import Link from 'next/link'

import maps from '@src/config/maps'
import { greyDark, orange300, orange400, darkColor } from 'styles/colors';
import routes from 'config/routes'

import TypistWrapper from './TypistWrapper'

const currentMaps = () =>
  maps.types.map(i => i.displayName)

const HeaderText = () => (
  <div className="title-container">
    <h1 className="title">
      Create your free data map of{' '}

      <div className="typist">
        <TypistWrapper words={currentMaps()} />
      </div>
    </h1>

    <Link href={routes.editor}>
      <a className="button">go to the editor</a>
    </Link>

    <style jsx>{`
      .title-container {
        max-width: 500px;
        margin-right: 0;
        margin-top: 45px;
        margin-bottom: 50px;
      }

      .title {
        padding: 15px;
        color: white;
        line-height: 1.2em;
        height: 3.6em;
        text-align: left;
        margin-bottom: 10px;
      }

      .typist {
        display: inline-block;
      }

      .button {
        margin: 20px 0;
        margin-top: 10px;
        background: ${orange300};
        color: ${darkColor};
        border-radius: 4px;
        border-width: 0;
        width: 200px;
        box-shadow: 2px 6px 11px 0px ${greyDark};
      }

      .button:hover {
        background: ${orange400};
      }

      @media only screen and (min-width: 48em) {
        .title-container {
          margin-right: 50px;
          margin-top: 0;
          margin-bottom: 0;
        }
      }
    `}</style>
  </div>
)

export default HeaderText;
