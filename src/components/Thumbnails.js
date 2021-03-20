import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Thumbnails = () => {
    return(
        <div class="row">
            <div class="col-xs-6 col-md-3">
                <a href="/" class="thumbnail">
                    <img src="https://cdn.pixabay.com/photo/2021/01/24/20/47/tabby-5946499_960_720.jpg" alt="..."/>
                </a>
            </div>
            <div class="col-xs-6 col-md-3">
                <a href="/" class="thumbnail">
                    <img src="https://cdn.pixabay.com/photo/2017/09/12/13/21/photovoltaic-system-2742302_960_720.jpg" alt="..."/>
                </a>
            </div>
            <div class="col-xs-6 col-md-3">
                <a href="/" class="thumbnail">
                    <img src="https://cdn.pixabay.com/photo/2021/01/24/20/47/tabby-5946499_960_720.jpg" alt="..."/>
                </a>
            </div>
        </div>
    )
}

export default Thumbnails