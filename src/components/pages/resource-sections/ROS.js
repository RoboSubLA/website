import React from "react";
import Nav from "react-bootstrap/Nav";
// import { Link } from "react-bootstrap";

const ROS = () => {
  return (
    <>
      <h2>Installing ROS</h2>
      <p>Ros must be installed on a running Ubuntu installation</p>
      <a href="http://wiki.ros.org/melodic/Installation/Ubuntu">Install ROS</a>
      <h2>Setting Up Catkin Workspace</h2>
      <figure>
        <figcaption>Code Snippet</figcaption>
        <pre>
          <code>sudo apt get install nano</code>
        </pre>
      </figure>
    </>
  );
};

export default ROS;
