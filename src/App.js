import React from 'react'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Projects from './components/pages/Projects'
import Ducks from './components/pages/Ducks'
import Navigation from './components/Navigation'

function App(props) {
  return(
    <div className='App'>
      <Router>
        <Navigation />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/projects' component={Projects} />
          <Route path='/ducks' component={Ducks} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;