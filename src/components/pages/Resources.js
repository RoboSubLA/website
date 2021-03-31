import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

const AccordionEntry = (props) => {
    return(
        <Card>
            <Accordion.Toggle as={props.as} eventKey={props.eventKey}>
                {props.heading}
            </Accordion.Toggle>
                <Accordion.Collapse eventKey={props.eventKey}>
                <Card.Body>{props.body}</Card.Body>
            </Accordion.Collapse>
        </Card>
    )
}

const Resources = () => {
    return (
        <Accordion>
            <AccordionEntry 
                as={Card.Header} 
                eventKey="0"
                heading = "Click me!"
                body = "Hello! I'm the body"    
            />
            <AccordionEntry 
                as={Card.Header} 
                eventKey="1"
                heading = "Click me also!"
                body = "Im more stuff in the body"    
            />
        </Accordion>
    )
}

export default Resources