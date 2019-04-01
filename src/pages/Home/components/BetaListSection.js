import React from 'react'

import { grey100 } from '@src/styles/colors'
import MailChimpSignup from '@src/components/MailChimpSignup'

export function BetaListSection() {
  return (
    <div className="BetaListSection">
      <div className="row center-xs">
        <div className="col-xs-12">
          <h3 id="beta-list">
            Subscribe to receive early access invite to the new platform
          </h3>
        </div>

        <div className="col-xs-12">
          <div className="BetaListSection__form-container">
            <MailChimpSignup />
          </div>
        </div>
      </div>

      <style jsx>{`
        .BetaListSection {
          padding-top: 100px;
          padding-bottom: 80px;
          background-color: ${grey100};
        }

        .BetaListSection__form-container {
          margin-top: 50px;
        }
      `}</style>
    </div>
  )
}
