import React from 'react'
import './VideoSection.css'

const VideoSection = () => {
    return(
        <div className='video-container'>
            <video src='/videos/video-1.mp4' autoPlay loop muted />
            <h1>Title Here</h1>
            <p>What are you waiting for</p>
        </div>
    )
}

export default VideoSection