import React from "react";
import { Nav } from "react-bootstrap";
import "./Sidebar.css";

const Sidebar = ({ activeSection, setActiveSection }) => {
  return (
    // this section is dedicated to assinging the names/id of the tabs
    // in order to be able to access the imported components in the 'resource page'

    <div className="d-flex flex-column vh-100 p-3 bg-light side-tab">
      <Nav className="flex-column">
        <Nav.Link
          className="tab first-tab"
          active={activeSection === "getstarted"}
          onClick={() => setActiveSection("getstarted")}
        >
          Get Started
        </Nav.Link>

        <Nav.Link
          className="tab second-tab"
          active={activeSection === "mechanical"}
          onClick={() => setActiveSection("mechanical")}
        >
          Frame & Hull
        </Nav.Link>

        <Nav.Link
          className="tab third-tab"
          active={activeSection === "electronics"}
          onClick={() => setActiveSection("electronics")}
        >
          Electronics
        </Nav.Link>

        <Nav.Link
          className="tab fourth-tab"
          active={activeSection === "missionplanning"}
          onClick={() => setActiveSection("missionplanning")}
        >
          Mission
        </Nav.Link>

        <Nav.Link
          className="tab fifth-tab"
          active={activeSection === "arduino"}
          onClick={() => setActiveSection("arduino")}
        >
          Arduino
        </Nav.Link>

        <Nav.Link
          className="tab sixth-tab"
          active={activeSection === "linux"}
          onClick={() => setActiveSection("linux")}
        >
          Linux
        </Nav.Link>

        <Nav.Link
          className="tab seventh-tab"
          active={activeSection === "github"}
          onClick={() => setActiveSection("github")}
        >
          GitHub
        </Nav.Link>

        <Nav.Link
          className="tab eighth-tab"
          active={activeSection === "ros"}
          onClick={() => setActiveSection("ros")}
        >
          ROS
        </Nav.Link>

        <Nav.Link
          className="tab nineth-tab"
          active={activeSection === "cv"}
          onClick={() => setActiveSection("cv")}
        >
          Computer Vision
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
