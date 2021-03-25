import React from 'react'
import Footer from '../Footer'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import '../../App.css';

const TheFleet = () => {
    return(
        <>
            <h1 style={{textAlign: 'center', fontFamily: 'Audiowide, sans-serif'}}>Meet the Fleet!!</h1>

            {/* 2020-2021 */}
            <Jumbotron>
                <h1>2020-2021 (Online-Competition)</h1>
                <h3>Rankings:</h3>
                <p>Overall: ~ </p>
                <p>Video: ~ </p>
                <p>Website: ~ </p>
                <p>Technical-Design Report: ~</p>
            </Jumbotron>
            
            <CardDeck>
                <Card border="info" >
                    <Card.Img variant="top" src="https://www.calstatela.edu/sites/default/files/users/u227286/lanturn.png" />
                    <Card.Body>
                        <Card.Title>Lanturn 2019-2021</Card.Title>
                        <Card.Text>
                            Currently under construction...
                        </Card.Text>
                    </Card.Body>
                    <Button variant="primary">Go somewhere</Button>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>

                <Card border="info" >
                    <Card.Img variant="top" src="https://www.calstatela.edu/sites/default/files/users/u227286/donphan.jpg" />
                    <Card.Body>
                        <Card.Title>Donphan 2019-2021</Card.Title>
                        <Card.Text>
                            Currently under construction...
                        </Card.Text>
                    </Card.Body>
                    <Button variant="primary">Go somewhere</Button>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>

                
            </CardDeck>

            {/* 2019-2020 */}
            <Jumbotron>
                <h1>2019-2020 (Online-Competition)</h1>
                <h3>Rankings:</h3>
                <p>Overall: 11th</p>
                <p>Video: 9th</p>
                <p>Website: 13th</p>
                <p>Technical-Design Report: 20th</p>
            </Jumbotron>

            <CardDeck>
                <Card border="info" >
                    <Card.Img variant="top" src="https://www.calstatela.edu/sites/default/files/users/u227286/lanturn.png" />
                    <Card.Body>
                        <Card.Title>Lanturn 2019-2021</Card.Title>
                        <Card.Text>
                            Complications Due to COVID-19...
                        </Card.Text>
                    </Card.Body>
                    <Button variant="primary">Go somewhere</Button>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>

                <Card border="info" >
                    <Card.Img variant="top" src="https://www.calstatela.edu/sites/default/files/users/u227286/donphan.jpg" />
                    <Card.Body>
                        <Card.Title>Donphan 2019-2021</Card.Title>
                        <Card.Text>
                        Complications Due to COVID-19...
                        </Card.Text>
                    </Card.Body>
                    <Button variant="primary">Go somewhere</Button>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>

                
            </CardDeck>
            
            {/* 2018-2019 */}
            <Jumbotron>
                <h1>2018-2019</h1>
                <h3>Ranking: 31st</h3>
            </Jumbotron>

            <CardDeck>
                
                <Card border="info" >
                    <Card.Img variant="top" src="https://www.calstatela.edu/sites/default/files/users/u227286/gyarados.png" />
                    <Card.Body>
                        <Card.Title>Gyarados 2018-2019</Card.Title>
                        
                    </Card.Body>
                    <Button variant="primary">Go somewhere</Button>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>


                <Card border="info" >
                    <Card.Img variant="top" src="https://www.calstatela.edu/sites/default/files/users/u227286/magikarp.png" />
                    <Card.Body>
                        <Card.Title>Magikarp 2018-2019</Card.Title>
                        
                    </Card.Body>
                    <Button variant="primary">Go somewhere</Button>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>

            </CardDeck>
            
            <Footer/>
        </>
    )
}

export default TheFleet