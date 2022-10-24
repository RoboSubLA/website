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
     
        <h1 className="spons-heading">Become a Sponsor!</h1>
        <div className="spons-container">
          <h3 className="subtitle">Sponsors</h3>
          <p className="spons-desc">
            Thank you to our existing sponsors! Your support fuels our endeavors
            of building autonomous underwater vehicles and helps substantiate
            our team's technical skills through hands-on experiences.
          </p>
          <div className="spons-img">
            <Image
              className="sponsor"
              height="150"
              src={process.env.PUBLIC_URL + "/images/sponsors/csula.png"}
            ></Image>
            <Image
              className="sponsor"
              width="320"
              src={process.env.PUBLIC_URL + "/images/sponsors/mworks.png"}
            ></Image>
            <Image
              className="sponsor"
              width="200"
              src={process.env.PUBLIC_URL + "/images/sponsors/naval.png"}
            ></Image>
            <Image
              className="sponsor"
              width="210"
              src={process.env.PUBLIC_URL + "/images/sponsors/sparkfun.png"}
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
        <h1 className = "spons-heading">Fall 2022 Sponsorship Packet</h1>
        <object
          class="pdf"
          width="600px"
          height="600px"
          data="https://drive.google.com/file/d/1PsGdtf7-BZoSfNbwImO0Ay_P16BJabqs/preview"
          type="application/pdf"
        >
        </object>
      </div>


    </div>
  );
};

export default Sponsors;
