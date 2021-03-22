import React from 'react'
import Card from '../Card'
import Thumbnails from '../Thumbnails'
import { Button } from 'react-bootstrap'
import VideoSection from '../VideoSection'

const Home = () =>{
    return (
        <>
            <VideoSection />
            <div>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </>
    )
}

export default Home;