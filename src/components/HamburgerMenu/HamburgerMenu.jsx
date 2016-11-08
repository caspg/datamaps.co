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

    this.handleClickOutside = this.handleClickOutside.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    window.addEventListener('click', this.handleClickOutside)
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleClickOutside)
  }

  handleClickOutside(event) {
    if (!this.state.shouldRenderLinks) {
      return
    }

    const shouldClose = !this.linksContainer.contains(event.target) &&
      !this.hamburgerButton.contains(event.target)

    if (shouldClose) {
      this.setState({ shouldRenderLinks: false })
    }
  }

  handleClick() {
    this.setState({
      shouldRenderLinks: !this.state.shouldRenderLinks,
    })
  }

  renderMenuLinks() {
    return (
      <div
        ref={(e) => { this.linksContainer = e }}
        className={style['links-container']}
      >
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

        {this.props.children}
      </div>
    )
  }

  render() {
    return (
      <div className={style.container}>
        <button
          onClick={this.handleClick}
          className={`${style['hamburger-menu']} show-xs`}
          ref={(e) => { this.hamburgerButton = e }}
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
  children: PropTypes.element.isRequired,
}

export default HamburgerMenu
