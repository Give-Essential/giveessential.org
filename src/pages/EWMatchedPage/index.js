import React from 'react';

import {
  BackgroundContainer,
  Dot,
  HeaderText,
  ListText,
  StyledIcon,
  Donation,
  NextSteps,
} from './styles';

import { Row, Col } from 'reactstrap';


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
    hand,
    ' You can check the progress of your package through your tracking number.',
  ],
  [
    tracking,
    'Enjoy your care package! We appreciate you and all you do so much!',
  ],
];

export default function EWMatchedPage() {
  return (
    <BackgroundContainer>
      <HeaderText>
        You’ve been matched! Look out for an email from
        matches@giveessential.org for more information :)
      </HeaderText>
      <NextSteps>Next Steps</NextSteps>
      <div style={{ padding: '0% 12%' }}>
        {nextStepsList.map((e, i) => (
          // <RowFlex style={{ display: "flex", margin: "2% 6%" }}>
          <Row style={{ margin: '3% 3%' }} classname="my-auto">
            <Col xs="2">
              <Dot color={'#8CC9BA'}>
                <h2>{i + 1}</h2>
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
    </BackgroundContainer>
  );
}