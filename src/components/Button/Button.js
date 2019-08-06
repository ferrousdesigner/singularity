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
    renderButton (type, label, labelColor, colors, round, doing, done, doneMessage, disabled, onClick, style) {
        const getBackground = (colors) => {
            if(colors && colors.length > 0) {
                let s = ''
                for (let i = 0 ; i < colors.length; i++) {
                    i < (colors.length - 1) ? s = s + colors[i] + ', ' : s = s + colors[i]
                }
                s = 'linear-gradient(124deg, ' + s + ')'
                return s
            } else {
                return (
                    'linear-gradient(124deg, green, blue)'
                 )
            }
            
        }
        let cases = ['primary', 'success', 'info', 'warning', 'danger', 'modern', 'clear']
        let styleTwo = type === 'modern' ? {backgroundSize: colors && colors.length > 1 ? colors.length * 80 + '%' : '100%', backgroundColor: colors[0], backgroundImage: getBackground(colors), color: labelColor || 'inherit'} : null
        return cases.includes(type) ?  (
            <div><button onClick={onClick} style={{...styleTwo, ...style}} className={round ? `SNG__button SNG__button--${type} SNG__button--round` : `SNG__button SNG__button--${type}`}>{doing && !done ? loader() : (done ? check(doneMessage) : label)}</button></div>
        ) :  (
            <div><button onClick={onClick} style={{...style}} className={round ? 'SNG__button SNG__button--round' : 'SNG__button'}>{doing ? loader() : (done ? check(doneMessage) : label)}</button></div>
        )
    }
    render () {
        const { type, label, labelColor, colors, round, doing, done, doneMessage, disabled, onClick, style} = this.props
        return (
            <div>
                {this.renderButton(type, label, labelColor, colors, round, doing, done, doneMessage, disabled, onClick)}
            </div>
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
    icon: null
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
    icon: PropTypes.node
}