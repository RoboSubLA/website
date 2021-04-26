import React from "react";
import {
  Tabs,
  Tab,
  Jumbotron,
  Image,
  Carousel,
  Row,
  Figure,
  Col,
  Container,
} from "react-bootstrap";
import Typical from "react-typical";
import "./sub.css";
import GroupSection from "../../components/GroupSection";

const Lanturn = () => {
  let obj = require("../../data/members.json");
  let json = obj[Object.keys(obj)[0]];
  return (
    <div className="sub-outmost-container">
      <p className="sub-name"> LANTURN </p>
      <Tabs
        defaultActiveKey="team"
        className="sub-tabs"
        id="uncontrolled-tab-example"
      >
        <Tab eventKey="team" title="Team">
          <Jumbotron className="sub-team-jumbo">
            <Container>
              <GroupSection heading="The Team" list={json.seniordesign} />
              <GroupSection heading="Advisors" list={json.advisors} />
            </Container>
          </Jumbotron>
        </Tab>

        <Tab eventKey="ME" title="Mechanical">
          <Jumbotron className="sub-jumbo">
            {/* 2020-2021 */}
            <div className="sub-container">
              <p className="sub-year">
                Year:{" "}
                <Typical
                  className="sub-year-animated"
                  steps={["2020-2021", 5000, "", 2000]}
                  loop={Infinity}
                  wrapper="b"
                />
              </p>

              <Row>
                {/* Frame and Haul */}
                <Col>
                  <p className="sub-h1">FRAME & HULL</p>
                  <Row className="sub-row-imgs">
                    <Image
                      className="sub-img"
                      src="./images/subs/lanturn/lanturntopview.png "
                    />
                    <Image
                      className="sub-img"
                      src="./images/subs/lanturn/lanturnframe.png "
                    />
                  </Row>
                  <p className="sub-p">
                    Indescribable oppression, which seemed to generate in some
                    unfamiliar part of her consciousness, filled her whole being
                    with a vague anguish. It was like a shadow, like a mist
                    passing across her soul's summer day. It was strange and
                    unfamiliar; it was a mood. She did not sit there inwardly
                    upbraiding her husband, lamenting at Fate, which had
                    directed her footsteps to the path which they had taken. She
                    was just having a good cry all to herself. The mosquitoes
                    made merry over her, biting her firm, round arms and nipping
                    at her bare insteps.
                  </p>
                    <Carousel fade className='sub-carousel'>
                      <Carousel.Item interval={5000}>
                        <p className='sub-carousel-title'>Hull Stress Test</p>
                        <img
                          className='sub-carousel-img'
                          src="./images/subs/lanturn/2021lanturnstresstest.png"
                          alt="First slide"
                        />
                      </Carousel.Item>

                      <Carousel.Item interval={5000}>
                        <p className='sub-carousel-title'>Thermal Model Simulation </p>
                        <img
                          className='sub-carousel-img'
                          src="./images/subs/lanturn/2021lanturnthermals.png"
                          alt="Second slide"
                        />
                      </Carousel.Item>

                      <Carousel.Item interval={5000}>
                        <p className='sub-carousel-title'>Thermal Model Simulation: Flow Trajectories</p>
                        <img
                          className='sub-carousel-img'
                          src="./images/subs/lanturn/2021lanturnthermalflow.png"
                          alt="Third slide"
                        />
                      </Carousel.Item>

                  </Carousel>
                </Col>
              </Row>

              <Row>
                {/* Actuated Systems */}
                <Col>
                  <h1 className="sub-h1">ACTUATED SYSTEMS</h1>
                  <Row className="sub-row-imgs">
                    <Image
                      className="sub-img"
                      src="./images/subs/lanturn/2021lanturnTorpedo.gif"
                    />
                    <Image
                      className="sub-img"
                      src="./images/subs/lanturn/2021lanturntopedodrag.gif"
                    />
                    <Image
                      className="sub-img"
                      src="./images/subs/lanturn/2019lanturndropper.png"
                    />
                  </Row>
                  <p className="sub-p">
                    Indescribable oppression, which seemed to generate in some
                    unfamiliar part of her consciousness, filled her whole being
                    with a vague anguish. It was like a shadow, like a mist
                    passing across her soul's summer day. It was strange and
                    unfamiliar; it was a mood. She did not sit there inwardly
                    upbraiding her husband, lamenting at Fate, which had
                    directed her footsteps to the path which they had taken. She
                    was just having a good cry all to herself. The mosquitoes
                    made merry over her, biting her firm, round arms and nipping
                    at her bare insteps.
                  </p>
                </Col>
              </Row>
            </div>

            {/* 2019-2020 */}
            <div className="sub-container">
              <p className="sub-year">
                Year:{" "}
                <Typical
                  className="sub-year-animated"
                  steps={["2019-2020", 5000, "", 2000]}
                  loop={Infinity}
                  wrapper="b"
                />
              </p>

              <Row>
                {/* Frame and Haul */}
                <Col>
                  <h1 className="sub-h1">FRAME & HAUL</h1>
                  <Row className="sub-row-imgs">
                    <Image
                      className="sub-img"
                      src="./images/subs/lanturn/2019lanturninsidehaul.png"
                    />
                    <Image
                      className="sub-img"
                      src="./images/subs/lanturn/2019lanturnframe.jpg"
                    />
                  </Row>
                  <p className="sub-p">
                    The mechanical design for CSULA’s Lanturn submarine was
                    focused on ease of manufacture and maintenance. Key design
                    features are a box-shaped hull with a removable electronics
                    shelving unit and a frame with slotted mounting points for
                    modular mounting of subassemblies. Lanturn’s hull primary
                    structure is formed by TIG welded sheets of AL 6061-T6. The
                    lid is made of transparent acrylic, and seals to the hull
                    primary structure through a peripheral nitrile gasket
                    compressed by latches. Lanturn is outfitted with forward and
                    downward Lanturn framefacing cameras and features a rear
                    connector plate populated with a standardized set of Seacon
                    connectors. The electronics shelving unit is made of acrylic
                    sheets laser cut to shape/size with equally spaced mounting
                    holes that span each sheet. An internal connector plate and
                    connectorized electronics allow the shelving unit to be
                    unplugged and removed from the hull. 90 degree snapping
                    latches allow the shelves to be laid flat outside of the sub
                    for easy maintenance and troubleshooting.
                  </p>
                </Col>
              </Row>

              <Row>
                {/* Actuated Systems */}
                <Col>
                  <h1 className="sub-h1">ACTUATED SYSTEMS</h1>
                  <Row className="sub-row-imgs">
                    <Image
                      className="sub-img"
                      src="./images/subs/lanturn/2019lanturntorpedo.png"
                    />
                    <Image
                      className="sub-img"
                      src="./images/subs/lanturn/2019lanturnclaw.png"
                    />
                    <Image
                      className="sub-img"
                      src="./images/subs/lanturn/2019lanturndropper.png"
                    />
                  </Row>
                  <p className="sub-p">
                    One design criteria requires that components such as sensors
                    and thrusters be easily added and removed in few steps to
                    minimize time spent on maintenance, in return allocating
                    more time to underwater testing. This requirement was met by
                    creating a modular frame that acts as a hub for mounting
                    components, as shown in the frame image. The design uses a
                    combination of 6061-t6 aluminum t-slot extrusions and flat
                    bars Clawto avoid complex machining, which contributes to
                    ease of scaling if more mounting surfaces are needed.
                    Components are slid into the t-slot fixture brackets then
                    held in place by tightening one or more set screws.In
                    addition to the frame and hull, lanturn features a claw,
                    pneumatic torpedo system, and a DC motor controlled dropper.
                    The claw uses a servo motor to rotate the gears, which are
                    used to open and close the grippers. The grippers hold the
                    objects in place after picking them up. The torpedo system
                    uses a CO2 bucket changer for easy replacement of CO2
                    cartridges, an ASA regulator Dropper​to decrease the CO2
                    pressure to the desired value, a solenoid valve to release
                    the CO2 to launch the torpedo, and the 3D printed torpedoes
                    themselves. The dropper uses a DC motor to rotate the
                    platform 90 degrees at a time to release 3 markers one at a
                    time. The lid is used to replace the markers after each run.{" "}
                  </p>
                </Col>
              </Row>
            </div>
          </Jumbotron>
        </Tab>

        <Tab eventKey="EE" title="Electrical"></Tab>

        <Tab eventKey="CS" title="Software"></Tab>
      </Tabs>
    </div>
  );
};

export default Lanturn;
