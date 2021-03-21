import React from 'react'
import Banner from 'react-banner'
import './Banner.css'


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Projects from './components/pages/Projects'
import Ducks from './components/pages/Projects'

function App(props) {
  return(
    <div className='App'>
      <Router>
        <Banner
            logo="Ricardo Medina"
            url={ window.location.pathname }
            searchBar={false}
            items={[
                { "content": "Home", "url": "/" },
                { "content": "Projects", "url": "/projects" },
                { "content": "Ducks", "url": "/ducks" },
                { "content": "Link w/ Children", "url": "/children", "children": [
                    { "content": "John", "url": "/children/john" },
                    { "content": "Jill", "url": "/children/jill" },
                    { "content": "Jack", "url": "/children/jack" }
                ]}
            ]} />
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