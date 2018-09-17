import React, { Component } from 'react';
import StyleMaker from 'stylemaker';
import PropTypes from 'prop-types';
import './Nav.css'

// StyleMaker(css)
export class Nav extends Component {
    renderLinks (links) {
        return links.map((link, key) => {
            return (<a key={key} href={link.link}>{link.label}</a>)
        })
    }
    render () {
        let logoSrc = ''
        let brandName = 'Humane'
        let logoAlt = 'Hui_logo'
        let links = [
            {label: 'Home', link: '/'},
            {label: 'Why Humane UI', link: '/#why_us'},
            {label: 'Components', link: '/#components'},
            {label: 'Documentation', link: '/#docs'}
        ]
        return (
            <div className='HUI__nav'>
                <nav>
                    <div className='HUI__nav--logo'>
                        <a href={'/'}>
                            {logoSrc.length > 0 ?
                                <img src={logoSrc} alt={logoAlt} /> : <div>{brandName}</div>

                            }
                        </a>
                    </div>
                    <div className='HUI__nav--links'>
                        {this.renderLinks(links)}
                    </div>
                </nav>
            </div>
        );
    }
}