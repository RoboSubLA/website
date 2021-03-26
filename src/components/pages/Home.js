import React from 'react';
import '../../App.css';
import VideoSection from '../VideoSection';
import Footer from '../Footer'
import About from '../About'
import { Button } from '../Button';


function Home() {
  const onClick= ()=> window.open("https://www.youtube.com/watch?v=vo6-J_rYyo4", "_blank")
  // const onClick="window.open('https://www.youtube.com/watch?v=vo6-J_rYyo4')"
  return (
    <>
      <VideoSection id='under-heading' heading="Robosub LA" text='Design | Code | Build | Test' src='https://images.unsplash.com/photo-1465634836201-1d5651b9b6d6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1934&q=80'>
        
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
            onClick={onClick}
          >
            WATCH TRAILER <i className='far fa-play-circle' />
          </Button>
          
        </div>
      </VideoSection>
      <About/>
      <Footer />
    </>
  );
}

export default Home;
