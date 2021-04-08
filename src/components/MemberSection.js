import React from 'react'
import Figure from 'react-bootstrap/Figure'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

import './pages/members.css'

const Member = (props) => {
    return (
        <Col sm>
           <Figure className='members-container'>
                <Figure.Image
                    className='members-img'
                    width={171}
                    height={180}
                    alt="171x180"
                    src={props.json.img}
                />
                <Figure.Caption>
                        {props.json.name}
                </Figure.Caption>
            </Figure> 
        </Col>
        
    )
}

const MemberSection = (props) => {
    return (
        <>
            {props.list.map((item) => {
                return (<Member json={item} key={item.name}/>)
            })}
        </>
        
    )
}

export default MemberSection