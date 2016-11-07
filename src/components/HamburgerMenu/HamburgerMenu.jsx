import React, { Component, PropTypes } from 'react'
import routes from 'config/routes'
import { Link } from 'react-router'

import style from './HamburgerMenu.css'

class HamburgerMenu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      shouldRenderLinks: false,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      shouldRenderLinks: !this.state.shouldRenderLinks,
    })
  }

  renderMenuLinks() {
    return (
      <div className={style['links-container']}>
        <ul className={style['unordered-list']}>
          <li className={style['list-item']}>
            <Link to={routes.editor} className={style.link}>Editor</Link>
          </li>
          <li className={style['list-item']}>
            <Link to={routes.contact} className={style.link}>Contact</Link>
          </li>
          <li className={style['list-item']}>
            <Link to={routes.showcase} className={style.link}>Showcase</Link>
          </li>
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className={style.container}>
        <button
          onClick={this.handleClick}
          className={`${style['hamburger-menu']} show-xs`}
        >
          <div className={style['hamburger-slice']} />
          <div className={style['hamburger-slice']} />
          <div className={style['hamburger-slice']} />
        </button>

        {this.state.shouldRenderLinks && this.renderMenuLinks()}
      </div>
    )
  }
}

HamburgerMenu.propTypes = {

}

export default HamburgerMenu
