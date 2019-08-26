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
    this.dialogChildren = React.createRef()
  }

  componentWillReceiveProps (newProps) {
    const { open, persist } = newProps
    let { read } = this.state
    if (!this.props.open && open) {
      if (this.initialBodyOverflow === '') {
        this.initialBodyOverflow = document.querySelector(
          'html'
        ).style.overflowY
        document.querySelector('html').style.overflowY = 'hidden'
      }
      this.setState({ rendered: true, animationClass: 'dialog-show ' }, () => {
        this.checkScrollHeight()
      })
    } else if (this.props.open && !open) {
      document.querySelector('html').style.overflowY = this.initialBodyOverflow
      this.setState(
        { animationClass: this.state.animationClass + 'dialog-hide' },
        () =>
          setTimeout(
            () =>
              this.setState({
                rendered: false,
                animationClass: '',
                read: persist ? read : false
              }),
            500
          )
      )
    }
  }
  checkScrollHeight () {
    const { current } = this.dialogChildren
    const { read } = this.state
    const { persist } = this.props
    // Check if the content is not scrollable
    if(current.scrollHeight === current.offsetHeight && persist && !read ) {
      // Setting the read flag true
      this.setState({read: true})
    }
  }
  getClass () {
    let cS = 'SNG__dialog '
    const { full, primaryAction, secondaryAction } = this.props
    if(full && (primaryAction || secondaryAction)) cS += 'SNG__dialog__full-with-actions '
    if(full && !(primaryAction || secondaryAction)) cS += 'SNG__dialog__full '
    return cS + this.state.animationClass
  }
  handleScroll (e) {
    let { read } = this.state
    // Checking if the content is scrolled completely
    if (
      e.target.offsetHeight + e.target.scrollTop >= e.target.scrollHeight &&
      !read
    ) {
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
      enableAfterRead = true,
      primaryAction,
      secondaryAction
    } = this.props
    const { read } = this.state
    const { rendered } = this.state
    return rendered ? (
      <div className={this.getClass()}>
        <div className='SNG__dialog--content'>
          {title && (
            <div className='SNG__dialog--title'>
              {title}
              {onClose && (
                <button
                  className='fas fa-times SNG__dialog--close-button'
                  onClick={onClose}
                />
              )}
            </div>
          )}
          {children && (
            <div
              ref={this.dialogChildren}
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
