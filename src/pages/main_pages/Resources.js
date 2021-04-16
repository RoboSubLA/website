import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import "./resources.css";

// import resource sections
import Arduino from "../resource-sections/Arduino";
import ComputerVision from "../resource-sections/ComputerVision";
import ROS from "../resource-sections/ROS";
import Linux from "../resource-sections/Linux";
import GetStarted from "../resource-sections/GetStarted";
import Github from "../resource-sections/Github";

const Resources = () => {
  return (
    <div>
      {/* <h1 className='resource-title'>Resources</h1> */}
      <Tab.Container id="left-tabs-example" defaultActiveKey="getstarted">
        <Row className="resource-row">
          <Col className="resource-left-col" sm={3}>
            <Nav
              className="resource-item-container flex-column"
              variant="pills"
            >
              <Nav.Item className="resource-item">
                <Nav.Link className="resource-tab" eventKey="getstarted">
                  Get Started
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="resource-item">
                <Nav.Link className="resource-tab" eventKey="arduino">
                  Arduino
                </Nav.Link>
              </Nav.Item>

              <Nav.Item className="resource-item">
                <Nav.Link eventKey="cv">Computer Vision</Nav.Link>
              </Nav.Item>

              <Nav.Item className="resource-item">
                <Nav.Link eventKey="electrical">Electrical</Nav.Link>
              </Nav.Item>

              <Nav.Item className="resource-item">
                <Nav.Link eventKey="github">Git/Github</Nav.Link>
              </Nav.Item>

              <Nav.Item className="resource-item">
                <Nav.Link eventKey="linux">Linux</Nav.Link>
              </Nav.Item>

              <Nav.Item className="resource-item">
                <Nav.Link eventKey="mechanical">Mechanical</Nav.Link>
              </Nav.Item>

              <Nav.Item className="resource-item">
                <Nav.Link eventKey="ros">Ros</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>

          <Col sm={9} className="resource-container">
            <Tab.Content>
              <Tab.Pane eventKey="getstarted">
                <GetStarted />
              </Tab.Pane>

              <Tab.Pane eventKey="arduino">
                <h1 className="resource-text-title">Arduino</h1>
                <Arduino />
              </Tab.Pane>

              <Tab.Pane eventKey="cv">
                <h1 className="resource-text-title">Computer Vision</h1>
                <ComputerVision />
              </Tab.Pane>

              <Tab.Pane eventKey="electrical">
                <h2 className="resource-text-title">Even More Stuff</h2>
              </Tab.Pane>

              <Tab.Pane eventKey="github">
                <Github />
              </Tab.Pane>

              <Tab.Pane eventKey="linux">
                <Linux />
              </Tab.Pane>

              <Tab.Pane eventKey="mechanical">
                <h2 className="resource-text-title">Less Stuff</h2>
              </Tab.Pane>

              <Tab.Pane eventKey="ros">
                <h2 className="resource-text-title">
                  Robotic Operating System
                </h2>
                <ROS />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default Resources;
