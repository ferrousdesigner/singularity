import React from 'react'
import ReactDom from 'react-dom'
import Showroom from './Showroom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

let App = () => {
  return (
    <Router>
      <Route path='/' exact component={Showroom} />
    </Router>
  )
}
ReactDom.render(<App />, document.getElementById('root'))
