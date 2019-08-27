import React, { Component } from 'react'
import PropTypes from 'prop-types'
import StyleMaker from 'stylemaker'
import './Button.css'

const loader = () => {
  return <div className='SNG__loader' />
}
const check = doneMessage => {
  return (
    <div className='done'>
      <svg
        class='checkmark'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 52 52'
      >
        <circle
          className='checkmark__circle'
          cx='26'
          cy='26'
          r='25'
          fill='none'
        />
        <path
          className='checkmark__check'
          fill='none'
          d='M14.1 27.2l7.1 7.2 16.7-16.8'
        />
      </svg>
      {doneMessage && <span>{doneMessage}</span>}
    </div>
  )
}

let css = `
    .SNG__button-primary{
        border: none;
        border-radius: 4px;
        background: linear-gradient(to right, #5ea3fa, blue);
        color: white;
        font-size: 1rem;
        height: 40px;
        padding: 0 2rem;
        cursor: pointer;
        transition: all 0.2s ease;
    }
    .SNG__button-primary:hover{
        opacity: 0.8;
    }
`
// StyleMaker(css)
/**
 * A button with the touch of humanity.
 */
export class Button extends Component {
  getClass () {
    const {
      round,
      light,
      style,
      type,
      expandOnMobile,
      soft,
      done,
      busy,
      disabled,
    } = this.props
    let classString = 'SNG__button'
    if (round) classString += ' SNG__button--round'
    if (type === 'link') classString += ' SNG__button--link'
    if (type === 'primary') classString += ' SNG__button--primary'
    if (type === 'default') classString += ' SNG__button--default'
    if (type === 'alt') classString += ' SNG__button--alt'
    if (soft) classString += ' SNG__button--less-round'
    if (busy && !disabled) classString += ' SNG__button--busy'
    if (done) classString += ' SNG__button--done'
    if (disabled) classString += ' SNG__button--disabled'
    if (expandOnMobile) classString += ' SNG__button--expand-on-mobile'
    return classString
  }
  render () {
    const {
      done,
      busy,
      children,
      submit,
      doneMessage,
      style,
      icon,
      onClick,
      disabled,
      type,
      to
    } = this.props
    return type === 'link' ? (
      <a href={to} className={this.getClass()} style={style} onClick={onClick}>
        <span className='SNG__button--overlay' />
          {icon && (!done && !busy) && (
            <span className='SNG__button--icon'>{icon}</span>
          )}
          {done ? check(doneMessage) : (busy && !disabled) ? loader() : children}
      </a>
    ) : (
      <button
        className={this.getClass()}
        style={style}
        onClick={onClick}
        submit={submit ? 'submit' : 'button'}
      >
        <span className='SNG__button--overlay' />
          {icon && (!done && !busy) && (
            <span className='SNG__button--icon'>{icon}</span>
          )}
          {done ? check(doneMessage) : (busy && !disabled) ? loader() : children}
      </button>
    )
  }
}
Button.defaultProps = {
  type: 'default',
  label: 'Submit',
  labelColor: '',
  colors: ['purple', 'white', 'blue'],
  round: false,
  disabled: false,
  busy: false,
  done: false,
  doneMessage: 'Done',
  icon: null,
  children: 'No Label',
  expandOnMobile: true
}
Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  labelColor: PropTypes.string,
  colors: PropTypes.array,
  busy: PropTypes.bool,
  done: PropTypes.bool,
  doneMessage: PropTypes.string,
  round: PropTypes.bool,
  disabled: PropTypes.bool,
  icon: PropTypes.node,
  expandOnMobile: PropTypes.bool
}
