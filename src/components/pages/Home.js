import React from 'react'
import Card from '../Card'
import VideoSection from '../VideoSection'

const Home = () =>{
    return (
        <>
            <VideoSection />
            <div>
                <Card src='https://cdn.pixabay.com/photo/2017/09/12/13/21/photovoltaic-system-2742302_960_720.jpg'/>
                <Card src='https://cdn.pixabay.com/photo/2017/09/12/13/21/photovoltaic-system-2742302_960_720.jpg'/>
                <Card src='https://cdn.pixabay.com/photo/2017/09/12/13/21/photovoltaic-system-2742302_960_720.jpg'/>
                <Card src='https://cdn.pixabay.com/photo/2017/09/12/13/21/photovoltaic-system-2742302_960_720.jpg'/>
            </div>
        </>
    )
}

export default Home;