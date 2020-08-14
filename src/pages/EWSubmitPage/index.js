import React, { useState } from 'react';

import { Form, FormGroup, Container, Row, Col } from 'reactstrap';
import {
  StyledInput,
  StyledLabel,
  StyledTitle,
  StyledText,
  StyledButton,
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

export default function EWSubmitPage({ next }) {
  const [formData, setFormData] = useState({})

  const updateInput = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = event => {
    event.preventDefault()
    setFormData({
      circumstances: '',
      consent: '',
      comments: '',
      message: '',
    })
  }

  return (
    <Container className="hi" style={{ padding: 50 }}>
      <StyledText>
      The following questions ask for your contact information and about your background. Your contact information is used to facilitate the match. Your background is used to create a more meaningful match between you and your donor — we've found this results in more personalized donations!
      </StyledText>
      <Form>
        <Row>
          <Col>
            <FormGroup>
              <StyledInput
                type="name"
                name="name"
                id="firstName"
                placeholder="First Name"
                onChange={updateInput}
                value={formData.first || ''}
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
                onChange={updateInput}
                value={formData.last || ''}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <StyledInput
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={updateInput}
                value={formData.last || ''}
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
        <Row>
          <Col>
            <FormGroup>
              <StyledInput
                type="jobtitle"
                name="jobtitle"
                id="jobtitle"
                placeholder="Job Title"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <StyledInput
                type="institution"
                name="institution"
                id="institution"
                placeholder="Institution/Company"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <StyledInput
                type="hear"
                name="hear"
                id="hear"
                placeholder="How did you hear about us?"
              />
            </FormGroup>
          </Col>
        </Row>
        <RowFlex>
          <Container>
            <StyledText>Legal text here</StyledText>
            <StyledButton onClick={next}>CONTINUE</StyledButton>
            <StyledText>
              By continuing, you agree to our{' '}
              <strong>terms and conditions</strong>
            </StyledText>
          </Container>
        </RowFlex>
      </Form>
    </Container>
  );
}