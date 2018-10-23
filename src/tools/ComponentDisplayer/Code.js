import React, { Component } from 'react'

export default class Code extends Component {

    componentDidMount () {
    }
    componentWillUnmount () {
    }
    computeHeight (props) {
    }
    componentWillReceiveProps (newProps) {
    }
    render () {
        const { children, linktoDocs } =  this.props
        return (
            <div className={'HUI__code'}>
                <div className='HUI__code--option'>
                    <button onClick={() => this.copy()}>Copy</button>
                    <a target='_blank' href={linktoDocs || '#'}>Go to Documention</a>
                </div>
                <div>
                    {children}
                </div>
            </div>
        )
    }
}
