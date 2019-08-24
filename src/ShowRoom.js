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
      roundButtons: false
    }
  }

  render () {
    const { roundButtons } = this.state
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
          open={roundButtons}
          onClose={() => this.setState({ roundButtons: !roundButtons })}
        >
          This is dialog
        </Dialog>
        <Button onClick={() => this.setState({ roundButtons: !roundButtons })}>
          Change
        </Button>

        <Presentor settings={{ type: 'simple', full: true }}>
          <Grid>
            <Row middle='xs' style={{ marginTop: '4rem' }}>
              <Col xs={12}>
                <Header type='spaced' weight={400}>
                  New Age
                </Header>
                <Header type='xxlg' weight={100} capital>
                  <GradientText>Minimal</GradientText> buttons.
                </Header>
                <Spacer />
              </Col>
              <Col xs={12} sm={10}>
                <Button type={'primary'} icon={<span className='fa fa-home' />}>
                  I'm a button
                </Button>
                <Button icon={<span className='fa fa-home' />} variant={'alt'}>
                  I'm a button
                </Button>
                <Button disabled>Disabled</Button>
                <Button done>I'm a button</Button>
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
                <HalfPic right>
                  <Button round>Buttons</Button>
                </HalfPic>
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
              fontWeight: 'lighter',
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
