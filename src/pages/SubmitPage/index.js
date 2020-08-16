import React from 'react';

import { Form, FormGroup, Container, Row, Col } from 'reactstrap';
import {
  StyledInput,
  StyledLabel,
  StyledTitle,
  StyledText,
  StyledButton,
  StyledContainer,
  RowFlex,
} from './styles';
const states = [
  'State',
  'Alaska',
  'Alabama',
  'Arkansas',
  'American Samoa',
  'Arizona',
  'California',
  'Colorado',
  'Connecticut',
  'District of Columbia',
  'Delaware',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Iowa',
  'Idaho',
  'Illinois',
  'Indiana',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Massachusetts',
  'Maryland',
  'Maine',
  'Michigan',
  'Minnesota',
  'Missouri',
  'Mississippi',
  'Montana',
  'North Carolina',
  'North Dakota',
  'Nebraska',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'Nevada',
  'New York',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Virginia',
  'Virgin Islands',
  'Vermont',
  'Washington',
  'Wisconsin',
  'West Virginia',
  'Wyoming',
];

const referrals = [
  'How did you hear about us?',
  'Friend or Family',
  'Social Media',
  'News',
  'Other',
];

export default function SubmitPage({ next }) {
  return (
    <Container className="hi">
      <StyledTitle>
        <span>Please fill out your contact info so we can</span>
        <span>send your match to you!</span>
      </StyledTitle>
      <Form>
        <Row>
          <Col>
            <FormGroup>
              <StyledInput
                type="name"
                name="name"
                id="firstName"
                placeholder="First Name"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <StyledInput
                type="name"
                name="name"
                id="lastName"
                placeholder="Last Name"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <StyledInput
                t
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <StyledInput
                type="number"
                name="number"
                id="phoneNumber"
                placeholder="Phone Number"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <StyledInput name="text" id="city" placeholder="City" />
            </FormGroup>
          </Col>
          <Col>
            <StyledInput type="select" name="select" id="state">
              {states.map((us_state) => (
                <option>{us_state}</option>
              ))}
            </StyledInput>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <StyledInput type="select" name="select" id="network">
                {referrals.map((ref) => (
                  <option>{ref}</option>
                ))}
              </StyledInput>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex">
            <StyledLabel htmlFor="other">Other: </StyledLabel>
            <StyledInput noBorder underLine name="other" id="other" />
          </Col>
        </Row>
        <RowFlex>
          <StyledContainer>
            <StyledText>Legal text here</StyledText>
            <StyledButton onClick={next}>SUBMIT</StyledButton>
            <StyledText>
              By submitting, you agree to our{' '}
              <strong>terms and conditions</strong>
            </StyledText>
          </StyledContainer>
        </RowFlex>
      </Form>
    </Container>
  );
}