import React from 'react';
// import './App.scss'
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'
import Navigation from './components/Navigation'
import Banner from './components/Banner'
import Thumbnails from './components/Thumbnails'
import Card from './components/Card'

function App() {
  return(
      <div className="App">
        <Navigation/>
        <Banner title='Title 1' things="some suff, words are here"/>
        <div>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
        <div>
          
        </div>
        <Banner title='Title 2' things="Other words here"/>
     </div>
  )
}

export default App;