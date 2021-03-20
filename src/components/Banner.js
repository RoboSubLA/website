import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image';


const Banner = props => {
    return (
        <div class="jumbotron">
          <h1>{props.title}</h1>
          <p>{props.things}</p>
          <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
        </div>
    )
}

export default Banner;