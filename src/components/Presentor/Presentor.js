import React, { Component } from 'react';
import StyleMaker from 'stylemaker';
import PropTypes from 'prop-types';
import './Presentor.css'

// StyleMaker(css)
export class Presentor extends Component {
    renderPresentor (settings) {
        if (settings.type) {
            switch (settings.type) {
                case 'banner':
                return (
                    <div className='HUI__presentor--banner'>
                        <div>{settings.bannerText}</div>
                        <div>{settings.bannerSubText}</div>
                    </div>
                );
            }
        }
       
    }
    render () {
        const { settings } = this.props;
        return (
            <div>
                {settings && 
                <div className='HUI__presentor'>
                    {this.renderPresentor(settings)}
                </div>}
                {!settings && 
                <div className='HUI__default--error'>
                    <h1>Please provide valid settings props</h1>
                </div>
                }
            </div>
        );
    }
}