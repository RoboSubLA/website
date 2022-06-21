import React from "react";
import Nav from "react-bootstrap/Nav";
// import { Link } from "react-bootstrap";

const ROS = () => {
  return (
    <>
      <h2>Installing ROS</h2>
      <p>Ros must be installed on a running Ubuntu installation</p>
      <a href="http://wiki.ros.org/melodic/Installation/Ubuntu">Install ROS</a>
      <ol className="resource-list">
        <li>sudo apt-get update</li>
        <li>sudo apt-get -y install nano</li>
        <li>sudo sh -c 'echo "deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main" &gt; /etc/apt/sources.list.d/ros-latest.list' </li>
        <li>sudo apt install curl</li>
        <li>curl -s https://raw.githubusercontent.com/ros/rosdistro/master/ros.asc | sudo apt-key add - </li>
        <li>sudo apt update </li>
        <li>sudo apt install ros-melodic-desktop</li>
        <li>echo "source /opt/ros/melodic/setup.bash" &gt;&gt; ~/.bashrc</li>
        <li>source ~/.bashrc </li>
        <li>sudo apt install python-rosdep python-rosinstall python-rosinstall-generator python-wstool build-essential </li>
        <li>sudo apt install python-rosdep </li>
        <li>sudo rosdep init </li>
        <li>rosdep update </li>
      </ol>
      <pre>
        Check if ROS is Installed: <code>printenv | grep ROS</code>
      </pre>
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
