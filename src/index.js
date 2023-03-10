import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Caramulo from './views/caramulo'
import Archive from './views/archive'
import Home from './views/home'
import Assorted from './views/assorted'
import About from './views/about'
import RallySpirit from './views/rally-spirit'
import Contact from './views/contact'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Caramulo} exact path="/caramulo" />
        <Route component={Archive} exact path="/archive" />
        <Route component={Home} exact path="/" />
        <Route component={Assorted} exact path="/assorted" />
        <Route component={About} exact path="/about" />
        <Route component={RallySpirit} exact path="/rally-spirit" />
        <Route component={Contact} exact path="/contact" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
