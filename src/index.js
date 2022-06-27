import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Test from './views/test'
import Profile from './views/profile'
import Home from './views/home'
import BlogPost from './views/blog-post'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Test} path="/test" />
        <Route exact component={Profile} path="/profile" />
        <Route exact component={Home} path="/" />
        <Route exact component={BlogPost} path="/blog-post" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
