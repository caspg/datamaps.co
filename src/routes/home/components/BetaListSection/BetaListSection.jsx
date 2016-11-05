import React from 'react'

import style from './BetaListSection.css'
import MailChimpSignup from '../MailChimpSignup'

const BetaListSection = () => (
  <div className={style.container}>
    <div className="row center-xs">
      <div className="col-xs-12">
        <h3>
          Subscribe to receive early access invite to the new platform
        </h3>
      </div>

      <div className="col-xs-12">
        <div className={style['form-container']}>
          <MailChimpSignup />
        </div>
      </div>
    </div>

  </div>
)

export default BetaListSection
