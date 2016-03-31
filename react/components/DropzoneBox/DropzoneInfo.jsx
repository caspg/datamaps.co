import React from 'react'

import CSVExample from './CSVExample'

const DropzoneInfo = () =>
  <div>
    <p>CSV file has to includes two columns:</p>
    <ul>
      <li>code (state code)</li>
      <li>value</li>
    </ul>

    <a href="https://placebear.com/300/200" download="bear">example csv</a>

    <CSVExample />
  </div>

export default DropzoneInfo
