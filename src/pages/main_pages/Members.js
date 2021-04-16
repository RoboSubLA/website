import React from "react";
import "./members.css";
import Figure from "react-bootstrap/Figure";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Person = (props) => {
  return (
    <Col className="figure-container" sm>
      <div className="flip-figure">
        <div className="flip-figure-inner">
          <div className="flip-figure-front">
            <Figure className="members-container">
              <Figure.Image
                className="members-img"
                alt="171x180"
                src={props.data.img}
              />
              <Figure.Caption>{props.data.name}</Figure.Caption>
              <Figure.Caption>{props.data.title}</Figure.Caption>
            </Figure>
          </div>

          <div className="flip-figure-back">
            <div className="flip-figure-back-content">
              <p className="flip-figure-back-text">More Info</p>
              <a className="fig-back-icon" href="/">
                <i className="fas fa-info-circle"></i>
              </a>
              <a className="fig-back-icon" href={props.data.link}>
                <i className="fas fa-user-circle"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

const GroupSection = (props) => {
  return (
    <>
      <h1 className="members-header">{props.heading}</h1>
      <Row className="members-row">
        {props.list.map((item) => {
          return <Person data={item} />;
        })}
      </Row>
    </>
  );
};

const Members = () => {
  //this will pull the first object in the data file as the default for display on members page
  let obj = require("../../data/members.json");
  let json = obj[Object.keys(obj)[0]];
  return (
    <div className="cont">
      <Container className="main-container">
        <GroupSection heading="Officers" list={json.officers} />
        <GroupSection heading="Club Team" list={json.members} />
        <GroupSection heading="Senior Design Team" list={json.seniordesign} />
        <GroupSection heading="Advisors" list={json.advisors} />
      </Container>
    </div>
  );
};

export default Members;
