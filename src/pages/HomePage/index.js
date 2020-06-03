import React, { Fragment, useState } from "react";
import { Container, Col, Row, Tooltip, Button } from "reactstrap";

// Import for the landing image in the first container
import adImg from "../../assets/images/landing_img.PNG";

// Import logos from news websites that Give Essential is featured in
import nbc from "../../assets/images/nbcny.png";
import news5 from "../../assets/images/news5.png";
import cnn from "../../assets/images/cnn.png";
import dnews from "../../assets/images/dallas-news.png";
import question from "../../assets/images/question.svg";

const flexContainer = {
  display: "flex",
  // margin: "50px",
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
  alignItems: "center",
  textAlign: "left",
  color: "#333333",
  fontTransform: "uppercase",
};

const landingHeader = {
  // fontFamily: "Archivo",
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: "52px",
  lineHeight: "57px",
  // alignItems: "center",
  color: "#333333",
  textAlign: "left",
  // padding: "5% 5% 3% 5%",
};

const secondaryHeader = {
  // fontFamily: "Archivo",
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: "52px",
  lineHeight: "57px",
  alignItems: "center",
  color: "#333333",
  padding: "5% 5% 3% 5%",
};

const dot = {
  height: "50px",
  width: "50px",
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

const trapezoid = {
  borderBottom: "100px solid #8CC9BA",
  borderLeft: "25px solid transparent",
  borderRight: "25px solid transparent",
  height: "0",
  width: "33%",
  zIndex: "0",
  // position: "relative",
};

const whatWeDoBlock = {
  fontFamily: "Open Sans",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "40px",
  lineHeight: "54px",
  // display: "flex",
  alignItems: "center",
  padding: "0% 12% 6% 12% ",
};

const tooltipStyle = {
  fontFamily: "Open Sans",
  fontStyle: "italic",
  fontWeight: "bold",
  fontSize: "20px",
  lineHeight: "27px",
  display: "flex",
  alignItems: "center",
  color: "#8CC9BA",
  // backgroundColor: "#FFF",
};

const buttonStyle = {
  margin: "10% 3%",
};

const infoList = [
  [
    "Essential workers tell us what they need. Donors tell us what they have",
    "#F3D04E",
  ],
  ["We match essential workers with donors", "#8CC9BA"],
  ["Donors ship their gifts to their match", "#FD8E7B"],
];

export default function HomePage() {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <>
      <Container style={flexContainer} fluid={true}>
        <Container style={{ margin: "6%" }}>
          <div style={firstTextStyle}>Give essential is</div>
          <div style={landingHeader}>
            Helping essential workers get the items they need.
          </div>
          <Button style={buttonStyle} size="lg">
            Give Help
          </Button>
          <Button style={buttonStyle} size="lg">
            Get Help
          </Button>
        </Container>
        <div style={{ position: "relative", margin: "auto" }}>
          <img
            src={adImg}
            alt="Example box given to a worker"
            style={{ zIndex: "1" }}
          />
          {/* <div style={trapezoid}></div> */}
        </div>
      </Container>
      {/*  Container for "What we do section" */}
      <Container style={nonFlexContainer} fluid={true}>
        <div style={secondaryHeader}>What we do</div>
        <div style={whatWeDoBlock}>
          We gift basic living items to essential workers{" "}
          <span
            style={{ textDecoration: "underline", color: "blue" }}
            href="#"
            id="essentialWorkerTooltip"
          >
            <img src={question} alt="Question mark" style={{ width: "2%" }} />
          </span>{" "}
          on the frontlines of the COVID-19 pandemic. If you have any extra
          stuff lying around,{" "}
          <span
            style={{
              color: "#FD8E7B",
              fontStyle: "italic",
              fontWeight: "bold",
            }}
          >
            you can help!
          </span>
          <Tooltip
            placement="right"
            isOpen={tooltipOpen}
            target="essentialWorkerTooltip"
            toggle={toggle}
            style={tooltipStyle}
          >
            An essential worker is anyone who has to risk their health in order
            to make ends meet and/or is unable to work from home
          </Tooltip>
        </div>
      </Container>
      {/* Container for How does this work segment */}
      <Container fluid={true} style={flexContainer}>
        <Col className="my-auto">
          <div style={secondaryHeader}>How does this work?</div>
        </Col>
        <Col className="my-auto">
          <div className="my-auto">
            <ul style={noStyle}>
              {infoList.map((e, i) => (
                <li style={whatWeDoBlock}>
                  <span style={dot}>{i + 1}</span>
                  {e[0]}
                </li>
              ))}
            </ul>
          </div>
        </Col>
      </Container>
      {/* Container for Esssential workers in need examples */}
      <Container fluid={true} style={nonFlexContainer}>
        <div style={secondaryHeader}>Essential workers in need</div>
      </Container>

      {/* Container for in the news */}
      <Container>
        <div style={secondaryHeader}>In the news!</div>
        <Row>
          <Col className="my-auto">
            <a
              href="https://www.nbcnewyork.com/on-air/as-seen-on/nj-college-roommates-connect-frontline-workers-with-essentials/2402189/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={nbc} alt="wnbc logo" style={logoStyling} />
            </a>
          </Col>
          <Col className="my-auto">
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
          <Col className="my-auto">
            <a
              href="https://twitter.com/CuomoPrimeTime/status/1257492367138942978"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={cnn} alt="CNN logo" style={logoStyling} />
            </a>
          </Col>
          <Col className="my-auto">
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
    </>
  );
}
