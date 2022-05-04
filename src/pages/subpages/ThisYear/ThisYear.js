import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";

import "./ThisYear.css";

const ThisYear = () => {
  return (
  <div className="decoration">
	<div className="sub-container">
      <h1 className="sub-header">ThisYear</h1>

      <Tabs
        className="sub-tabs"
        defaultActiveKey="team"
        id="uncontrolled-tab-example"
      >
        <Tab eventKey="team" title="Team">
          <Table responsive striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Position</th>
                <th>Name</th>
                <th>Major</th>
                <th>Linkedin</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Computer Science Leader</td>
                <td>Carl Solli</td>
                <td>Computer Science</td>
                <td>More Info</td>
              </tr>

              <tr>
                <td>Mission Planning Leader</td>
                <td>Askhan Aledavoud</td>
                <td>Computer Science</td>
                <td>More Info </td>
              </tr>

              <tr>
                <td>CV Leader & Sensors</td>
                <td>Christian Castillo</td>
                <td>Computer Science</td>
                <td>More Info</td>
              </tr>
			  
			  <tr>
                <td>Controls Leader & Sensors</td>
                <td>Leslie Araujo</td>
                <td>Computer Science</td>
                <td>More Info</td>
              </tr>

              <tr>
                <td>MIssion Planning</td>
                <td>Alan Chan</td>
                <td>Computer Science</td>
                <td>More Info</td>
              </tr>

              <tr>
                <td>Computer Vision & Mission Planning</td>
                <td>Daniel Valadez</td>
                <td>Computer Science</td>
                <td>More Info</td>
              </tr>

              <tr>
                <td>Computer Vision</td>
                <td>Bryan Sanchez</td>
                <td>Computer Science</td>
                <td>More Info</td>
              </tr>

              <tr>
                <td>Computer Vision</td>
                <td>Robin Romero</td>
                <td>Computer Science</td>
                <td>More Info</td>
              </tr>

              <tr>
                <td>Controls & Sensors</td>
                <td>Edwin Tran</td>
                <td>Computer Science</td>
                <td>More Info</td>
              </tr>

              <tr>
                <td>Mechanical Engineering Team</td>
                <td>Forrest Hale</td>
                <td>Mechanical Engineering</td>
                <td>More Info</td>
              </tr>

              <tr>
                <td>Mechanical Engineering Team</td>
                <td>Zachary Beatti</td>
                <td>Mechanical Engineering</td>
                <td>More Info</td>
              </tr>

              <tr>
                <td>Mechanical Engineering Team</td>
                <td>Damien Ramos</td>
                <td>Mechanical Engineering</td>
                <td>More Info</td>
              </tr>

              <tr>
                <td>Electrical Engineering Team</td>
                <td>Victor Sandoval</td>
                <td>Electrical Engineering</td>
                <td>More Info</td>
              </tr>

              <tr>
                <td>Electrical Engineering Team</td>
                <td>Andrew Maravilla</td>
                <td>Electrical Engineering</td>
                <td>More Info</td>
              </tr>
			  
			  <tr>
                <td>Electrical Engineering Team</td>
                <td>Edward Komperda</td>
                <td>Electrical Engineering</td>
                <td>More Info</td>
              </tr>
			  
			  <tr>
                <td>Electrical Engineering Team</td>
                <td>Emigdio Alaniz</td>
                <td>Electrical Engineering</td>
                <td>More Info</td>
              </tr>
			  
            </tbody>
          </Table>
        </Tab>

        <Tab className="sub-me-container" eventKey="ME" title="Mechanical">
          <p className="sub-p">
			text when ready
          </p>
		  -
        </Tab>

        <Tab className="sub-ee-container" eventKey="EE" title="Electrical">
          <p className="sub-p">
            text when ready
          </p>
		  -
        </Tab>

        <Tab className="sub-cs-container" eventKey="CS" title="Software">
          <p className="sub-p">
			text when redy
          </p>
		  -
        </Tab>
      </Tabs>
    </div>
  </div>
  );
};

export default ThisYear;
