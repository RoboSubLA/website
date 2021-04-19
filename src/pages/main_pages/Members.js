import React from "react";
import "./members.css";
import Figure from "react-bootstrap/Figure";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GroupSection from "../../components/GroupSection";

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
