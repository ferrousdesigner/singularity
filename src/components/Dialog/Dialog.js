import React, { Fragment, Component } from 'react'
import ReactDOM from 'react-dom'
import './Dialog.css'

class MainDialog extends Component {
  constructor (props) {
    super(props)
    this.state = {
      animationClass: '',
      open: false
    }
  }

  componentWillReceiveProps (newProps) {
    console.log(newProps)
    const { open } = newProps
    if (!this.props.open && open) {
      console.log('>>>')
      this.setState({ rendered: true, animationClass: 'dialog-show ' })
    } else if (this.props.open && !open) {
      console.log('>>2')
      this.setState(
        { animationClass: this.state.animationClass + 'dialog-hide' },
        () =>
          setTimeout(
            () => this.setState({ rendered: false, animationClass: '' }),
            1300
          )
      )
    }
  }
  getClass () {
    let cS = 'SNG__dialog '
    return cS + this.state.animationClass
  }
  render () {
    const { title, onClose, children, showCloseButton } = this.props
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
          {children && <div className='SNG__dialog--children'>{children}</div>}
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
