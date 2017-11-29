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

  componentWillReceiveProps() {
    this.setState({ shouldRenderLinks: false })
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
    const links = [
      { to: routes.editor, text: 'Editor' },
      { to: routes.contact, text: 'Contact' },
      { to: routes.showcase, text: 'Showcase' },
    ]

    const renderLinks = () => links.map((link, i) =>
      <li key={i} className={style['list-item']}>
        <Link to={link.to} className={style.link}>{link.text}</Link>
      </li>
    )


    return (
      <div
        ref={(e) => { this.linksContainer = e }}
        className={style[`links-container-${this.props.shadowColor}`]}
      >
        <ul className={style['unordered-list']}>
          {renderLinks()}
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
          className={`${style['hamburger-menu']} show-sm`}
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

HamburgerMenu.defaultProps = {
  shadowColor: 'grey',
}

HamburgerMenu.propTypes = {
  children: PropTypes.element,
  shadowColor: PropTypes.string.isRequired,
}

export default HamburgerMenu
