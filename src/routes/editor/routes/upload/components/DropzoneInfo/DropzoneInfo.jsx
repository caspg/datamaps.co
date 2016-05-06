import React from 'react'

import style from './DropzoneInfo.css'
import CSVExample from '../CSVExample/CSVExample'

const DropzoneInfo = () =>
  <div className={style.container}>
    <p>CSV file has to include two columns:</p>
    <ul className={style.list}>
      <li className={style['list-item']}>code (state code)</li>
      <li className={style['list-item']}>value</li>
    </ul>

    <a href="https://placebear.com/300/200" download="bear">example csv</a>

    <CSVExample />
  </div>

export default DropzoneInfo
