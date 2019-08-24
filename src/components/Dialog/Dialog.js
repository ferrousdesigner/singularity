import React, { Fragment, Component } from 'react'
import ReactDOM from 'react-dom'
import './Dialog.css'
import { Button } from '../Button'

class MainDialog extends Component {
  constructor (props) {
    super(props)
    this.state = {
      animationClass: '',
      open: false,
      read: false
    }
    this.initialBodyOverflow = ''
  }

  componentWillReceiveProps (newProps) {
    console.log(newProps)
    const { open } = newProps
    if (!this.props.open && open) {
      if (this.initialBodyOverflow === '') {
        this.initialBodyOverflow = document.querySelector(
          'html'
        ).style.overflowY
        document.querySelector('html').style.overflowY = 'hidden'
      }
      this.setState({ rendered: true, animationClass: 'dialog-show ' })
    } else if (this.props.open && !open) {
      document.querySelector('html').style.overflowY = this.initialBodyOverflow
      this.setState(
        { animationClass: this.state.animationClass + 'dialog-hide' },
        () =>
          setTimeout(
            () => this.setState({ rendered: false, animationClass: '' }),
            500
          )
      )
    }
  }
  getClass () {
    let cS = 'SNG__dialog '
    return cS + this.state.animationClass
  }
  handleScroll (e) {
     let { read } = this.state
    if (e.target.offsetHeight + e.target.scrollTop >= e.target.scrollHeight && !read) {
     this.setState({
        read: true
     })
    }
  }
  render () {
    const {
      title,
      onClose,
      children,
      showCloseButton,
      enableAfterRead = true,
      primaryAction = {
        label: 'Agree',
        onClick: () => alert()
      },
      secondaryAction = {
        label: 'Cancel',
        onClick: () => alert()
      }
    } = this.props
    const { read } = this.state
    const { rendered } = this.state
    return rendered ? (
      <div className={this.getClass()}>
        <div className='SNG__dialog--content'>
          {title && (
            <div className='SNG__dialog--title'>
              {title}
              {showCloseButton && (
                <button
                  className='fas fa-times SNG__dialog--close-button'
                  onClick={onClose}
                />
              )}
            </div>
          )}
          {children && (
            <div
              className='SNG__dialog--children'
              onScroll={
                enableAfterRead ? e => this.handleScroll(e) : () => null
              }
            >
              {children}
            </div>
          )}
          {(primaryAction || secondaryAction) && (
            <div className='SNG__dialog--actions'>
              {primaryAction && (
                <Button
                  type='primary'
                  disabled={enableAfterRead && !read}
                  icon={primaryAction.icon}
                  onClick={primaryAction.onClick}
                >
                  {primaryAction.label}
                </Button>
              )}
              {secondaryAction && (
                <Button
                  onClick={secondaryAction.onClick}
                  icon={secondaryAction.icon}
                >
                  {secondaryAction.label}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    ) : (
      <Fragment />
    )
  }
}

const Dialog = props =>
  ReactDOM.createPortal(<MainDialog {...props} />, document.body)
export default Dialog
