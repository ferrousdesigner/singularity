import React, { Component } from 'react';
import PropTypes from 'prop-types'
import StyleMaker from 'stylemaker'
import './Button.css'

const loader = () => {
    let number = [1,2,3,4,5,6,7,8,9,10,11,12]
    return (
        <div className="loader-spinner">
            {number.map((key) => (<div key={key} />)
            )}
        </div>
    )
}
const check = (doneMessage) => {
    return (<div className='done'><svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/><path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
    {doneMessage && <span>{doneMessage}</span>}
    </div>)
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
    getClass (props) {
     const { round, light, style, type, variant } = this.props
     let classString = 'SNG__button'
     if(round) classString+= ' SNG__button--round'
     if(type === 'link') classString+= ' SNG__button--link'
     if(variant === 'alt') classString+= ' SNG__button--alt'
     return classString
    }
    render () {
        const { done, busy, children, doneMessage, style, icon } = this.props
        return (
            <button className={this.getClass(this.props)} style={style}>
                {icon && <span className='SNG__button--icon'>{icon}</span>}{done ? check(doneMessage) : busy ? loader() : children}
            </button>
        );
    }
}
Button.defaultProps = {
    type: '',
    label: 'Submit',
    labelColor: '',
    colors: ['purple', 'white', 'blue'],
    round: false,
    disabled: false,
    doing: false,
    done: false,
    doneMessage: 'Done',
    icon: null,
    children: 'No Label',
    variant: ''
}
Button.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    labelColor: PropTypes.string,
    colors: PropTypes.array,
    doing: PropTypes.bool,
    done: PropTypes.bool,
    doneMessage: PropTypes.string,
    round: PropTypes.bool,
    disabled: PropTypes.bool,
    icon: PropTypes.node,
    variant: PropTypes.string
}