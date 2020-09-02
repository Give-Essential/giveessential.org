import React from 'react';
import { Link } from "react-router-dom";
import {
  BackgroundContainer,
  Dot,
  HeaderText,
  ListText,
  StyledIcon,
  Donation,
  NextSteps,
} from './styles';

import Button from "./components/Button";

import { Row, Col, Container } from 'reactstrap';


// SVG Imports
import mail from '../../assets/icons/mail.png';
import tracking from '../../assets/icons/tracking.png';
import hand from '../../assets/icons/hand.png';

const nextStepsList = [
  [
    mail,
    ' When you’re matched, you’ll get an email from matches@giveessential.org with more information and a tracking number.    ',
  ],
  [
    tracking,
    ' You can check the progress of your package through your tracking number.',
  ],
  [
    hand,
    'Enjoy your care package! We appreciate you and all you do so much!',
  ],
];

export default function EWMatchedPage() {
  return (
    <BackgroundContainer>
      <NextSteps>Next Steps</NextSteps>
      <div style={{ padding: '0% 12%' }}>
        {nextStepsList.map((e, i) => (
          // <RowFlex style={{ display: "flex", margin: "2% 6%" }}>
          <Row style={{ margin: '3% 3%' }} classname="my-auto">
            <Col xs="2">
              <Dot color={'#8CC9BA'}>
                <h3 style={{ margin: '1% 0' }}>{i + 1}</h3>
              </Dot>
            </Col>
            <Col xs="2">
              <StyledIcon src={e[0]} alt="Logo for corresponding Icon" />
            </Col>
            <Col>
              <ListText>{e[1]}</ListText>
            </Col>
          </Row>
        ))}
      </div>
      <Donation>Thank you!</Donation>
      <Container className="my-auto" style={{ textAlign: "center" }}>
        <Link to="/">
          <Button primary>RETURN TO HOMEPAGE</Button>
        </Link>
        <Link>
          <Button>REFER A FRIEND</Button>
        </Link>
      </Container>
    </BackgroundContainer>
  );
}