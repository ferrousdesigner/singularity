import React, { Component } from 'react'
import StyleMaker from 'stylemaker'
import PropTypes from 'prop-types'
import './Nav.css'
import { Button } from '../Button'
import { Link } from 'react-router-dom'
// console.log(RRD, '>>>')
// StyleMaker(css)
export class Nav extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
  }

  renderLinks (links) {
    return links.map(({ to, label, target }, key) => {
      const isActive = this.isLinkActive(to)
      return (
        <Link to={to} target={target} className={isActive ? 'active' : ''}>
          {label}
        </Link>
      )
    })
  }
  isLinkActive (path) {
    return window.location.pathname === path
  }
  handleToggle () {
    this.setState({ open: !this.state.open })
  }
  render () {
    let logoSrc = ''
    let brandName = 'Singularity'
    let logoAlt = 'SNG_logo'
    let { links, primaryLink, brand, logo } = this.props
    const { open } = this.state
    const getClass = () => {
      let cS = 'SNG__nav'
      return cS
    }
    const primaryAction = () => (
      <Button
        soft
        link
        icon={primaryLink.icon}
        type='primary'
        to={primaryLink.to}
      >
        {primaryLink.label}
      </Button>
    )
    return (
      <div className={getClass()}>
        <nav className={open ? 'SNG__nav--drawer-open' : ''}>
          {false && <div className='SNG__nav--logo-mobile'>{logo}</div>}
          <button
            className='SNG__nav--open-button'
            onClick={() => this.handleToggle()}
          >
            <span className='fas fa-bars' />
          </button>
          <div className='SNG__nav--logo'>
            <a href={'/'}>
              {logoSrc.length > 0 ? <img src={logoSrc} alt={logoAlt} /> : brand}
            </a>
          </div>
          <div className='SNG__nav--links'>
            {this.renderLinks(links)}
            {primaryLink && (
              <div className='SNG__nav--links-primary-action-mobile'>
                {primaryAction()}
              </div>
            )}
            <button
              className='SNG__nav--close-button'
              onClick={() => this.handleToggle()}
            >
              <span className='fas fa-times' />
            </button>
            {brand && <div className='SNG__nav--links-brand'>{brand}</div>}
          </div>
          {primaryLink && (
            <div className='SNG__nav--links-primary-action-desktop'>
              {primaryAction()}
            </div>
          )}
        </nav>
      </div>
    )
  }
}
