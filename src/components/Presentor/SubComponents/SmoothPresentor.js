import React, { Component } from 'react'

export class SmoothPresentor extends Component {
    constructor (props) {
        super (props)
        this.state = {
            height: 'auto'
        }
        this.height = 0
        this.randomHash = this.generateRandomId()
    }
    componentDidMount () {
        this.height = document.querySelector(`.SNG__presentor--smooth--${this.randomHash}`).getBoundingClientRect().height
        this.computeHeight(this.props)
    }
    computeHeight (props) {
        this.setState({height: props.show ? this.height : 0})
    }
    componentWillReceiveProps (newProps) {
        if((newProps.show === true && this.props.show === false) || (newProps.show === false && this.props.show === true)) {
            this.computeHeight(newProps)
        }
    }
    generateRandomId() {
        let classname = ""
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
      
        for (let i = 0; i < 5; i++)
          classname += possible.charAt(Math.floor(Math.random() * possible.length))
      
        return classname
      }
    render () {
        const { children } =  this.props
        return (
            <div className={`SNG__presentor--smooth--${this.randomHash}`} style={{height: this.state.height}}>
            {children}
            </div>
        )
    }
}
