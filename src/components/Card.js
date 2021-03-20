
const Card = (props) => {
    return (
        <div class="card" style={{width: '50%', display: 'inline-block'}}>
            <img class="card-img-top" src="https://cdn.pixabay.com/photo/2017/09/12/13/21/photovoltaic-system-2742302_960_720.jpg" alt="Card image cap"/>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>        
    )
}

export default Card