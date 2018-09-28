import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StyleMaker from 'stylemaker';
import './Header.css';

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
// StyleMaker(css)
export class Header extends Component {
    renderHeader (type, color, light, weight, text) {
        switch (type) {
            case 'xxlg': 
            return (
                <div><h1 className='HUI__header HUI__header--xxlg' style={{fontWeight: light ? 'lighter' : weight, color: color}}>{text}</h1></div>
            );
            case 'xlg': 
            return (
                <div><h2 className='HUI__header HUI__header--xlg' style={{fontWeight: light ? 'lighter' : weight, color: color}}>{text}</h2></div>
            );
            case 'lg': 
            return (
                <div><h3 className='HUI__header HUI__header--lg' style={{fontWeight: light ? 'lighter' : weight, color: color}}>{text}</h3></div>
            );
            case 'md': 
            return (
                <div><h4 className='HUI__header HUI__header--md' style={{fontWeight: light ? 'lighter' : weight, color: color}}>{text}</h4></div>
            );
            case 'sm': 
            return (
                <div><h5 className='HUI__header HUI__header--sm' style={{fontWeight: light ? 'lighter' : weight, color: color}}>{text}</h5></div>
            );
            case 'xs': 
            return (
                <div><h6 className='HUI__header HUI__header--xs' style={{fontWeight: light ? 'lighter' : weight, color: color}}>{text}</h6></div>
            );
            case 'spaced': 
            return (
                <div><h6 className='HUI__header HUI__header--spaced' style={{fontWeight: light ? 'lighter' : weight, color: color}}>{text}</h6></div>
            );
            default: 
            return (
                <div><h6 className='HUI__header HUI__header--md' style={{fontWeight: light ? 'lighter' : weight, color: color}}>{text}</h6></div>
            );
        }
    }
    render () {
        const { type, color, weight, light } = this.props
        const text = this.props.children || 'No data'
        return (
            <div>
                {this.renderHeader(type, color, light, weight, text)}
            </div>
        );
    }
}
Header.defaultProps = {
    type: 'md',
    light: false,
    weight: '300',
    color: 'inherit'
}