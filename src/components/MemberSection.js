import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'
import './pages/members.css'

const Member = (props) => {
    return (
        <Card className='card-members' border="info" >
            <Card.Img className='card-member-img' variant="top" src={props.json.img} />
            <Card.Body className='card-member-body'>
                <Card.Title>{props.json.position}</Card.Title>
                <Card.Text>{props.json.name}</Card.Text>
                <Card.Text>{props.json.text}</Card.Text>
                <Button className='card-member-button' variant="outline-dark" href={props.json.link}>More Info</Button>
            </Card.Body>
            
            
        </Card>
    )
}

const MemberSection = (props) => {
    return (
        <>
        <CardDeck className='card-deck-members'>
            {props.list.map((item) => {
                return (<Member json={item} key={item.name}/>)
            })}
        </CardDeck>

        </>
        
    )
}

export default MemberSection