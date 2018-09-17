import React, { Component } from 'react';
import StyleMaker from 'stylemaker'

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
    render () {
        return (
            <div>
                <button className='HUI__button-primary'>Action</button>
            </div>
        );
    }
}