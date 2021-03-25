import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './components/pages/SignUp';
import TheFleet from './components/pages/TheFleet'
import Navbar from './components/Navbar'
import Members from './components/pages/Members'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/thefleet' component={TheFleet} />
          <Route path='/members' component={Members} />
          <Route path='/sign-up' component={SignUp} />
          {/* <Route path='/sign-up' component={() => { 
            window.location.href = 'https://www.google.com'; 
            return null;
          }}/> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
