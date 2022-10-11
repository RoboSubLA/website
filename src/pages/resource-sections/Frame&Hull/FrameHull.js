import React from "react";
import '../Linux/Linux.css'
import { Jumbotron, Col, Row, Container, Card, Button, Image, ListGroup } from "react-bootstrap";

function FrameHull() {
    return (
        <Jumbotron className='linux-jumbo'>
            <Container className='linux-container'>
                <p className='linux-p'> The Frame and Hull subteam primarily utilizes SolidWorks for building our 3D model of the robotic submarine. To ensure everyone can contribute to building the model, 
                we host introductory SolidWorks workshops - where we go over the basics of the 3D-modeling software. 
Linked below are some videos to watch if you are unable to come to our workshops. 
</p>
        

                <p className='linux-h1'>Introductory SolidWorks Tutorials</p>
                <p className='linux-h3' style={{ textAlign: 'left', paddingLeft: '25px' }}></p>
                <Col>


                    <Jumbotron className='linux-methods-jumbo'>
                        <p className='linux-h1'> SolidWorks Beginner Tutorials</p>
                        <p>
                  
                        </p>
                        <p className='linux-h3'>Bootable USB Windows</p>
                        <p className="iframe-align">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/qtgmGkEPXs8?start=110" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </p>
                        <p className='linux-h3'>Bootable USB MAC OS</p>
                        <p className="iframe-align">
                            <iframe className='linux-yt'
                                src="https://www.youtube.com/embed/Yf3VChom8qo"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                        </p>

                        <a className='linux-links' href="https://ubuntu.com/tutorials/install-ubuntu-desktop#1-overview">
                            Bootable USB Help
                        </a>


                    </Jumbotron>


                    <Jumbotron className='linux-methods-jumbo'>
                        <p className='linux-h1'> Hard Drive Partitioning </p>

                        <p>
                            This method involves partitioning your hard drive on the host
                            computer to allow seperate OS's to be installed on the same drive.
                            It has the least computer requirements, as Linux is installed on
                            the hard drive and uses all host resources. Partitioning is
                            potentially risky as there is a possibility of deleting your
                            operating system but as long as you are paying attention and
                            following steps there should be no problems.
                        </p>
                        <Row className='linux-links-row'>
                            <a className='linux-links' href="https://itsfoss.com/install-ubuntu-1404-dual-boot-mode-windows-8-81-uefi/">
                                Partition Install on Windows
                            </a>

                            <a className='linux-links' href="https://www.makeuseof.com/tag/install-linux-macbook-pro/">
                                Partition Install on Mac
                            </a>
                        </Row>

                    </Jumbotron>
                </Col>
            </Container>



        </Jumbotron>
    );
}

export default FrameHull;
