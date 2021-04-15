import React from "react";
import {Tabs, Tab, Jumbotron, Image, Carousel, Row, Figure, Col, Container }from "react-bootstrap";

import "./sub.css";
const Member = (props) => {
  return (
    <Col className="figure-container" sm>
      <div className="flip-figure">
        <div className="flip-figure-inner">
          <div className="flip-figure-front">
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

          <div className="flip-figure-back">
            <div className="flip-figure-back-content">
              <p className="flip-figure-back-text">More Info</p>
              <a className="fig-back-icon" href="/">
                <i className="fas fa-info-circle"></i>
              </a>
              <a className="fig-back-icon" href={props.json.link}>
                <i className="fas fa-user-circle"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

const MemberSection = (props) => {
  return (
    <>
      {props.list.map((item) => {
        return <Member json={item} key={item.name} />;
      })}
    </>
  );
};

const Lanturn = () => {
  let obj = require("../../data/members.json");
  let json = obj[Object.keys(obj)[0]];
  return (
    <div className="gyarados-container">
        <Tabs defaultActiveKey="team" className='sub-tabs' id="uncontrolled-tab-example">
        
        <Tab eventKey="team" title="Team">
          <Jumbotron>
            <Container>
              <h1>The Team</h1>
              <Row className="members-row">
                <MemberSection list={json.seniordesign} />
              </Row>
              <h1>Advisors</h1>
              <Row className="members-row">
                <MemberSection list={json.advisors} />
              </Row>
            </Container>
          </Jumbotron>
        </Tab>

        <Tab eventKey="ME" title="Mechanical">
          
          
        </Tab>

        <Tab eventKey="EE" title="Electrical">
          
        </Tab>

        <Tab eventKey="CS" title="Software">
          
        </Tab>
        
      </Tabs>
    </div>
  );
};

export default Lanturn;
