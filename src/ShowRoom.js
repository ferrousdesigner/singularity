import React, { Component } from 'react';
import { Button, Nav, Presentor, Header } from './HumaneUI';
const GradientText = (props) => {
    return (
        <span className={!props.animated ? 'HUI__text--gradient' : 'HUI__text--gradient-animated'}>
            {props.children}
        </span>
    )
}
import { Row, Col, Grid } from 'react-flexbox-grid';
export default class ShowRoom extends Component {
    constructor (props) {
        super(props)
        this.state = {
            roundButtons: true
        }
    }
    
    render () {
        const { roundButtons } = this.state;
        return (
            <div className='HUI__showroom'>
                <Presentor settings={{type: 'banner', bannerText: 'Humane UI', bannerSubText: 'An Elegant & Modern UI Library'}} />
                    <Presentor settings={{type: 'simple'}}>
                    <Grid>
                        <Row center='xs' middle='xs' style={{marginTop: '4rem'}}>
                        <Col xs={12} sm={8} lg={6}>
                            <Presentor settings={{type: 'scroll', time: '0.7s', easing: 'ease-in-out', direction: 'back'}}>
                                <Header type='spaced' weight={200}>Buttons</Header>
                                <Header type='xlg' weight={300}>Beautifully crafted <br /><GradientText>gradient</GradientText> buttons.</Header>
                            </Presentor>
                        </Col>
                        <Col xs={10}>
                            <Presentor settings={{type: 'scroll', direction: 'front'}}>
                                <Row center='xs' middle='xs'>
                                    <Col xs={6} md={3} style={{padding: '2rem 2rem'}}>
                                        <Button type='primary' round={roundButtons} label={'Primary'} />
                                    </Col>
                                    <Col xs={6} md={3} style={{padding: '2rem 2rem'}}>
                                        <Button type='success' round={roundButtons} label={'Success'} />
                                    </Col>
                                    <Col xs={6} md={3} style={{padding: '2rem 2rem'}}>
                                    <Button type='danger' round={roundButtons} label={'Danger'} />
                                    </Col>
                                    <Col xs={6} md={3} style={{padding: '2rem 2rem'}}>
                                    <Button type='modern' round={roundButtons} colors={['purple', '#ff0000aa', 'blue']} label={'Animated'} />
                                </Col>
                                </Row>
                                <Row center='xs' middle='xs'>
                                    <Col xs={6} md={3} style={{padding: '2rem 2rem'}}>
                                        <Button round={roundButtons} label={'Default'} />
                                    </Col>
                                    <Col xs={6} md={3} style={{padding: '2rem 2rem'}}>
                                        <Button round={roundButtons} type='warning' label={'Warning'} />
                                    </Col>
                                    <Col xs={6} md={3} style={{padding: '2rem 2rem'}}>
                                        <Button round={roundButtons} type='info' label={'Info'} />
                                    </Col>
                                    <Col xs={6} md={3} style={{padding: '2rem 2rem'}}>
                                        <Button round={roundButtons} type='clear' label={'Clear'} />
                                    </Col>
                                </Row>
                            </Presentor>
                        </Col>
                        <Col xs={12} sm={3}>
                        </Col>
                        <Col xs={12} sm={3}>
                        </Col>
                        <Col xs={12} sm={3}>
                        </Col>
                    </Row>
                    </Grid>
                </Presentor>
                <div style={{marginTop: '10rem', background: 'linear-gradient(315deg, #9f0000 0%, #c7071a 59%, #ff7724 100%)', height: '10rem', display: 'flex', padding: '0 1rem', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div style={{fontWeight: 'lighter', fontSize: '3rem', marginLeft: '1rem'}}>
                    Humane UI 2018.
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                        <i className='fab fa-facebook' style={{margin: '0 1rem', fontSize: '3rem'}} />
                        <i className='fab fa-instagram' style={{margin: '0 1rem', fontSize: '3rem'}} />
                        <i className='fab fa-github' style={{margin: '0 1rem', fontSize: '3rem'}} />
                        <i className='fab fa-twitter' style={{margin: '0 1rem', fontSize: '3rem'}} />
                    </div>
                    
                </div>
            </div>
        )
    }
}