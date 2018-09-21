import React, { Component } from 'react';
import StyleMaker from 'stylemaker'
import './Button.css'

let css = `
    .HUI__button-primary{
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
    .HUI__button-primary:hover{
        opacity: 0.8;
    }
`
StyleMaker(css)
export class Button extends Component {
    renderButton (type, label) {
        switch (type) {
            case 'primary': 
            return (
                <div><button className='HUI__button HUI__button--primary'>{label}</button></div>
            );
            case 'success': 
            return (
                <div><button className='HUI__button HUI__button--success'>{label}</button></div>
            );
            case 'info': 
            return (
                <div><button className='HUI__button HUI__button--info'>{label}</button></div>
            );
            case 'warning': 
            return (
                <div><button className='HUI__button HUI__button--warning'>{label}</button></div>
            );
            case 'danger': 
            return (
                <div><button className='HUI__button HUI__button--danger'>{label}</button></div>
            );
            case 'modern': 
            return (
                <div><button className='HUI__button HUI__button--modern'>{label}</button></div>
            );
            case 'transparent': 
            return (
                <div><button className='HUI__button HUI__button--transparent'>{label}</button></div>
            );
            default: 
            return (
                <div><button className='HUI__button'>{label}</button></div>
            );
        }
    }
    render () {
        const { type, label } = this.props
        return (
            <div>
                {this.renderButton(type, label)}
            </div>
        );
    }
}