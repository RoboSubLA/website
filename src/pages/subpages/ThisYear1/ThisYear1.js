import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";

import "./ThisYear1.css";

const ThisYear1 = () => {
  return (
    <div className="sub-container">
      <h1 className="sub-header">ThisYear1</h1>

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

			  
            </tbody>
          </Table>
        </Tab>

        <Tab className="sub-me-container" eventKey="ME" title="Mechanical">
          <p className="sub-p">
			text when ready
          </p>
        </Tab>

        <Tab className="sub-ee-container" eventKey="EE" title="Electrical">
          <p className="sub-p">
			text when ready
          </p>
        </Tab>

        <Tab className="sub-cs-container" eventKey="CS" title="Software">
          <p className="sub-p">
			text when ready
          </p>
        </Tab>
      </Tabs>
    </div>
  );
};

export default ThisYear1;
