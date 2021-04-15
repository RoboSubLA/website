import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Link } from "react-router-dom";
import "./fleet.css";

const TheFleet = () => {
  return (
    <div className="fleet-container">
      {/* 2020-2021 */}
      <Jumbotron fluid className="jumbotron-container">
        <h1 className="jumbotron-h1">ROBOSUB 2020-2021 (Online-Competition)</h1>
        <h2 className="jumbotron-h2">Rankings:</h2>
        <p className="jumbotron-p">Overall: ~ </p>
        <p className="jumbotron-p">Video: ~ </p>
        <p className="jumbotron-p">Website: ~ </p>
        <p className="jumbotron-p">Technical-Design Report: ~</p>
        <div className="button-container">
          <Button className="jumbotron-button" href="/">
            Team Video
          </Button>
          <Button className="jumbotron-button" href="/">
            Design Report
          </Button>
        </div>
      </Jumbotron>

      <CardDeck className="fleet-carddeck">
        <Card className="fleet-card" border="dark">
          <Card.Img variant="top" src={"/images/subs/lanturn/lanturn.png"} />
          <Card.Body className="fleet-card-body">
            <Card.Title className="fleet-card-title">
              Lanturn 2019-2021
            </Card.Title>
            <Card.Text className="fleet-card-text">
              Senior Design Team
            </Card.Text>
          </Card.Body>
          <Link className="fleet-link" to="/lanturn">
            More Info
          </Link>
        </Card>

        <Card className="fleet-card" border="dark">
          <Card.Img variant="top" src={"/images/subs/donphan/donphan2.jpg"} />
          <Card.Body className="fleet-card-body">
            <Card.Title className="fleet-card-title">
              Donphan 2019-2021
            </Card.Title>
            <Card.Text className="fleet-card-text">Club Team</Card.Text>
          </Card.Body>
          <Link className="fleet-link" to="/donphan2">
            More Info
          </Link>
        </Card>
      </CardDeck>

      {/* 2019-2020 */}
      <Jumbotron fluid className="jumbotron-container">
        <h1 className="jumbotron-h1">ROBOSUB 2019-2020 (Online-Competition)</h1>
        <h2 className="jumbotron-h2">Rankings:</h2>
        <p className="jumbotron-p">Overall: 11th </p>
        <p className="jumbotron-p">Video: 9th </p>
        <p className="jumbotron-p">Website: 13th </p>
        <p className="jumbotron-p">Technical-Design Report: 20th </p>
        <div className="button-container">
          <Button
            className="jumbotron-button"
            href="https://www.youtube.com/watch?v=s-sQxhKXgG8"
          >
            Team Video
          </Button>
          <Button
            className="jumbotron-button"
            href={process.env.PUBLIC_URL + "/files/DesignReport2020.pdf"}
          >
            Design Report
          </Button>
        </div>
      </Jumbotron>

      <CardDeck className="fleet-carddeck">
        <Card className="fleet-card" border="dark">
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + "/images/subs/lanturn/lanturn.png"}
          />
          <Card.Body className="fleet-card-body">
            <Card.Title className="fleet-card-title">
              Lanturn 2019-2020
            </Card.Title>
            <Card.Text className="fleet-card-text">
              Senior Design Team
            </Card.Text>
          </Card.Body>
          <Link className="fleet-link" to="/lanturn">
            More Info
          </Link>
        </Card>

        <Card className="fleet-card" border="dark">
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + "/images/subs/donphan/donphan.jpg"}
          />
          <Card.Body className="fleet-card-body">
            <Card.Title className="fleet-card-title">
              Donphan 2019-2020
            </Card.Title>
            <Card.Text className="fleet-card-text">Club Team</Card.Text>
          </Card.Body>
          <Link className="fleet-link" to="/donphan">
            More Info
          </Link>
        </Card>
      </CardDeck>

      {/* 2018-2019 */}

      <Jumbotron fluid className="jumbotron-container">
        <h1 className="jumbotron-h1">ROBOSUB 2018-2019</h1>
        <h2 className="jumbotron-h2">Ranked: 31st</h2>

        <div className="button-container">
          <Button
            className="jumbotron-button"
            href="https://www.youtube.com/watch?v=SNEvvSS3eq8"
          >
            Team Video
          </Button>
          <Button
            className="jumbotron-button"
            href={process.env.PUBLIC_URL + "/files/DesignReport2019.pdf"}
          >
            Design Report
          </Button>
        </div>
      </Jumbotron>
      <CardDeck className="fleet-carddeck">
        <Card className="fleet-card" border="dark">
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + "/images/subs/gyarados/gyarados.png"}
          />
          <Card.Body className="fleet-card-body">
            <Card.Title className="fleet-card-title">
              Gyarados 2018-2019
            </Card.Title>
            <Card.Text className="fleet-card-text">
              Senior Design Team
            </Card.Text>
          </Card.Body>
          <Link className="fleet-link" to="/gyarados">
            More Info
          </Link>
        </Card>

        <Card className="fleet-card" border="dark">
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + "/images/subs/magikarp/magikarp.png"}
          />
          <Card.Body className="fleet-card-body">
            <Card.Title className="fleet-card-title">
              Magikarp 2018-2019
            </Card.Title>
            <Card.Text className="fleet-card-text">Club Team</Card.Text>
          </Card.Body>
          <Link className="fleet-link" to="/magikarp">
            More Info
          </Link>
        </Card>
      </CardDeck>
    </div>
  );
};

export default TheFleet;
