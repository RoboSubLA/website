import React from 'react';
import './signup.css'
import Sky from 'react-sky'
import magikarp from './img/magikarp.png'
import gyarados from './img/gyarados.png'
import lanturn from './img/lanturn.png'

export default function SignUp() {
  return (
      <div className='signup-container'>
        <Sky 
          images={{
            /* FORMAT AS FOLLOWS */
            0: magikarp,
            1: lanturn,
            2: gyarados
            
          }}
          how={100}
          time={10} 
          size={'100px'} 
          background={'#686de0'} 
        />
        <div style={{overflow:'hidden' ,height: '100%'}}>
          <iframe className='sign-up'
          scrolling='yes'
          title='signup'
          src="https://docs.google.com/forms/d/e/1FAIpQLSd0S6yAdk5D2GvYlf4TOg63J2iFdzuhVVrX0mBcAlliadeL5Q/viewform?embedded=true"  
          >
            Loading…
        </iframe>
        </div>
        
      </div>
        
  )}


