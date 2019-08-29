import React, { Component } from 'react'
import StyleMaker from 'stylemaker'

let css = `
.zoomer-default {
    transition: all 0.2s ease;
    transform: scale(1);
    margin:0;
}

.zoomer-default.zoomed {
    transform: scale(3);
    margin: 12% 0 10% 0;
}

@media only screen and (max-width: 480px) {
    .zoomer-default.zoomed {
        transform: scale(1);
        margin: 0;
    }
    .zoomer-trigger {
        display: none;
    }
}
`

class Zoomer extends Component {
  componentDidMount () {
    StyleMaker(css)
  }
  getClass (zoomed) {
    let cS = 'zoomer-default'
    if (zoomed) cS += ' zoomed'
    return cS
  }
  render () {
    const { zoomed, children } = this.props
    return (
      <div
        className={this.getClass(zoomed)}
      >
        {children}
      </div>
    )
  }
}

export default Zoomer
