import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { Button, Presentor } from '../../HumaneUI'
import './ComponentDisplayer.css'
import Code from './Code'

export default class ComponentDisplayer extends React.Component {
    constructor (props) {
        super(props)
        this.state = {selectedProp: 'No prop selected' , selectedValue: 'Select a prop first', scale: 1.5, appliedProps: {}, showCode: false}
        this.initialState = {selectedProp: 'No prop selected' , selectedValue: 'Select a prop first', scale: 1.5, appliedProps: {}, showCode: false}
    }
    loopDisplay (child, childProps) {
        if(Object.keys(this.state.appliedProps).length) {
            child.props = {...child.props,...this.state.appliedProps}
        } else {
        }
        
        return <div className='component-spotlight' style={{transform: `scale(${this.state.scale}) translateY(${this.state.scale * 0.5}px)`}}><div>{child}</div></div>
    }
    changeSelectedProp (propName) {
        this.setState({selectedProp: propName, selectedValue: this.props.childProps[propName][0] })
    }
    changeSelectedValue (propValue) {
        this.setState({selectedValue: propValue })
    }
    applyProps () {
        let tempProps = {...this.state.appliedProps}
        tempProps[this.state.selectedProp] = this.state.selectedValue
        this.setState({appliedProps: tempProps})
    }
    reset () {
        this.setState(this.initialState)
    } 
    showCode () {
        this.setState({showCode: !this.state.showCode})
    }
    renderPropChanger (childProps) {
        return (
            <div className='props-selector'>
                <Row center='xs' middle='xs'>
                    <Col xs={12} sm={4}>
                        <h4>Choose a prop</h4>
                        <div className='key-selector'>
                            <div className='arrow'><div className='fas fa-caret-down'/></div>
                            <div className='key-selected'>
                                {this.state.selectedProp}
                            </div>
                            <div className='key-list'>
                            {
                                Object.keys(childProps).map((propName, key)=> {
                                    return (
                                        <div key={key} onClick={() => this.changeSelectedProp(propName)}>
                                            {propName}
                                        </div>
                                    )
                                })
                            }
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={4}>
                        <h4>Play with values</h4>
                        <div className='value-selector'>
                            <div className='arrow'><div className='fas fa-caret-down'/></div>
                            <div className='value-selected'>
                                {String(this.state.selectedValue)}
                            </div>
                            { (this.state.selectedValue !== 'Select a prop first') && <div className='value-list'>
                                {
                                   childProps[this.state.selectedProp].length ? (childProps[this.state.selectedProp]).map((val, key) => {
                                    return (<div className='' onClick={() => this.changeSelectedValue(val)} key={key}>{String(val)}</div>)
                                }) : String(childProps[this.state.selectedProp]) }
                            </div>}
                        </div>
                    </Col>
                    <Col xs={12} sm={4}>
                        <h4 style={{marginBottom: '3rem'}}>Apply the prop</h4>
                        <Button type='primary' onClick={() =>{this.applyProps()}} round={true} label={'Apply'} />
                    </Col>
                </Row>
            </div>
        )
    }
    getCode (name, appliedProps) {
        console.log('name', name)
        let propsString = ''
        if(Object.keys(appliedProps)) {
            Object.keys(appliedProps).forEach((prop, key) => {
                let boolKey = typeof Object.values(appliedProps)[key] == 'boolean' || false
                propsString += ' ' + String(prop) + 
                (boolKey ? '' : '={') + 
                (boolKey ? '' : String(Object.values(appliedProps)[key]) + '}') 
            })
        }
        return `<${name} ${propsString} />`
    }
    render () {
        const { showCode, appliedProps } = this.state
        const childProps = this.props.childProps || null
        const child = this.props.children.length ? this.props.children[0] : this.props.children
        console.log(child)
        return (
            <div style={{perspective: '80rem'}}>
                <div>{childProps && this.renderPropChanger(childProps)}</div>
                {childProps && this.loopDisplay(child, childProps)}
                {!childProps && <h1>No props</h1>}
               
                <Row center='xs' middle='xs' style={{margin: '4rem 0'}}>
                    <Col xs={12} sm={6} style={{textAlign: 'left'}}>
                        <div><h4>Change Scale: 
                        <span className='scale-value' style={{background: this.state.scale === this.props.scale[0] ? '#444' : ''}} onClick={() => this.setState({scale: this.props.scale[0]})}>{this.props.scale[0]}</span>
                        <span className='scale-value' style={{background: this.state.scale === this.props.scale[1] ? '#444' : ''}} onClick={() => this.setState({scale: this.props.scale[1]})}>{this.props.scale[1]}</span>
                        <span className='scale-value' style={{background: this.state.scale === this.props.scale[2] ? '#444' : ''}} onClick={() => this.setState({scale: this.props.scale[2]})}>{this.props.scale[2]}</span></h4></div>
                    </Col>
                    <Col xs={12} sm={3} style={{textAlign: 'right'}}>
                        <Button type='success' onClick={() =>{this.showCode()}} round={true} label={showCode ? 'Hide Code' : 'Show code'} />
                    </Col>
                </Row>
                <Row center='xs' middle='xs' style={{margin: '1rem 0'}}>
                    <Col xs={12} sm={8} style={{textAlign: 'left'}}>
                        <Presentor settings={{type: 'smooth'}} show={showCode}>
                            <Code>
                                {console.log(child)}
                                {this.getCode(child.type.name, appliedProps)}
                            </Code>
                        </Presentor>
                    </Col>
                </Row>
                <Row end='xs' middle='xs' style={{margin: '4rem 0'}}>
                    {(this.state.selectedProp !== 'No prop selected') && <Col xs={12} sm={8} style={{textAlign: 'left'}}>
                        <p>{this.props.propsDesc[this.state.selectedProp]}</p>
                    </Col>}
                    {(this.state.selectedProp !== 'No prop selected') && <Col xs={12} sm={4}>
                        <Button type='warning' onClick={() =>{this.reset()}} round={true} label={'Reset'} />
                    </Col>}
                </Row>
             </div>
        )
    }
}

ComponentDisplayer.defaultProps = {
    scale: [1, 1.5, 2]
}