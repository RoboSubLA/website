import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'

const Member = (props) => {
    return (
        <Card border="info" >
            <Card.Img variant="top" src={props.json.img} />
            <Card.Body>
                <Card.Title>{props.json.position}</Card.Title>
                <Card.Text>{props.json.name}</Card.Text>
                <Card.Text>{props.json.text}</Card.Text>
            </Card.Body>
            <Button variant="primary" href={props.json.link}>More Info</Button>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
    )
}

const MemberSection = (props) => {
    return (
        <CardDeck>
            {props.list.map((item) => {
                return (<Member json={item} key={item.name}/>)
            })}
        </CardDeck>
    )
}

export default MemberSection