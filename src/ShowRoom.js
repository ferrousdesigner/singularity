import React, { Component } from 'react';
import { Button, Nav, Presentor } from './HumaneUI';
export default class ShowRoom extends Component {
    render () {
        return (
            <div className='HUI__showroom'>
                <Nav></Nav>
                <Presentor settings={{type: 'banner', bannerText: 'Humane UI', bannerSubText: 'An Elegant & Modern UI Library'}} />
            </div>
        )
    }
}