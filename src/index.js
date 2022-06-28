import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Servios from './views/servios'
import Quemsomos from './views/quemsomos'
import Home from './views/home'
import ContacteNos from './views/contacte-nos'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Servios} path="/servios" />
        <Route exact component={Quemsomos} path="/quemsomos" />
        <Route exact component={Home} path="/" />
        <Route exact component={ContacteNos} path="/contacte-nos" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
