import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";

import "./Lanturn22.css";

const Lanturn22 = () => {
  return (

	<div className="sub-container">
      <h1 className="sub-header">LANTURN 2022-2023</h1>

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
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Computer Science Leader</td>
                <td> NAME </td>
                <td>Computer Science</td>
              </tr>

              <tr>
                <td>Mission Planning Leader</td>
                <td> NAME </td>
                <td>Computer Science</td>
              </tr>

              <tr>
                <td>CV Leader & Sensors</td>
                <td>NAME </td>
                <td>Computer Science</td>
              </tr>

			  <tr>
                <td>Controls Leader & Sensors</td>
                <td>NAME</td>
                <td>Computer Science</td>
              </tr>

              <tr>
                <td>Mission Planning</td>
                <td>NAME</td>
                <td>Computer Science</td>
              </tr>

              <tr>
                <td>Computer Vision & Mission Planning</td>
                <td>NAME</td>
                <td>Computer Science</td>
              </tr>

              <tr>
                <td>Computer Vision</td>
                <td>Bryan Sanchez</td>
                <td>Computer Science</td>
              </tr>

              <tr>
                <td>Computer Vision</td>
                <td>Robin Romero</td>
                <td>Computer Science</td>
              </tr>

              <tr>
                <td>Controls & Sensors</td>
                <td>Edwin Tran</td>
                <td>Computer Science</td>
              </tr>

              <tr>
                <td>Mechanical Engineering Team</td>
                <td>Forrest Hale</td>
                <td>Mechanical Engineering</td>
              </tr>

              <tr>
                <td>Mechanical Engineering Team</td>
                <td>Zachary Beatti</td>
                <td>Mechanical Engineering</td>
              </tr>

              <tr>
                <td>Mechanical Engineering Team</td>
                <td>Damien Ramos</td>
                <td>Mechanical Engineering</td>
              </tr>

              <tr>
                <td>Electrical Engineering Team</td>
                <td>Victor Sandoval</td>
                <td>Electrical Engineering</td>
              </tr>

              <tr>
                <td>Electrical Engineering Team</td>
                <td>Andrew Maravilla</td>
                <td>Electrical Engineering</td>
              </tr>

			  <tr>
                <td>Electrical Engineering Team</td>
                <td>Edward Komperda</td>
                <td>Electrical Engineering</td>
              </tr>

			  <tr>
                <td>Electrical Engineering Team</td>
                <td>Emigdio Alaniz</td>
                <td>Electrical Engineering</td>
              </tr>

            </tbody>
          </Table>
        </Tab>

      </Tabs>
    </div>

  );
};

export default Lanturn22;
