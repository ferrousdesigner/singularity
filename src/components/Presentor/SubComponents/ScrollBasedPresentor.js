import React, { Component } from 'react'

export class ScrollBasedPresentor extends Component {
    constructor (props) {
        super (props)
        this.state = {
            animateElementsOfIndex: []
        }
        this.classArray = []
        this.elementCalculatedObject = {}
    }
    componentDidMount () {
        if (this.classArray.length > 0) this.setupScrollBasedAnimation()
    }
    componentWillUnmount () {
        if (this.classArray.length > 0) this.unbindEventHandlers()
    }
    unbindEventHandlers () {
        window.removeEventListener('scroll', this.onScrollCustom.bind(this))   
    }
    generateRandomId() {
        let classname = ""
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
      
        for (let i = 0; i < 5; i++)
          classname += possible.charAt(Math.floor(Math.random() * possible.length))
      
        return classname
      }
    setupScrollBasedAnimation () {
        this.setupState()
        this.getCalculatedPostions()
        //Bind scroll events
        this.bindScroll()
    }
    getCalculatedPostions () {
        this.classArray.forEach((classname, i) => {
            let element = document.getElementsByClassName(classname)[0]
            this.elementCalculatedObject[classname] = this.getElemDistance(element) - window.innerHeight
        })
    }
    getElemDistance ( elem ) {
        let location = 0
        if (elem.offsetParent) {
            do {
                location += elem.offsetTop
                elem = elem.offsetParent
            } while (elem)
        }
        return location >= 0 ? location : 0
    }

    bindScroll () {
        window.addEventListener('scroll', this.onScrollCustom.bind(this))
    }
    onScrollCustom () {
        this.classArray.forEach((classname) => {
            let temp
            if(window.scrollY > (this.elementCalculatedObject[classname]) + 150) {
                temp = this.state.animateElementsOfIndex
                temp[this.classArray.indexOf(classname)] = 'animate'
                this.setState({animateElementsOfIndex: temp})
             } else {
                temp = this.state.animateElementsOfIndex
                temp[this.classArray.indexOf(classname)] = ''
                this.setState({animateElementsOfIndex: temp})
             }
        })
    }
    setupState () {
        let temp = {}
        //Set up an object in state in which each key corresponds to a div which will be animated base on the value
        this.classArray.forEach((classname, i) => {
            temp = this.state.animateElementsOfIndex
            temp[i] = ''
        })
        this.setState({animateElementsOfIndex: temp})
    }
    renderChildrenWithAnimationWrapper (children, time, direction, easing) {
        if(!children.length) children = [children]
        return children.map((child, i) => {
            if(this.classArray.length < children.length) {
                let classname = 'SNG__animate--' + direction + '-' + this.generateRandomId()
                this.classArray.push(classname)  
                return (
                    <div className={classname} style={{transitionDuration: time, transitionTimingFunction: easing}}>
                        {child}
                    </div>
                )
            } else {
                return (
                    <div className={this.classArray[i] + (this.state.animateElementsOfIndex[i] == 'animate' ? ' animate' : '')} style={{transitionDuration: time, transitionTimingFunction: easing}}>
                        {child}
                    </div>
                )
            }
        })
    }
    getPerspective (intensity) {
        switch (intensity) {
            case 'lo': 
            return '80rem'
            case 'md': 
            return '40rem'
            case 'hi': 
            return '20rem'
            default: 
            return '60rem'
        }
    }
    render () {
        const { children, time, direction, easing, intensity } =  this.props
        return (
            <div className='SNG__presentor--scroll' style={{perspective: this.getPerspective(intensity)}}>
                {this.renderChildrenWithAnimationWrapper(children, time, direction, easing)}
            </div>
        )
    }
}
ScrollBasedPresentor.defaultProps = {
    children: <div>No Child Provided</div>,
    time: '0.5s',
    easing: 'ease-in-out',
    direction: 'right'
}