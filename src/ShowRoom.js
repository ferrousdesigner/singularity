import React, { Component } from 'react';
import { Button, Nav, Presentor, Header } from './HumaneUI';
import ComponentDisplayer from './tools/ComponentDisplayer'

const ButtonProps = {
    colors: [['red', 'blue', 'green'], ['purple', 'lightblue', 'green']],
    disabled: [true, false], 
    doing: [true, false], 
    done: [true, false], 
    doneMessage: ['Completed', 'Done!'],
    icon: ['Icon'], 
    label: ["I'm good button", "I'm a great button"], 
    labelColor: ['white', 'black'], 
    round: [true, false], 
    type: ['primary', 'success', 'info', 'warning', 'danger', 'modern', 'clear']
    }
const ButtonPropsDesc = {
    colors: 'An array of colors which make a animated gradient background. Note: Please choose button `type` props as `modern` to enable gradient.',
    disabled: 'A boolean prop used to disable the button', 
    doing: 'A boolean props which indicates processing', 
    done: 'A boolean props which indicates process is completed', 
    icon: 'A react child which can be used as an icon.', 
    doneMessage: 'A small string prop to convey completion message.',
    label: 'A string prop which makes the label of the button', 
    labelColor: 'A string prop for the color of label text', 
    round: 'A boolen prop which makes the button corners round', 
    type: 'A string prop which defines the type of the button'
    }
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
                        <Col xs={12} sm={8}>
                            <Header type='spaced' align={'center'} weight={200}>Buttons</Header>
                            <Header type='xlg' align={'center'} weight={400} capital> Interactive<br /><GradientText>gradient</GradientText> buttons.</Header>
                        </Col>
                        <Col xs={12} sm={10}>
                           <ComponentDisplayer childProps={ButtonProps} propsDesc={ButtonPropsDesc}>
                                <Button type={'primary'} />
                           </ComponentDisplayer>
                        </Col>
                        <Col xs={12}>
                            {false && <Presentor settings={{type: 'scroll', direction: 'front'}}>
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
                                    <Button type='modern' round={roundButtons} doing={true} colors={['purple', '#ff0000aa', 'blue']} label={'Animated'} />
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
                            </Presentor>}
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