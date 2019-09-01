import React, { Component } from 'react'
import StyleMaker from 'stylemaker'
import PropTypes from 'prop-types'
import { ScrollBasedPresentor } from './SubComponents/ScrollBasedPresentor'
import { SmoothPresentor } from './SubComponents/SmoothPresentor'
import StickyContainer from './SubComponents/StickyContainer'

import './Presentor.css'


class Stars extends Component {
  shouldComponentUpdate() {
    return false
  }
  render () {
    let i = 0
    let stars = []
    let widthArray = [1, 3, 4]
    while (i < 100) {
      stars.push(i)
      i++
    }
    return (
      <div className='SNG__stars'>
        {stars.map((s, k) => {
          let width = widthArray[Math.floor(Math.random() * widthArray.length)]
          let top = Math.random() * 100 + 1
          let left = Math.random() * 100 + 1
          return (
            <span
              key={k}
              style={{
                animationDuration: (((Math.random() * 30)) + 1)+ 's',
                opacity: Math.random(),
                width: width,
                height: width,
                left: left + '%',
                top: top + '%'
              }}
            />
          )
        })}
      </div>
    )
  }
}

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
              <Stars />
              <div className='planet-shadow' />
              <div className='planet-glow'>
                <span className='fa fa-infinity' />
              </div>
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
        case 'sticky':
          return (
            <StickyContainer height={settings.stickHeight || '200vh'}>
              {this.props.children || 'No Child'}
            </StickyContainer>
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
