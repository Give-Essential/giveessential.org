import React from "react";

import { Link } from "react-router-dom";

import {
  BackgroundContainer,
  RowFlex,
  Dot,
  DotText,
  DotContainer,
  HeaderText,
  ListText,
  StyledIcon,
  Donation,
  NextSteps,
} from "./styles";

import { Row, Col, Container } from "reactstrap";

import Button from "./components/Button";

// SVG Imports
import mail from "./Icons/mail.svg";
import gift from "./Icons/gift.svg";
import tracking from "./Icons/tracking.svg";
import hand from "./Icons/hand.svg";

const nextStepsList = [
  [
    mail,
    " Read through the email from matches@giveessential.org for more information on your matches. Make sure to also check your spam or junk mail if you cannot find the email",
  ],
  [
    hand,
    " Decide how you want to donate. Options include shipping from home via USPS, visiting the postal office, or buying and shipping directly online.",
  ],
  [gift, "Ship your package!"],
  [
    tracking,
    "Send us the tracking number for your donation through the form that can be found in the email.",
  ],
];

export default function MatchedPage() {
  return (
    <BackgroundContainer>
      <HeaderText>
        You’ve been matched! Look out for an email from
        matches@giveessential.org for more information :)
      </HeaderText>
      <NextSteps>Next Steps</NextSteps>
      <div style={{ padding: "0% 12%" }}>
        {nextStepsList.map((e, i) => (
          // <RowFlex style={{ display: "flex", margin: "2% 6%" }}>
          <Row style={{ margin: "3% 5%" }} classname="my-auto" key={i}>
           <RowFlex>
              <Col xs="2">
                <DotContainer>
                <Dot color={"#8CC9BA"}>
                  <DotText>{i + 1}</DotText>
                </Dot>
                </DotContainer>
              </Col>
              <Col xs="2">
                <StyledIcon src={e[0]} alt="Logo for corresponding Icon" />
              </Col>
            </RowFlex>
            <Col>
              <ListText>{e[1]}</ListText>
            </Col>
          </Row>
        ))}
      </div>
      <Donation>Thank you for your donation!</Donation>
      <Container className="my-auto" style={{ textAlign: "center" }}>
        <Link to="/">
          <Button primary>Return to homepage</Button>
        </Link>
        <Link>
          <Button>Refer a friend</Button>
        </Link>
      </Container>
    </BackgroundContainer>
  );
}
