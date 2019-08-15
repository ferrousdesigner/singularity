import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './Spacer.css'
 
class Spacer extends Component {
    getClass(props) {
        const { size } = props
        let classes = 'SNG__spacer'
        if(size === 'lg') classes+= ' SNG__spacer--lg'
        if(size === 'md') classes+= ' SNG__spacer--md'
        if(size === 'sm') classes+= ' SNG__spacer--sm'
        return classes
    }
    render() { 
        return (
            <div className={this.getClass(this.props)} />
        );
    }
}
 
export default Spacer;