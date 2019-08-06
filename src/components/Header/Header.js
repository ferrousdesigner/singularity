import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StyleMaker from 'stylemaker';
import './Header.css';

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
export class Header extends Component {
    renderHeader (type, color, light, weight, text, capital, align) {
        switch (type) {
            case 'xxlg': 
            return (
                <div><h1 className='SNG__header SNG__header--xxlg' style={{textAlign: align, textTransform: capital ? 'uppercase' : '', fontWeight: light ? 'lighter' : weight, color: color}}>{text}</h1></div>
            );
            case 'xlg': 
            return (
                <div><h2 className='SNG__header SNG__header--xlg' style={{textAlign: align, textTransform: capital ? 'uppercase' : '', fontWeight: light ? 'lighter' : weight, color: color}}>{text}</h2></div>
            );
            case 'lg': 
            return (
                <div><h3 className='SNG__header SNG__header--lg' style={{textAlign: align, textTransform: capital ? 'uppercase' : '', fontWeight: light ? 'lighter' : weight, color: color}}>{text}</h3></div>
            );
            case 'md': 
            return (
                <div><h4 className='SNG__header SNG__header--md' style={{textAlign: align, textTransform: capital ? 'uppercase' : '', fontWeight: light ? 'lighter' : weight, color: color}}>{text}</h4></div>
            );
            case 'sm': 
            return (
                <div><h5 className='SNG__header SNG__header--sm' style={{textAlign: align, textTransform: capital ? 'uppercase' : '', fontWeight: light ? 'lighter' : weight, color: color}}>{text}</h5></div>
            );
            case 'xs': 
            return (
                <div><h6 className='SNG__header SNG__header--xs' style={{textAlign: align, textTransform: capital ? 'uppercase' : '', fontWeight: light ? 'lighter' : weight, color: color}}>{text}</h6></div>
            );
            case 'spaced': 
            return (
                <div><h6 className='SNG__header SNG__header--spaced' style={{textAlign: align, textTransform: capital ? 'uppercase' : '', fontWeight: light ? 'lighter' : weight, color: color}}>{text}</h6></div>
            );
            default: 
            return (
                <div><h6 className='SNG__header SNG__header--md' style={{textAlign: align, textTransform: capital ? 'uppercase' : '', fontWeight: light ? 'lighter' : weight, color: color}}>{text}</h6></div>
            );
        }
    }
    render () {
        const { type, color, weight, light, capital, align } = this.props
        const text = this.props.children || 'No data'
        return (
            <div>
                {this.renderHeader(type, color, light, weight, text, capital, align)}
            </div>
        );
    }
}
Header.defaultProps = {
    type: 'md',
    light: false,
    weight: '300',
    color: 'inherit',
    capital: false,
    align: 'left'
}