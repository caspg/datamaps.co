import React, { Component, PropTypes } from 'react'
import routes from 'config/routes'
import Link from 'next/link'

import { greyDark, grey600, grey300, grey100 } from '@src/styles/colors';

class HamburgerMenu extends Component {
  static propTypes = {
    children: PropTypes.element,
    shadowColor: PropTypes.oneOf([
      'dark',
      'grey',
    ]),
  }

  static defaultProps = {
    shadowColor: 'grey',
  }

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
      <li key={i} className="HamburgerMenu__list-item">
        <Link href={link.to}>
          <a>
            {link.text}
          </a>
        </Link>
      </li>
    )

    const className = `
      HamburgerMenu__links-container HamburgerMenu__links-container-${this.props.shadowColor}
    `

    return (
      <div
        ref={(e) => { this.linksContainer = e }}
        className={className}
      >
        <ul className="HamburgerMenu__unordered-list">
          {renderLinks()}
        </ul>

        {this.props.children}
      </div>
    )
  }

  render() {
    return (
      <div className="HamburgerMenu__container">
        <button
          onClick={this.handleClick}
          className="hamburger-menu show-sm"
          ref={(e) => { this.hamburgerButton = e }}
        >
          <div className="hamburger-slice" />
          <div className="hamburger-slice" />
          <div className="hamburger-slice" />
        </button>

        {this.state.shouldRenderLinks && this.renderMenuLinks()}

        <style jsx>{`
          .HamburgerMenu__container {
            margin-bottom: -6px;
          }

          .hamburger-menu {
            display: inline-block;
            padding: 0 10px;
            margin: 0;
            border-color: ${grey600};
          }

          .hamburger-menu:hover {
            border-color: ${greyDark};
          }

          .hamburger-slice {
            margin-bottom: 6px;
            width: 24px;
            height: 2px;
            background-color: ${grey600};
            border-radius: 5px;
            position: relative;
          }

          .hamburger-menu:hover .hamburger-slice {
            background-color: ${greyDark};
          }

          .hamburger-slice:last-of-type {
            margin-bottom: 0;
          }

          :global(.HamburgerMenu__list-item) {
            margin: 0;
            padding-right: 20px;
            border-bottom: 1px solid ${grey300};
          }

          :global(.HamburgerMenu__list-item a) {
            display: inline-block;
            width: 100%;
            padding: 15px 0;

            color: ${grey600};
            text-decoration: none;
          }

          :global(.HamburgerMenu__list-item a:hover) {
            color: ${greyDark};
          }

          :global(.HamburgerMenu__unordered-list) {
            list-style-type: none;
            margin: 0;
            padding: 0;
          }

          :global(.HamburgerMenu__links-container) {
            position: absolute;
            top: 100%;
            right: 0;
            min-width: 250px;
            background-color: ${grey100};
            z-index: 10;
            border-top: 1px solid ${grey300};
          }

          :global(.HamburgerMenu__links-container-dark) {
            box-shadow: -5px 5px 10px ${greyDark};
          }

          :global(.HamburgerMenu__links-container-grey) {
            box-shadow: -5px 5px 10px ${grey300};
          }
        `}</style>
      </div>
    )
  }
}

export default HamburgerMenu
