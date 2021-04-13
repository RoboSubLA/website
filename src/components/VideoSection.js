import React from 'react';
import '../App.css';
import Typical from 'react-typical';

import './VideoSection.css';

function VideoSection(props) {
  return (
    <div className='video-container'>
      <img alt='gonzo was here' className='splashpage-img' src={props.src}/>
      <h1 className='title'>{props.heading}</h1>
      <p id='under-p'>
          {' '}
          <Typical
          steps={[
            'Design | Code | Build | Test | Compete', 5000,
            '', 2000]}
          loop={Infinity}
          wrapper="b"
          id='under-p'
        />

        </p>
      {props.children}
    </div>
  );
}

export default VideoSection;
