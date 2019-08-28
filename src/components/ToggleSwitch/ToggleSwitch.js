import React, { Component } from 'react'


class ToggleSwitch extends Component {
  render () {
    const { on, onClick } = this.props
    return (
      <button
        onClick={onClick}
        className={on ? 'SNG__toggle SNG__toggle--active' : 'SNG__toggle'}
      >
        <div />
      </button>
    )
  }
}

export default ToggleSwitch
