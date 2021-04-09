import React from 'react'
import Figure from 'react-bootstrap/Figure'
import Col from 'react-bootstrap/Col'
import './pages/members.css'

const Member = (props) => {
    return (
        <Col className='figure-container' sm>
          <div className='flip-figure'>
            <div className='flip-figure-inner'>
              <div className='flip-figure-front'>
                <Figure className="members-container">
                  <Figure.Image
                    className="members-img"
                    width={171}
                    height={180}
                    alt="171x180"
                    src={props.json.img}
                  />
                  <Figure.Caption>{props.json.name}</Figure.Caption>
                  <Figure.Caption>{props.json.title}</Figure.Caption>
                </Figure>
              </div>

              <div className='flip-figure-back'>
                <div className='flip-figure-back-content'>
                  <p className='flip-figure-back-text'>More Info</p>
                  <a className='fig-back-icon' href='/'>
                    <i className="fas fa-info-circle"></i>
                  </a>
                  <a className='fig-back-icon' href={props.json.link}>
                    <i className="fas fa-user-circle"></i>
                  </a>
                </div>
                
              </div>
            </div>
          </div>

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