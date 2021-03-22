import React from 'react';
import '../App.css';
import { Button } from './Button';
import './VideoSection.css';

function VideoSection(props) {
  return (
    <div className='video-container'>
      <video src={props.src} autoPlay loop muted />
      <h1>{props.heading}</h1>
      <p>{props.text}</p>
      {props.children}
    </div>
  );
}

export default VideoSection;
