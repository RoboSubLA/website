import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";

import "./sub.css";

const Lanturn = () => {
  return (
    <div className="gyarados-container">
      {/* <Image src={process.env.PUBLIC_URL + '/images/subs/gyarados/gyarados.png'}></Image> */}
      <h1> GYARADOS </h1>
      <Image></Image>

      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="team" title="Team">
          <Table striped bordered hover>
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
                <td>Team Captian</td>
                <td>Sidra Gibeault</td>
                <td>Electrical Engineer</td>
                <td>
                  <a href="https://www.linkedin.com/in/sidra-gibeault-269387172/">
                    {" "}
                    More Info
                  </a>
                </td>
              </tr>

              <tr>
                <td>Team Captian</td>
                <td>Joseph Iorio</td>
                <td>Mechanical Engineer</td>
                <td>
                  <a href="https://www.linkedin.com/in/joseph-daniel-iorio-ab543085/">
                    {" "}
                    More Info
                  </a>
                </td>
              </tr>

              <tr>
                <td>Engineering Team</td>
                <td>Kevin Ma</td>
                <td>Mechanical Engineer</td>
                <td>
                  <a> More Info</a>
                </td>
              </tr>

              <tr>
                <td>Engineering Team</td>
                <td>Stephanie Godina</td>
                <td>Mechanical Engineer</td>
                <td>
                  <a href="https://www.linkedin.com/in/stephaniegodina/">
                    {" "}
                    More Info
                  </a>
                </td>
              </tr>

              <tr>
                <td>Engineering Team</td>
                <td>Arnold Morales</td>
                <td>Electrical Engineer</td>
                <td>
                  <a> More Info</a>
                </td>
              </tr>

              <tr>
                <td>Engineering Team</td>
                <td>Danny Huynh</td>
                <td>Electrical Engineer</td>
                <td>
                  <a> More Info</a>
                </td>
              </tr>

              <tr>
                <td>Computer Science Team</td>
                <td> Carlos Gomez </td>
                <td>Computer Science</td>
                <td>
                  <a> More Info</a>
                </td>
              </tr>

              <tr>
                <td>Computer Science Team</td>
                <td>Viraj Bhakta </td>
                <td>Computer Science</td>
                <td>
                  <a href="https://www.linkedin.com/in/viraj-bhakta/">
                    {" "}
                    More Info
                  </a>
                </td>
              </tr>

              <tr>
                <td>Computer Science Team</td>
                <td>Daniel Gomez </td>
                <td>Computer Science</td>
                <td>
                  <a> More Info</a>
                </td>
              </tr>

              <tr>
                <td>Computer Science Team</td>
                <td>Ethan Cha </td>
                <td>Computer Science</td>
                <td>
                  <a href="https://www.linkedin.com/in/ethan-cha-7a7796180/">
                    {" "}
                    More Info
                  </a>
                </td>
              </tr>

              <tr>
                <td>Computer Science Team</td>
                <td>Andres Lopez-Ruiz </td>
                <td>Computer Science</td>
                <td>
                  <a href="https://www.linkedin.com/in/andreslpzr/">
                    {" "}
                    More Info
                  </a>
                </td>
              </tr>

              <tr>
                <td>Computer Science Team</td>
                <td>Levi </td>
                <td>Computer Science</td>
                <td>
                  <a> More Info</a>
                </td>
              </tr>
            </tbody>
          </Table>

          <Carousel className="carousel-container" fade>
            <Carousel.Item>
              <img
                className="carousel-images"
                src={
                  process.env.PUBLIC_URL + "/images/subs/lanturn/lanturn.png"
                }
                alt="First slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="carousel-images"
                src={
                  process.env.PUBLIC_URL + "/images/subs/gyarados/gyarados.png"
                }
                alt="Second slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="carousel-images"
                src={
                  process.env.PUBLIC_URL +
                  "/images/subs/gyarados/gyaradoscadframe.png"
                }
                alt="Third slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="carousel-images"
                src={
                  process.env.PUBLIC_URL +
                  "/images/subs/gyarados/gyaradoscadhull.png"
                }
                alt="Fourth slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="carousel-images"
                src={
                  process.env.PUBLIC_URL +
                  "/images/subs/gyarados/gyaradoscrane.jpg"
                }
                alt="Fifth slide"
              />
            </Carousel.Item>
          </Carousel>
        </Tab>

        <Tab eventKey="ME" title="Mechanical">
          <h1>Mechanical</h1>

          <p>
            ​ Gyarados consists of a mechanical frame and hull, as well as a
            servo controlled mechanical arm, torpedoes, and dropper
            mechanism.The frame consists of waterjet and anodized aluminum,
            along with 3D printed brackets for mounting waterproof enclosures,
            thrusters, and the DVL. The frame includes 4 aluminum t-slot rails
            that are used as corner brackets for mounting together the
            baseplates and the sides. The rails duly function as a mounting
            point for the other sub-systems.
          </p>
          <br />
          <p>
            ​ The waterproof hull was manufactured in 2018 and consists of two
            8" diameter acrylic tubes connected to a custom machined aluminum
            bulkhead. The bulkhead contains 18 SEACON connectors for electrical
            interfacing. On each end are aluminum endcaps, and several 3D
            printed parts are used on the hull for mounting latches. The latches
            serve as an extra degree of leakage protection, in addition to the
            double o-ring seals on either side of the bulkhead. The tubes on
            each end of the sub can be removed from the bulkhead, leaving the
            electronics stack exposed. Gyarados hull​Two 4" diameter acrylic
            tubes are also present on either end of the submarine to serve as
            the waterproof enclosures for the cameras and batteries.
          </p>
          <br />
          <p>
            In 2018, the electronics shelving was a simple acrylic shelving
            system held together by nuts and bolts. In 2019, this shelving
            system was redesigned to consist of a custom manufactured aluminum
            flange for the inside of the bulkhead and 6061 t-slot aluminum to
            hold acrylic sheets in place to serve as shelves. These shelves
            utilized more of the available space inside the hull, allowing the
            addition of extra electronic components for Gyarados' second year
            competing. The updated shelving is shown below.
          </p>
          <br />
          <p>
            ​Gyarados did not feature a working claw or dropper, but its torpedo
            system was functional.The torpedo system was a servo mechanism that
            would launch the torpedo on command. The team waterproofed its own
            servo motors using several commercially available products.
          </p>
          <br />
          <p>
            ​While it was unsuccessful, the 2019 team worked on the development
            of a mechanical claw with a small waterproof enclosure for a linear
            actuator and a dynamic o-ring seal. The waterproofing of this system
            failed, but the system was functional outside of water. Future
            systems opted to waterproof the servos/actuators themselves rather
            than creating enclosures, since waterproofing a shaft opening is
            difficult and prone to failure. The team is still investigating ways
            to create waterproof enclosures for servo motors and actuators.
          </p>
        </Tab>
        <Tab eventKey="EE" title="Electrical">
          <h1>Electrical</h1>
        </Tab>
        <Tab eventKey="CS" title="Software">
          <h1>Software</h1>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Lanturn;
