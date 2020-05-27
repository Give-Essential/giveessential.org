import React, { Fragment } from "react";

import { Container } from "reactstrap";

import adImg from "../assets/images/landing_img.PNG";

const landingContainerStyle = {
  display: "flex",
  margin: "50px",
};

const aboutContainerStyle = {
  // display: "flex",
  margin: "50px",
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

const secTextStyle = {
  fontFamily: "Archivo",
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: "52px",
  lineHeight: "57px",
  display: "flex",
  alignItems: "center",
  color: "#333333",
};

export default function LandingStrip() {
  return (
    <Fragment>
      {/*  Super janky inline styling because it wasn't working for some reason */}
      <Container style={landingContainerStyle} fluid={true}>
        <Container>
          <div style={firstTextStyle}>Give essential is</div>
          <div style={secTextStyle}>
            Helping essential workers get the items they need.
          </div>
        </Container>
        <Container>
          <img src={adImg} alt="Example box given to a worker" />
        </Container>
      </Container>
      {/*  Container for "What we do section" */}
      <Container style={aboutContainerStyle} fluid={true}>
        <div style={secTextStyle}>What we do</div>
        <div>
          We gift basic living items to essential workers on the frontlines of
          the COVID-19 pandemic. If you have any extra stuff lying around, you
          can help!
        </div>
      </Container>
    </Fragment>
  );
}
