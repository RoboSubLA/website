import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import "./Sponsors.css";

const Sponsors = () => {
  return (
    <div className="main">
      {/* <Jumbotron className = "sponsor-container"> */}
     
        <h1 className="spons-heading">Thank you to our sponsors!</h1>
        <div className="spons-container">
          <h3 className="subtitle">Sponsors</h3>
          <p className="spons-desc">
            RoboSubLA extends our greatest thanks to our sponsors! Your support
            enables us to continue building autonomous underwater vehicles,
            and helps provide our members with technical skills through
            hands-on experiences with industry-standard components.
          </p>

          <h3 className="spons-subtitle">Gold Sponsors</h3>
          <div className="spons-img">
            <Image
              className="sponsor"
              height="150"
              src={process.env.PUBLIC_URL + "/images/sponsors/csula.png"}
            ></Image>
            <Image
              className="sponsor"
              height="150"
              src={process.env.PUBLIC_URL + "/images/sponsors/naval.png"}
            ></Image>
            <Image
              className="sponsor"
              width="400"
              src={process.env.PUBLIC_URL + "/images/sponsors/vectornav.png"}
            ></Image>
          </div>

          <h3 className="spons-subtitle">Silver Sponsors</h3>
          <div className="spons-img">
            <Image
              className="sponsor"
              width="400"
              src={process.env.PUBLIC_URL + "/images/sponsors/bluetrail.png"}
            ></Image>
            <Image
              className="sponsor"
              width="400"
              src={process.env.PUBLIC_URL + "/images/sponsors/bluerobotics.png"}
            ></Image>
          </div>

          <h3 className="spons-subtitle">Bronze Sponsors</h3>
          <div className="spons-img">
            <Image
              className="sponsor"
              width="320"
              src={process.env.PUBLIC_URL + "/images/sponsors/mworks.png"}
            ></Image>
            <Image
              className="sponsor"
              width="300"
              src={process.env.PUBLIC_URL + "/images/sponsors/dsys.svg"}
            ></Image>
          </div>
      </div>

      {/* </Jumbotron> */}
       <div className="pdf-container">
        <h1 className = "spons-heading">Ready to sponsor RoboSubLA? Read our benefits packet!</h1>
        <object
          class="pdf"
          width="500px"
          height="675px"
          data="https://drive.google.com/file/d/1PsGdtf7-BZoSfNbwImO0Ay_P16BJabqs/preview"
          type="application/pdf"
        >
        </object>
      </div>


    </div>
  );
};

export default Sponsors;
