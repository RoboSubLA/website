import React from 'react';
import '../App.css';
import { Button } from './Button';
import './VideoSection.css';

function VideoSection(props) {
  return (
    <div className='video-container'>
      <img src={props.src}/>
      <h1>{props.heading}</h1>
      <p>{props.text}</p>
      {props.children}
    </div>
  );
}

export default VideoSection;
