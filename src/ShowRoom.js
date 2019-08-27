import React, { Component } from 'react'
import { Button, Nav, Presentor, Header, Spacer, Dialog } from './SingularityUI'
import { HalfPic, ComponentDisplayer } from './tools'
import { Row, Col, Grid } from 'react-flexbox-grid'

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
  colors:
    'An array of colors which make a animated gradient background. Note: Please choose button `type` props as `modern` to enable gradient.',
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
const GradientText = props => {
  return (
    <span
      className={
        !props.animated ? 'SNG__text--gradient' : 'SNG__text--gradient-animated'
      }
    >
      {props.children}
    </span>
  )
}
export default class ShowRoom extends Component {
  constructor (props) {
    super(props)
    this.state = {
      openDialog: false,
      buttonProps: {
        round: false,
        done: false,
        busy: true,
        type: 'default',
        soft: false,
        lastChange: 'type'
      }
    }
  }
  componentDidMount () {
    this.stringPropRotator('button')
  }
  booleanPropRotator (component) {
    console.log('Boolean Called')

    switch (component) {
      case 'button':
        const { buttonProps } = this.state
        let tempState = buttonProps
        let booleanProps = Object.keys(tempState).filter(
          prop => typeof tempState[prop] === 'boolean'
        )
        let trueProp = booleanProps.filter(prop => tempState[prop])[0]
        let toBeTrueProp = this.getNextValueFromArray(trueProp, booleanProps)
        tempState[trueProp] = false
        tempState[toBeTrueProp] = true
        tempState.lastChange = toBeTrueProp

        this.setState({ buttonProps: tempState }, () => {
          let { lastChange } = buttonProps
          setTimeout(() => this.stringPropRotator(component), 2000)
        })
        break
    }
  }
  stringPropRotator (component) {
    switch (component) {
      case 'button': {
        const { buttonProps } = this.state
        let tempState = buttonProps
        let { lastChange } = buttonProps
        let newType = this.getNextValueFromArray(tempState['type'], [
          'primary',
          'alt',
          'default'
        ])
        tempState['type'] = newType
        console.log(newType)
        tempState.lastChange = 'type'
        this.setState({ buttonProps: tempState }, () => {
          setTimeout(() => this.booleanPropRotator(component), 2000)
        })
      }
    }
  }
  getNextValueFromArray (currentValue, theArray) {
    let index = theArray.indexOf(currentValue)
    if (index === theArray.length - 1) {
      index = 0
    } else {
      index += 1
    }
    return theArray[index]
  }
  render () {
    const { openDialog, buttonProps } = this.state
    return (
      <div className='SNG__showroom'>
        <Presentor
          settings={{
            type: 'banner',
            bannerText: 'SINGULARITY',
            bannerSubText: 'A React UI Component Library'
          }}
        />
        <Dialog
          title='Dialog'
          showCloseButton
          persist
          full
          open={openDialog}
          primaryAction={{
            label: 'Agree',
            onClick: () => alert('Yes!!')
          }}
          secondaryAction={{
            label: 'Cancel',
            onClick: () => this.setState({ openDialog: !openDialog })
          }}
          onClose={() => this.setState({ openDialog: !openDialog })}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Dialog>

        <Presentor settings={{ type: 'simple', full: true }}>
          <Grid>
            <Row middle='xs' style={{ marginTop: '4rem' }}>
              <Col xs={12}>
                <Header type='spaced' weight={400}>
                  Buttons
                </Header>
                <Header type='xxlg' weight={100} capital>
                  <GradientText weight={100}>Minimally</GradientText>{' '}
                  Progressive
                </Header>
                <Spacer />
              </Col>
              <Col xs={12} sm={10}>
                <Button
                  type={buttonProps.type}
                  round={buttonProps.round}
                  soft={buttonProps.soft}
                  busy={buttonProps.busy}
                  done={buttonProps.done}
                  icon={<span className='fa fa-home' />}
                >
                  Click me
                </Button>
              </Col>
              <Col xs={12} sm={10}>
                <Spacer lg />
                <Spacer lg />
                <Button to={'#'} type='link'>
                  Play with it
                </Button>
                <Button to={'#'} type='link'>
                  See Docs
                </Button>
              </Col>
            </Row>
            <HalfPic right />
          </Grid>
        </Presentor>
        <Presentor settings={{ type: 'simple' }}>
          <Grid>
            <Row middle='xs' center='xs' style={{ marginTop: '4rem' }}>
              <Col xs={12}>
                <Header type='spaced' align='center' weight={400}>
                  Dialogs
                </Header>
                <Header type='xxlg' align='center' weight={100} capital>
                  You can't <GradientText weight={100}>avoid</GradientText>
                </Header>
                <Spacer />
              </Col>
              <Col xs={12} sm={10}>
                <Button
                  type='primary'
                  onClick={() => this.setState({ openDialog: !openDialog })}
                >
                  Open Dialog
                </Button>
              </Col>
              <Col xs={12} sm={10}>
                <Spacer lg />
                <Spacer lg />
                <Button to={'#'} type='link'>
                  Play with it
                </Button>
                <Button to={'#'} type='link'>
                  See Docs
                </Button>
              </Col>
            </Row>
          </Grid>
        </Presentor>
        <div
          style={{
            marginTop: '10rem',
            background:
              'linear-gradient(315deg, rgb(81, 81, 81) 0%, rgb(52, 52, 52) 59%, rgb(42, 42, 42) 100%)',
            height: '10rem',
            display: 'flex',
            padding: '0 1rem',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <div
            style={{
              fontSize: '2rem',
              marginLeft: '1rem'
            }}
          >
            Singularity UI 2018
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center'
            }}
          >
            <i
              className='fab fa-facebook'
              style={{ margin: '0 1rem', fontSize: '3rem' }}
            />
            <i
              className='fab fa-instagram'
              style={{ margin: '0 1rem', fontSize: '3rem' }}
            />
            <i
              className='fab fa-github'
              style={{ margin: '0 1rem', fontSize: '3rem' }}
            />
            <i
              className='fab fa-twitter'
              style={{ margin: '0 1rem', fontSize: '3rem' }}
            />
          </div>
        </div>
      </div>
    )
  }
}
