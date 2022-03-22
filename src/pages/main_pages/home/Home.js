import React from "react";
// import VideoSection from "../VideoSection";
import { Button } from "../../../components/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Typical from "react-typical";
import "./home.css";

function VideoSection(props) {
  return (
    <div className="video-container">
      <img alt="gonzo was here" className="splashpage-img" src={props.src} />
      <h1 className="title">{props.heading}</h1>
      <p id="under-p">
        {" "}
        <Typical
          steps={["Design | Code | Build | Test | Compete", 5000, "", 2000]}
          loop={Infinity}
          wrapper="b"
          id="under-p"
        />
      </p>
      {props.children}
    </div>
  );
}

const About = () => {
  return (
    <div className="about-container">
      <Jumbotron className="about-jumbotron" fluid>
        <Container>
          <h1 className="about-header">About Us!</h1>
          <p className="about-p">
            Welcome to our team! The RoboSub team at California State
            University, Los Angeles is an engineering team that builds
            autonomous submarine vehicles each year for the international
            RoboSub competition. The competition is held annually at the end of
            July at the Transducer Evaluation Center (TRANSDEC) in San Diego.
            The competition consists of a set of obstacles arranged in the
            TRANSDEC pool that each team's submarine must navigate autonomously.
            Students working on the RoboSub project gain valuable teamwork and
            engineering skills while forming connections with other like-minded
            students.
          </p>
          <p className="about-p">
            Our team is split up into two project teams, the student
            organization and the senior design team. The senior design team
            builds one vehicle, and the club members build a separate vehicle
            while being mentored by senior design members. Both vehicles are
            intended for use in the competition and strategies will be carefully
            considered based on the capabilities of both vehicles. Members have
            the opportunity to design advanced robotics systems and work on an
            interdisciplinary project to gain experience working with a team.
            Please see the progress tab for a better idea of what our members
            are working on and what tasks and projects are available to new
            members
          </p>

          <h1 className="about-header">Thanks to Our Sponsors</h1>
          <Image
            src={process.env.PUBLIC_URL + "/images/sponsors/csula.png"}
          ></Image>
          <Image
            src={process.env.PUBLIC_URL + "/images/sponsors/mathworks.png"}
          ></Image>
          <Image
            src={process.env.PUBLIC_URL + "/images/sponsors/onr.png"}
          ></Image>
          <Image
            src={process.env.PUBLIC_URL + "/images/sponsors/sparkfun.png"}
          ></Image>
          <Image
            src={process.env.PUBLIC_URL + "/images/sponsors/dassaultsys.png"}
          ></Image>
        </Container>
      </Jumbotron>
    </div>
  );
};

function Home() {
  const onClick = () =>
    window.open("https://www.youtube.com/watch?v=vo6-J_rYyo4", "_blank");
  return (
    <>
      <VideoSection
        id="under-heading"
        heading="Robosub LA"
        src="https://images.unsplash.com/photo-1465634836201-1d5651b9b6d6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1934&q=80"
      >
        <div className="video-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            onClick={onClick}
          >
            WATCH TRAILER <i className="far fa-play-circle" />
          </Button>
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            path="/sign-up"
          >
            SIGN UP
          </Button>
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            path="/resources"
          >
            GET STARTED
          </Button>
        </div>
      </VideoSection>
      <About />
    </>
  );
}

export default Home;
