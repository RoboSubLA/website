import React from 'react'
import '../pages/members.css'
import Figure from 'react-bootstrap/Figure'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MemberSection from '../MemberSection'

const Members = () => {
    let json = require('../../data/members.json')
    return( 
        <Container>
            <h1>Officers</h1>
            <Row>
                <Col sm>
                      <Figure className='members-container'>
                    <Figure.Image
                        className='members-img'
                        width={171}
                        height={180}
                        alt="171x180"
                        src={json.officers[0].img}
                    />
                        <Figure.Caption>
                            {json.officers[0].name}
                        </Figure.Caption>
                        <Figure.Caption>
                            {json.officers[0].title}
                        </Figure.Caption>

                    </Figure>  
                </Col>

                <Col sm>
                    <Figure className='members-container'>
                    <Figure.Image
                        className='members-img'
                        width={171}
                        height={180}
                        alt="171x180"
                        src={json.officers[1].img}
                    />
                        <Figure.Caption >
                            {json.officers[1].name}
                        </Figure.Caption>
                        <Figure.Caption>
                            {json.officers[1].title}
                        </Figure.Caption>
                    </Figure>
                </Col>

                <Col sm>
                    <Figure className='members-container'>
                    <Figure.Image
                        className='members-img'
                        width={171}
                        height={180}
                        alt="171x180"
                        src={json.officers[2].img}
                    />
                        <Figure.Caption >
                            {json.officers[2].name} 
                        </Figure.Caption>
                        <Figure.Caption>
                            {json.officers[2].title}
                        </Figure.Caption>
                    </Figure>
                </Col>

                <Col sm>
                    <Figure className='members-container'>
                    <Figure.Image
                        className='members-img'
                        width={171}
                        height={180}
                        alt="171x180"
                        src={json.officers[3].img}
                    />
                        <Figure.Caption >
                            {json.officers[3].name}
                        </Figure.Caption>
                        <Figure.Caption>
                            {json.officers[3].title}
                        </Figure.Caption>
                    </Figure>
                </Col>

                <Col sm>
                    <Figure className='members-container'>
                    <Figure.Image
                        className='members-img'
                        width={171}
                        height={180}
                        alt="171x180"
                        src={json.officers[4].img}
                    />
                        <Figure.Caption>
                            {json.officers[4].name}
                        </Figure.Caption>
                        <Figure.Caption>
                            {json.officers[4].title}
                        </Figure.Caption>
                    </Figure>
                </Col>
                
            </Row>

            <h1>Club Members</h1>
            <Row>          
            <MemberSection list={json.members}/>
            </Row>

            <h1>Senior Design Team</h1>
            <Row>          
            <MemberSection list={json.seniordesign}/>
            </Row>

            <h1>Advisors</h1>
            <Row>          
                <Col sm>
                    <Figure className='members-container'>
                    <Figure.Image
                        className='members-img'
                        width={171}
                        height={180}
                        alt="171x180"
                        src={json.advisors[0].img}
                    />
                        <Figure.Caption >
                            {json.advisors[0].name}
                        </Figure.Caption>
                        <Figure.Caption>
                            {json.advisors[0].title}
                        </Figure.Caption>
                    </Figure>
                </Col>

                <Col sm>
                    <Figure className='members-container'>
                    <Figure.Image
                        className='members-img'
                        width={171}
                        height={180}
                        alt="171x180"
                        src={json.advisors[1].img}
                    />
                        <Figure.Caption>
                            {json.advisors[1].name}
                        </Figure.Caption>
                        <Figure.Caption>
                            {json.advisors[1].title}
                        </Figure.Caption>
                    </Figure>
                </Col>

                <Col sm>
                    <Figure className='members-container'>
                    <Figure.Image
                        className='members-img'
                        width={171}
                        height={180}
                        alt="171x180"
                        src={json.advisors[2].img}
                    />
                        <Figure.Caption>
                            {json.advisors[2].name}
                        </Figure.Caption>
                        <Figure.Caption>
                            {json.advisors[2].title}
                        </Figure.Caption>
                    </Figure>
                </Col>
            </Row>



        </Container>
    )
}

export default Members