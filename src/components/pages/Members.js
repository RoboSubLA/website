import React from 'react'
import '../pages/members.css'
import Figure from 'react-bootstrap/Figure'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const Members = () => {
    let json = require('../../data/members.json')
    return( 
        <Container>
            <h1>Officers</h1>
            <Row>
                <Col sm>
                    <Figure>
                    <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src={json.officers[0].img}
                    />
                        <Figure.Caption>
                            {json.officers[0].name}
                        </Figure.Caption>
                    </Figure>
                </Col>

                <Col sm>
                    <Figure>
                    <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src={json.officers[1].img}
                    />
                        <Figure.Caption >
                            {json.officers[1].name}
                        </Figure.Caption>
                    </Figure>
                </Col>

                <Col sm>
                    <Figure>
                    <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src={json.officers[2].img}
                    />
                        <Figure.Caption >
                            {json.officers[2].name} 
                        </Figure.Caption>
                    </Figure>
                </Col>

                <Col sm>
                    <Figure>
                    <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src={json.officers[3].img}
                    />
                        <Figure.Caption >
                            {json.officers[3].name}
                        </Figure.Caption>
                    </Figure>
                </Col>

                <Col sm>
                    <Figure>
                    <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src={json.officers[4].img}
                    />
                        <Figure.Caption>
                            {json.officers[4].name}
                        </Figure.Caption>
                    </Figure>
                </Col>
                
            </Row>
            <Row>
                
            </Row>
        </Container>
    )
}

export default Members