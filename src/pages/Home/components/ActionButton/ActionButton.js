import React from 'react'
import Link from 'next/link'

const ActionButton = () =>
  <div className="row center-xs">
    <Link prefetch href="/editor">
      <a className="button ActionButton__button">
        Go to the editor
      </a>
    </Link>

    <style jsx>{`
      .ActionButton__button {
        margin-top: 70px;
        margin-bottom: 70px;
        min-width: 250px;
        height: 45px;
        line-height: 45px;
        font-size: 12px;
      }
    `}</style>
  </div>

export default ActionButton;
