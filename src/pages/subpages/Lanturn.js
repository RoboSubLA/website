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
          <Jumbotron>
            <Container>

              <h1>2020-2021</h1>
              <Row>
                <Col>
                  {/* 2019-2020 */}
                  <h1>Frame & Haul</h1>
                  <Row> 
                    <Image src='./images/subs/lanturn/lanturn2.png ' width='400px' height='400px' />
                    <Image src='./images/subs/lanturn/lanturnframe.png ' width='400px' height='400px' />
                  </Row> 
                  <p>The mechanical design for CSULA’s Lanturn submarine was focused on ease of manufacture and maintenance. Key design features are a box-shaped hull with a removable electronics shelving unit and a frame with slotted mounting points for modular mounting of subassemblies. Lanturn’s hull primary structure is formed by TIG welded sheets of AL 6061-T6. The lid is made of transparent acrylic, and seals to the hull primary structure through a peripheral nitrile gasket compressed by latches. Lanturn is outfitted with forward and downward Lanturn framefacing cameras and features a rear connector plate populated with a standardized set of Seacon connectors. The electronics shelving unit is made of acrylic sheets laser cut to shape/size with equally spaced mounting holes that span each sheet. An internal connector plate and connectorized electronics allow the shelving unit to be unplugged and removed from the hull. 90 degree snapping latches allow the shelves to be laid flat outside of the sub for easy maintenance and troubleshooting.</p>
                </Col>
              </Row>

              <Row>
                <Col>
                 
                  <h1>Actuated Systems</h1>
                  <Row> 
                    <Image  src='./images/subs/lanturn/lanturntopview.png ' width='400px' height='400px' />
                    <Image src='./images/subs/lanturn/lanturntrans.png' width='400px' height='400px' />
                  </Row> 
                  <p>The mechanical design for CSULA’s Lanturn submarine was focused on ease of manufacture and maintenance. Key design features are a box-shaped hull with a removable electronics shelving unit and a frame with slotted mounting points for modular mounting of subassemblies. Lanturn’s hull primary structure is formed by TIG welded sheets of AL 6061-T6. The lid is made of transparent acrylic, and seals to the hull primary structure through a peripheral nitrile gasket compressed by latches. Lanturn is outfitted with forward and downward Lanturn framefacing cameras and features a rear connector plate populated with a standardized set of Seacon connectors. The electronics shelving unit is made of acrylic sheets laser cut to shape/size with equally spaced mounting holes that span each sheet. An internal connector plate and connectorized electronics allow the shelving unit to be unplugged and removed from the hull. 90 degree snapping latches allow the shelves to be laid flat outside of the sub for easy maintenance and troubleshooting.</p>
                </Col>
              </Row>

            </Container>


            <Container>
              <h1>2019-2020</h1>
              <Row>
                <Col>
                  {/* 2019-2020 */}
                  <h1>Frame & Haul</h1>
                  <Row> 
                    <Image src='./images/subs/lanturn/2019lanturninsidehaul.png' width='400px' height='400px' />
                    <Image src='./images/subs/lanturn/2019lanturnframe.jpg' width='400px' height='400px' />
                  </Row> 
                  <p>The mechanical design for CSULA’s Lanturn submarine was focused on ease of manufacture and maintenance. Key design features are a box-shaped hull with a removable electronics shelving unit and a frame with slotted mounting points for modular mounting of subassemblies. Lanturn’s hull primary structure is formed by TIG welded sheets of AL 6061-T6. The lid is made of transparent acrylic, and seals to the hull primary structure through a peripheral nitrile gasket compressed by latches. Lanturn is outfitted with forward and downward Lanturn framefacing cameras and features a rear connector plate populated with a standardized set of Seacon connectors. The electronics shelving unit is made of acrylic sheets laser cut to shape/size with equally spaced mounting holes that span each sheet. An internal connector plate and connectorized electronics allow the shelving unit to be unplugged and removed from the hull. 90 degree snapping latches allow the shelves to be laid flat outside of the sub for easy maintenance and troubleshooting.</p>
                </Col>
              </Row>
                {/* 2019-2020 */}
                <h1>Actuated Systems</h1>
                <Row>
                  <Col>
                    <Row> 
                      <Image src='./images/subs/lanturn/2019lanturntorpedo.png' width='300px' height='300px'/>
                      <Image src='./images/subs/lanturn/2019lanturnclaw.png' width='300px' height='300px'/>
                      <Image src='./images/subs/lanturn/2019lanturndropper.png' width='300px' height='300px'/>
                    </Row> 
                    <p>One design criteria requires that components such as sensors and thrusters be easily added and removed in few steps to minimize time spent on maintenance, in return allocating more time to underwater testing. This requirement was met by creating a modular frame that acts as a hub for mounting components, as shown in the frame image. The design uses a combination of 6061-t6 aluminum t-slot extrusions and flat bars Clawto avoid complex machining, which contributes to ease of scaling if more mounting surfaces are needed. Components are slid into the t-slot fixture brackets then held in place by tightening one or more set screws.In addition to the frame and hull, lanturn features a claw, pneumatic torpedo system, and a DC motor controlled dropper. The claw uses a servo motor to rotate the gears, which are used to open and close the grippers. The grippers hold the objects in place after picking them up. The torpedo system uses a CO2 bucket changer for easy replacement of CO2 cartridges, an ASA regulator Dropper​to decrease the CO2 pressure to the desired value, a solenoid valve to release the CO2 to launch the torpedo, and the 3D printed torpedoes themselves. The dropper uses a DC motor to rotate the platform 90 degrees at a time to release 3 markers one at a time. The lid is used to replace the markers after each run. </p>
                  </Col>               
                </Row>
            </Container>
          </Jumbotron>
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
