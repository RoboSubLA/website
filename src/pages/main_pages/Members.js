import React from "react";
import "./members.css";
import Figure from "react-bootstrap/Figure";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Member = (props) => {
  return (
    <Col className="figure-container" sm>
      <div className="flip-figure">
        <div className="flip-figure-inner">
          <div className="flip-figure-front">
            <Figure className="members-container">
              <Figure.Image
                className="members-img"
                width={171}
                height={180}
                alt="171x180"
                src={props.json.img}
              />
              <Figure.Caption>{props.json.name}</Figure.Caption>
              <Figure.Caption>{props.json.title}</Figure.Caption>
            </Figure>
          </div>

          <div className="flip-figure-back">
            <div className="flip-figure-back-content">
              <p className="flip-figure-back-text">More Info</p>
              <a className="fig-back-icon" href="/">
                <i className="fas fa-info-circle"></i>
              </a>
              <a className="fig-back-icon" href={props.json.link}>
                <i className="fas fa-user-circle"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

const MemberSection = (props) => {
  return (
    <>
      {props.list.map((item) => {
        return <Member json={item} key={item.name} />;
      })}
    </>
  );
};

const Members = () => {
  let obj = require("../../data/members.json");
  let json = obj[Object.keys(obj)[0]];
  return (
    <div className="cont">
      <Container className="main-container">
        <h1 className="members-header">Officers</h1>

        <Row className="members-row">
          <Col className="figure-container" sm>
            <div className="flip-figure">
              <div className="flip-figure-inner">
                <div className="flip-figure-front">
                  <Figure className="members-container">
                    <Figure.Image
                      className="members-img"
                      width={171}
                      height={180}
                      alt="171x180"
                      src={json.officers[0].img}
                    />
                    <Figure.Caption>{json.officers[0].name}</Figure.Caption>
                    <Figure.Caption>{json.officers[0].title}</Figure.Caption>
                  </Figure>
                </div>

                <div className="flip-figure-back">
                  <div className="flip-figure-back-content">
                    <p className="flip-figure-back-text">More Info</p>
                    <a className="fig-back-icon" href="/">
                      <i className="fas fa-info-circle"></i>
                    </a>
                    <a className="fig-back-icon" href={json.officers[0].link}>
                      <i className="fas fa-user-circle"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col className="figure-container" sm>
            <div className="flip-figure">
              <div className="flip-figure-inner">
                <div className="flip-figure-front">
                  <Figure className="members-container">
                    <Figure.Image
                      className="members-img"
                      width={171}
                      height={180}
                      alt="171x180"
                      src={json.officers[1].img}
                    />
                    <Figure.Caption>{json.officers[1].name}</Figure.Caption>
                    <Figure.Caption>{json.officers[1].title}</Figure.Caption>
                  </Figure>
                </div>

                <div className="flip-figure-back">
                  <div className="flip-figure-back-content">
                    <p className="flip-figure-back-text">More Info</p>
                    <a className="fig-back-icon" href="/">
                      <i className="fas fa-info-circle"></i>
                    </a>
                    <a className="fig-back-icon" href={json.officers[1].link}>
                      <i className="fas fa-user-circle"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col className="figure-container" sm>
            <div className="flip-figure">
              <div className="flip-figure-inner">
                <div className="flip-figure-front">
                  <Figure className="members-container">
                    <Figure.Image
                      className="members-img"
                      width={171}
                      height={180}
                      alt="171x180"
                      src={json.officers[2].img}
                    />
                    <Figure.Caption>{json.officers[2].name}</Figure.Caption>
                    <Figure.Caption>{json.officers[2].title}</Figure.Caption>
                  </Figure>
                </div>

                <div className="flip-figure-back">
                  <div className="flip-figure-back-content">
                    <p className="flip-figure-back-text">More Info</p>
                    <a className="fig-back-icon" href="/">
                      <i className="fas fa-info-circle"></i>
                    </a>
                    <a className="fig-back-icon" href={json.officers[2].link}>
                      <i className="fas fa-user-circle"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col className="figure-container" sm>
            <div className="flip-figure">
              <div className="flip-figure-inner">
                <div className="flip-figure-front">
                  <Figure className="members-container">
                    <Figure.Image
                      className="members-img"
                      width={171}
                      height={180}
                      alt="171x180"
                      src={json.officers[3].img}
                    />
                    <Figure.Caption>{json.officers[3].name}</Figure.Caption>
                    <Figure.Caption>{json.officers[3].title}</Figure.Caption>
                  </Figure>
                </div>

                <div className="flip-figure-back">
                  <div className="flip-figure-back-content">
                    <p className="flip-figure-back-text">More Info</p>
                    <a className="fig-back-icon" href="/">
                      <i className="fas fa-info-circle"></i>
                    </a>
                    <a className="fig-back-icon" href={json.officers[3].link}>
                      <i className="fas fa-user-circle"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col className="figure-container" sm>
            <div className="flip-figure">
              <div className="flip-figure-inner">
                <div className="flip-figure-front">
                  <Figure className="members-container">
                    <Figure.Image
                      className="members-img"
                      width={171}
                      height={180}
                      alt="171x180"
                      src={json.officers[4].img}
                    />
                    <Figure.Caption>{json.officers[4].name}</Figure.Caption>
                    <Figure.Caption>{json.officers[4].title}</Figure.Caption>
                  </Figure>
                </div>

                <div className="flip-figure-back">
                  <div className="flip-figure-back-content">
                    <p className="flip-figure-back-text">More Info</p>
                    <a className="fig-back-icon" href="/">
                      <i className="fas fa-info-circle"></i>
                    </a>
                    <a className="fig-back-icon" href={json.officers[4].link}>
                      <i className="fas fa-user-circle"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <h1 className="members-header">Club Team</h1>
        <Row className="members-row">
          <MemberSection list={json.members} />
        </Row>

        <h1 className="members-header">Senior Design Team</h1>

        <Row className="members-row">
          <MemberSection list={json.seniordesign} />
        </Row>

        <h1 className="members-header">Advisors</h1>
        <Row className="members-row">
          <Col className="figure-container" sm>
            <div className="flip-figure">
              <div className="flip-figure-inner">
                <div className="flip-figure-front">
                  <Figure className="members-container">
                    <Figure.Image
                      className="members-img"
                      width={171}
                      height={180}
                      alt="171x180"
                      src={json.advisors[0].img}
                    />
                    <Figure.Caption>{json.advisors[0].name}</Figure.Caption>
                    <Figure.Caption>{json.advisors[0].title}</Figure.Caption>
                  </Figure>
                </div>

                <div className="flip-figure-back">
                  <div className="flip-figure-back-content">
                    <p className="flip-figure-back-text">More Info</p>
                    <a className="fig-back-icon" href="/">
                      <i className="fas fa-info-circle"></i>
                    </a>
                    <a className="fig-back-icon" href={json.advisors[0].link}>
                      <i className="fas fa-user-circle"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col className="figure-container" sm>
            <div className="flip-figure">
              <div className="flip-figure-inner">
                <div className="flip-figure-front">
                  <Figure className="members-container">
                    <Figure.Image
                      className="members-img"
                      width={171}
                      height={180}
                      alt="171x180"
                      src={json.advisors[1].img}
                    />
                    <Figure.Caption>{json.advisors[1].name}</Figure.Caption>
                    <Figure.Caption>{json.advisors[1].title}</Figure.Caption>
                  </Figure>
                </div>

                <div className="flip-figure-back">
                  <div className="flip-figure-back-content">
                    <p className="flip-figure-back-text">More Info</p>
                    <a className="fig-back-icon" href="/">
                      <i className="fas fa-info-circle"></i>
                    </a>
                    <a className="fig-back-icon" href={json.advisors[1].link}>
                      <i className="fas fa-user-circle"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col className="figure-container" sm>
            <div className="flip-figure">
              <div className="flip-figure-inner">
                <div className="flip-figure-front">
                  <Figure className="members-container">
                    <Figure.Image
                      className="members-img"
                      width={171}
                      height={180}
                      alt="171x180"
                      src={json.advisors[2].img}
                    />
                    <Figure.Caption>{json.advisors[2].name}</Figure.Caption>
                    <Figure.Caption>{json.advisors[2].title}</Figure.Caption>
                  </Figure>
                </div>

                <div className="flip-figure-back">
                  <div className="flip-figure-back-content">
                    <p className="flip-figure-back-text">More Info</p>
                    <a className="fig-back-icon" href="/">
                      <i className="fas fa-info-circle"></i>
                    </a>
                    <a className="fig-back-icon" href={json.advisors[2].link}>
                      <i className="fas fa-user-circle"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Members;
