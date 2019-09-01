import React, { Component } from 'react'

class StickyContainer extends Component {
  render () {
      const { height, children } = this.props
    const getClass = () => {
        let cS = 'SNG__sticky'
        return cS
    }
    return (
      <div className={getClass()} style={{height: height}}>
        <div className='SNG__sticky--children'>{children}</div>
      </div>
    )
  }
}

export default StickyContainer
