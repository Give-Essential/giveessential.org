import React, { Fragment } from "react";

import { Container, Col, Row } from "reactstrap";

import adImg from "../assets/images/landing_img.PNG";

import nbc from "../assets/images/nbcny.png";
import news5 from "../assets/images/news5.png";
import cnn from "../assets/images/cnn.png";
import dnews from "../assets/images/dallas-news.png";

import question from "../assets/images/question.svg";

const flexContainer = {
  display: "flex",
  margin: "50px",
};

const nonFlexContainer = {
  // display: "flex",
  // margin: "50px",
  backgroundColor: "#F4F4F4",
};

const firstTextStyle = {
  fontFamily: "Archivo",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "30px",
  lineHeight: "33px",
  display: "flex",
  alignItems: "center",
  color: "#333333",
  fontTransform: "uppercase",
};

const secondaryHeader = {
  fontFamily: "Archivo",
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: "52px",
  lineHeight: "57px",
  // display: "flex",
  alignItems: "center",
  color: "#333333",
  padding: "60px",
};

const dot = {
  height: "30px",
  width: "30px",
  backgroundColor: "#bbb",
  borderRadius: "50%",
  display: "inline-block",
  textAlign: "center",
  textColor: "white",
};

const noStyle = {
  listStyle: "none",
};

const inlineStyling = {
  listStyle: "none",
  display: "inline",
};

const logoStyling = {
  width: "100px",
};

const auto = "my-auto";

const height = "h-100 d-inline-block";

export default function LandingStrip() {
  return (
    <Fragment>
      {/*  Super janky inline styling because it wasn't working for some reason */}
      <Container style={flexContainer} fluid={true}>
        <Container>
          <div style={firstTextStyle}>Give essential is</div>
          <div style={secondaryHeader}>
            Helping essential workers get the items they need.
          </div>
        </Container>
        <Container>
          <img src={adImg} alt="Example box given to a worker" />
        </Container>
      </Container>
      {/*  Container for "What we do section" */}
      <Container style={nonFlexContainer} fluid={true}>
        <div style={secondaryHeader}>What we do</div>
        <div>
          We gift basic living items to essential workers
          <img
            src={question}
            alt="Question mark"
            style={{ margin: "5px", width: "1%" }}
          />
          on the frontlines of the COVID-19 pandemic. If you have any extra
          stuff lying around, you can help!
        </div>
      </Container>
      {/* Container for How does this work segment */}
      <Container fluid={true} style={flexContainer}>
        <div>How does this work?</div>
        <div>
          <ul style={noStyle}>
            <li>
              <span style={dot}>1</span>
              Essential workers tell us what they need. Donors tell us what they
              have
            </li>
            <li>
              <span style={dot}>2</span>
              We match essential workers with donors
            </li>
            <li>
              <span style={dot}>3</span>
              Donors ship their gifts to their match
            </li>
          </ul>
        </div>
      </Container>
      {/* Container for Esssential workers in need examples */}
      <Container fluid={true} style={nonFlexContainer}>
        <div style={secondaryHeader}>Essential workers in need</div>
      </Container>

      {/* Container for in the news */}
      <Container className={height}>
        <div style={secondaryHeader}>In the news!</div>
        <Row>
          <Col className={auto}>
            <a
              href="https://www.nbcnewyork.com/on-air/as-seen-on/nj-college-roommates-connect-frontline-workers-with-essentials/2402189/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={nbc} alt="wnbc logo" style={logoStyling} />
            </a>
          </Col>
          <Col className={auto}>
            <a
              href="https://www.news5cleveland.com/news/coronavirus/cwru-graduate-helps-form-give-essential-to-assist-essential-workers"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={news5}
                alt="cleveland 5 logo"
                style={{ width: "75%" }}
              />
            </a>
          </Col>
          <Col className={auto}>
            <a
              href="https://twitter.com/CuomoPrimeTime/status/1257492367138942978"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={cnn} alt="CNN logo" style={logoStyling} />
            </a>
          </Col>
          <Col className={auto}>
            <a
              href="https://www.dallasnews.com/business/retail/2020/05/01/what-about-invisible-essential-workers-during-coronavirus-dartmouth-student-from-richardson-helps-start-site-linking-them-to-donors/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={dnews}
                alt="Dallas News Logo"
                style={{ width: "100%" }}
              />
            </a>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
