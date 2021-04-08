import React from 'react'
import Figure from 'react-bootstrap/Figure'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './pages/members.css'

const Member = (props) => {
    return (
        // <Card className='card-members' border="info" >
        //     <Card.Img className='card-member-img' variant="top" src={props.json.img} />
        //     <Card.Body className='card-member-body'>
        //         {/* <Card.Title>{props.json.position}</Card.Title> */}
        //         <Card.Text className='card-member-name'>{props.json.name}</Card.Text>
        //         {/* <Card.Text>{props.json.text}</Card.Text> */}
        //         <Button className='card-member-button' variant="outline-dark" href={props.json.link}>More Info</Button>
        //     </Card.Body>
            
            
        // </Card>
        <Figure>
            <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src={props.json.img}
            />
            <Figure.Caption>
                    {props.json.name}
            </Figure.Caption>
        </Figure>
    )
}

const MemberSection = (props) => {
    return (
        <>
        <Col sm>
            {props.list.map((item) => {
                return (<Member json={item} key={item.name}/>)
            })}
        </Col>

        </>
        
    )
}

export default MemberSection