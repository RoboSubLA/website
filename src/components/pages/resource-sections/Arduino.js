import React from 'react'
import '../resources.css'

const Arduino = () => {
    return (
        //Install arduino IDE
        <div>
            <h3 className='resource-text'>Install Arduino IDE</h3>
            <p className='resource-text'>Instructions to install IDE here</p>
            <br/>
            <h3 className='resource-text'>Arduino Tutorial Part 1</h3>
            <p className='iframe-align'><iframe className='resource-iframe' src="https://www.youtube.com/embed/mC1vs9UUAzM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
            <br></br>
            <h3 className='resource-text'>Arduino Tutorial Part 2</h3>
            <p className='iframe-align'><iframe className='resource-iframe' src="https://www.youtube.com/embed/C3ybDK6UlaE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
        </div>
    )
}

export default Arduino