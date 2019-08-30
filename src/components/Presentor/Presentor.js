import React, { Component } from 'react'
import StyleMaker from 'stylemaker'
import PropTypes from 'prop-types'
import { ScrollBasedPresentor } from './SubComponents/ScrollBasedPresentor'
import { SmoothPresentor } from './SubComponents/SmoothPresentor'
import './Presentor.css'

// StyleMaker(css)
export class Presentor extends Component {
  renderPresentor (settings) {
    if (settings.type) {
      switch (settings.type) {
        case 'banner':
          return (
            <div className='SNG__presentor--banner'>
              <div>{settings.bannerText}</div>
              <span />
              <div className='planet-shadow' />
              <div className='planet-glow'><span className='fa fa-infinity'/></div>
              <div>{settings.bannerSubText}</div>
            </div>
          )
        case 'scroll':
          return (
            <ScrollBasedPresentor
              time={settings.time}
              easing={settings.easing}
              direction={settings.direction}
            >
              {this.props.children || 'No Child'}
            </ScrollBasedPresentor>
          )
        case 'smooth':
          return (
            <SmoothPresentor show={this.props.show}>
              {this.props.children || 'No Child'}
            </SmoothPresentor>
          )
        case 'simple':
          if (settings.full) {
            return (
              <div className='SNG__presentor--simple-full'>
                {this.props.children || 'No Child Supplied'}
              </div>
            )
          } else {
            return (
              <div className='SNG__presentor--simple'>
                {this.props.children || 'No Child Supplied'}
              </div>
            )
          }
      }
    }
  }
  render () {
    const { settings, style } = this.props
    return (
      <div>
        {settings && (
          <div className='SNG__presentor' style={style}>
            {this.renderPresentor(settings)}
          </div>
        )}
        {!settings && (
          <div className='SNG__default--error'>
            <h1>Please provide valid settings props</h1>
          </div>
        )}
      </div>
    )
  }
}
