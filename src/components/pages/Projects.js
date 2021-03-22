import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import VideoSection from '../VideoSection';
import Footer from '../Footer';

function Projects() {
  return (
    <>
      <VideoSection heading="Projects" text="A short tour of my work"src='/videos/video-2.mp4'/>
      <Cards />
      <Footer />
    </>
  );
}

export default Projects;