import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

const Linux = () => {
  return (
    <Accordion>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            Installing Linux
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <h1>Installing Linux </h1>
            <p>When it comes to installing ross there are 3 main options</p>

            <li>Virtualization</li>
            <li>Native Install on External Hard Drive</li>
            <li>Hard Drive Partitioning</li>
            <br></br>

            <h2>Virtualization</h2>
            <p>
              Virtualization involves installing an emulator to run an instance
              of the Linux os inside a window on a host computer. The main
              benifit of this type of install is the ability to add and remove
              various versions of OS's without the need of making any major
              change to your hard drive. It is the easiest to implement. The
              downsides include needing at least 8gb of ram for the set up we
              are running, as well as needing different install software
              depending on your native OS. In addition the computer vision
              software requirements are different, and running those algorithms
              might produce unexpected results, or refuse to run altogether.
              Still a great choice if Linus is new to you and want to try it out
              risk free.
            </p>

            <a href="https://www.makeuseof.com/tag/install-linux-windows-vmware-virtual-machine/">
              Install Linux on windows
            </a>
            <br></br>
            <a href="https://www.imore.com/how-use-linux-your-mac-using-virtual-machine">
              Install Linux on MAC
            </a>
            <br></br>

            <h2>External Hard Drive Install</h2>
            <p>
              Installing on an external hard drive is the easiest way to have
              your host computer nativily boot linux. The only required material
              is an additional hard drive (internal or external) and a bootable
              USB
            </p>
            <h4>Create a Bootable USB Windows</h4>
            <p className="iframe-align">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/xnisuFk-cDg"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </p>
            <h4>Create a Bootable USB MAC</h4>
            <p className="iframe-align">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Yf3VChom8qo"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </p>
            <br></br>

            <a href="https://ubuntu.com/tutorials/install-ubuntu-desktop#1-overview">
              Install Linux using bootable USB
            </a>
            <p>
              Make sure when selecting the hard drive to install Linux it is the
              external drive and not your host OS.
            </p>
            <h2>Hard Drive Partitioning</h2>
            <p>
              This method involves partitioning your hard drive on the host
              computer to allow seperate OS's to be installed on the same drive.
              It has the least computer requirements, as Linux is installed on
              the hard drive and uses all host resources. Partitioning is
              potentially risky as there is a possibility of deleting your
              operating system but as long as you are paying attention and
              following steps there should be no problems.
            </p>
            <a href="https://itsfoss.com/install-ubuntu-1404-dual-boot-mode-windows-8-81-uefi/">
              Partition Install on Windows
            </a>
            <br></br>
            <a href="https://www.makeuseof.com/tag/install-linux-macbook-pro/">
              Partition Install on Mac
            </a>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            Terminal
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <p>
              ROS uses the terminal commands so getting comfortable with
              terminal is important. The tutorial will introduce you to the
              basic terminal commands used in Ubuntu.
            </p>
            <a href="https://ubuntu.com/tutorials/command-line-for-beginners#1-overview">
              Begginer Terminal
            </a>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default Linux;
