import React, { Component } from 'react';
import { Button, Nav, Presentor, Header } from './HumaneUI';
const GradientText = (props) => {
    return (
        <span className='gradient-text'>
            {props.children}
        </span>
    )
}
import { Row, Col, Grid } from 'react-flexbox-grid';
export default class ShowRoom extends Component {
    render () {
        return (
            <div className='HUI__showroom'>
                <Presentor settings={{type: 'banner', bannerText: 'Humane UI', bannerSubText: 'An Elegant & Modern UI Library'}} />
                <Presentor settings={{type: 'simple', full: true}}>
                    <Grid>
                        <Row center='xs' middle='xs' style={{marginTop: '14rem'}}>
                        <Col xs={7}>
                            <Header type='lg'>Buttons</Header>
                            <Header type='xxlg' weight={600}>Beautifully crafted <GradientText>gradient</GradientText> buttons.</Header>
                        </Col>
                        <Col xs={12}>
                            <Row center='xs' middle='xs'>
                                <Col xs={12} md={4} style={{padding: '3rem 2rem'}}>
                                    <Header type='sm'>Primary</Header>
                                    <br />
                                    <Button type='primary' label={'Primary'} />
                                </Col>
                                <Col xs={12} md={4} style={{padding: '3rem 2rem'}}>
                                    <Header type='sm'>Success</Header>
                                    <br />
                                    <Button type='success' label={'Success'} />
                                </Col>
                                <Col xs={12} md={4} style={{padding: '3rem 2rem'}}>
                                    <Header type='sm'>Danger</Header>
                                    <br />
                                    <Button type='danger' label={'Danger'} />
                                </Col>
                            </Row>
                            <Row center='xs' middle='xs'>
                                <Col xs={12} md={4} style={{padding: '3rem 2rem'}}>
                                    <Header type='sm'>Default</Header>
                                    <br />
                                    <Button label={'Default'} />
                                </Col>
                                <Col xs={12} md={4} style={{padding: '3rem 2rem'}}>
                                    <Header type='sm'>Warning</Header>
                                    <br />
                                    <Button type='warning' label={'Warning'} />
                                </Col>
                                <Col xs={12} md={4} style={{padding: '3rem 2rem'}}>
                                    <Header type='sm'>Info</Header>
                                    <br />
                                    <Button type='info' label={'Info'} />
                                </Col>
                            </Row>
                            <Row center='xs' middle='xs'>
                                <Col xs={12}>
                                  <Header type='md'>Special Buttons</Header>
                                </Col>
                                <Col xs={12} md={4} style={{padding: '3rem 2rem'}}>
                                    <Header type='sm'>Modern</Header>
                                    <br />
                                    <Button type='modern' colors={['purple', '#ff0000aa', 'blue']} label={'Modern'} />
                                </Col>
                                <Col xs={12} md={4} style={{padding: '3rem 2rem'}}>
                                    <Header type='sm'>Clear</Header>
                                    <br />
                                    <Button type='clear' label={'Warning'} />
                                </Col>
                            </Row>
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
            </div>
        )
    }
}