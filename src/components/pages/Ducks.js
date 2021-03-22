import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import VideoSection from '../VideoSection';
import Footer from '../Footer';

function Ducks() {
  return (
    <>
      <VideoSection heading="FUCK YOU QUACKERS" text='shitty duck' src='/videos/video-3.mp4'/>
      <Footer />
    </>
  );
}

export default Ducks;