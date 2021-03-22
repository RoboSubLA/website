import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import VideoSection from '../VideoSection';
import Footer from '../Footer';
import { Button } from '../Button';

function Home() {
  return (
    <>
      <VideoSection heading="Ricardo Medina" text="Looking for work" src='/videos/video-1.mp4'>
        <div className='video-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            GET STARTED
          </Button>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('hey')}
          >
            WATCH TRAILER <i className='far fa-play-circle' />
          </Button>
        </div>
      </VideoSection>
      <Footer />
    </>
  );
}

export default Home;
