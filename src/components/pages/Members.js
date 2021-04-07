import React from "react";
import MemberSection from "../MemberSection";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";
import Footer from "../Footer";
import "../pages/members.css";
// import '../../App.css'

const Members = () => {
  // add members for the year to the JSON under the members directory under a new year
  let obj = require("../../data/members.json");
  let json = obj[Object.keys(obj)[0]];
  return (
    <>
      <div className="members-container">
        <h1
          className="officer-tag"
          style={{ textAlign: "center", fontFamily: "Audiowide, sans-serif" }}
        >
          MEET THE OFFICERS
        </h1>

        <CardDeck className="card-deck-members">
          <Card className="card-members" text="light" bg="dark">
            <Card.Img
              className="card-member-img"
              variant="top"
              src={json.officers[0].img}
            />
            <Card.Body className="card-member-body">
              <Card.Title className="card-member-name">
                {json.officers[0].name}
              </Card.Title>
              <Card.Title className="card-member-title">
                {json.officers[0].title}
              </Card.Title>
              {/* <Card.Text>{json.officers[0].text}</Card.Text> */}
              <Button
                className="card-member-button-officers"
                variant="outline-light"
                href={json.officers[0].link}
              >
                More Info
              </Button>
            </Card.Body>
          </Card>

          <Card className="card-members" text="light" bg="dark">
            <Card.Img
              className="card-member-img"
              variant="top"
              src={json.officers[1].img}
            />
            <Card.Body className="card-member-body">
              <Card.Title className="card-member-name">
                {json.officers[1].name}
              </Card.Title>
              <Card.Title className="card-member-title">
                {json.officers[1].title}
              </Card.Title>
              {/* <Card.Text>{json.officers[1].text}</Card.Text> */}
              <Button
                className="card-member-button-officers"
                variant="outline-light"
                href={json.officers[1].link}
              >
                More Info
              </Button>
            </Card.Body>
          </Card>
        </CardDeck>

        <CardDeck className="card-deck-members">
          <Card className="card-members" text="light" bg="dark">
            <Card.Img
              className="card-member-img"
              variant="top"
              src={json.officers[4].img}
            />
            <Card.Body className="card-member-body">
              <Card.Title className="card-member-name">
                {json.officers[4].name}
              </Card.Title>
              <Card.Title className="card-member-title">
                {json.officers[4].title}
              </Card.Title>

              {/* <Card.Text>{json.officers[4].text}</Card.Text> */}
              <Button
                className="card-member-button-officers"
                variant="outline-light"
                href={json.officers[4].link}
              >
                More Info
              </Button>
            </Card.Body>
          </Card>

          <Card className="card-members" text="light" bg="dark">
            <Card.Img
              className="card-member-img"
              variant="top"
              src={json.officers[2].img}
            />
            <Card.Body className="card-member-body">
              <Card.Title className="card-member-name">
                {json.officers[2].name}
              </Card.Title>
              <Card.Title className="card-member-title">
                {json.officers[2].title}
              </Card.Title>

              {/* <Card.Text>{json.officers[2].text}</Card.Text> */}

              <Button
                className="card-member-button-officers"
                variant="outline-light"
                href={json.officers[2].link}
              >
                More Info
              </Button>
            </Card.Body>
          </Card>

          <Card className="card-members" text="light" bg="dark">
            <Card.Img
              className="card-member-img"
              variant="top"
              src={json.officers[3].img}
            />
            <Card.Body className="card-member-body">
              <Card.Title className="card-member-name">
                {json.officers[3].name}
              </Card.Title>
              <Card.Title className="card-member-title">
                {json.officers[3].title}
              </Card.Title>
              {/* <Card.Text>{json.officers[3].text}</Card.Text> */}

              <Button
                className="card-member-button-officers"
                variant="outline-light"
                href={json.officers[3].link}
              >
                More Info
              </Button>
            </Card.Body>
          </Card>
        </CardDeck>

        <h1
          className="officer-tag"
          style={{ textAlign: "center", fontFamily: "Audiowide, sans-serif" }}
        >
          MEET THE MEMBERS
        </h1>

        <MemberSection list={json.members} />
      </div>
      <Footer />
    </>
  );
};

export default Members;
