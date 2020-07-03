import React from 'react';

import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container,
  Row,
  Col,
} from 'reactstrap';

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

export default function SubmitPage() {
  return (
    <>
      <div>
        Please fill out your contact info so we can send your match to you!{' '}
      </div>
      <Container>
        <Form>
          <Row>
            <Col>
              <FormGroup>
                <Input
                  type="name"
                  name="name"
                  id="firstName"
                  placeholder="First Name"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Input
                  type="name"
                  name="name"
                  id="lastName"
                  placeholder="Last Name"
                />
              </FormGroup>
            </Col>
          </Row>
        </Form>
        <Row>
          <Col>
            <FormGroup>
              <Input type="email" name="email" id="email" placeholder="Email" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Input
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
              <Input name="text" id="city" placeholder="City" />
            </FormGroup>
          </Col>
          <Col>
            <Input type="select" name="select" id="state">
              {states.map((us_state) => (
                <option>{us_state}</option>
              ))}
            </Input>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Input type="select" name="select" id="network">
                {referrals.map((ref) => (
                  <option>{ref}</option>
                ))}
              </Input>
            </FormGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
}
