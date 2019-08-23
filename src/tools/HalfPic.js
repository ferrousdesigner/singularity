import React, { Component } from 'react'
import StyleMaker from 'stylemaker'

let style = `
.SNG__half--pic {
    position: absolute;
    z-index: 4;
    top: 50%;
    transform: translateY(-50%) scale(4);
    pointer-events: none;
    width: 20vmin;
    height: 20vmin;
    display: flex;
    justify-content: center;
    align-items: center;
    // border-radius: 50%;
    
} 
.SNG__half--pic:before {
    content: "";
    position: absolute;
    background: -webkit-linear-gradient(transparent, transparent),
    url(https://assets.pcmag.com/media/images/457693-interstellar-black-hole.jpg?thumb=y&width=810&height=456)
      repeat;
    left: -10%;
    top: -10%;
    width: 120%;
    height: 120%;
    filter: blur(2rem);
    background-position: right;
    z-index: -5;
    border-radius: 50%;
    animation: moveBackground 3000s linear infinite;
}
.SNG__half--pic:after {
    content: "";
    position: absolute;
    background: black;
    left: -10%;
    top: -10%;
    width: 120%;
    height: 120%;
    z-index: -5;
    border-radius: 50%;
}
@media only screen and (max-width: 480px) {
  .SNG__half--pic {
      display: none;
  } 
}

`

class HalfPic extends Component {
  componentWillMount () {
      StyleMaker(style)
  }
  render () {
    const { right, left, children } = this.props
    return (
      <div
        className='SNG__half--pic'
        style={{ left: left ? '0px' : 'unset', right: right ? '0' : 'unset' }}
      >
        {children}
      </div>
    )
  }
}

export default HalfPic

