import React from 'react';
import '../App.css';
import { Button } from './Button';
import './VideoSection.css';

function VideoSection(props) {
  return (
    <div className='video-container'>
      <img alt='gonzo was here' className='splashpage-img' src={props.src}/>
      <h1 className='title'>{props.heading}</h1>
      <p className='motto' style={{fontFamily: 'Audiowide'}}>{props.text}</p>
      {props.children}
    </div>
  );
}

export default VideoSection;
