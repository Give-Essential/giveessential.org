import React, { useState } from 'react';
import { Form, FormGroup, Container, Row, Col, Label, Input } from 'reactstrap';
import {
  StyledInput,
  StyledLabel,
  StyledText,
  StyledButton,
  RowFlex,
  ColumnFlex,
  Subtitle,
  Text,
  SmallText
} from './styles';
import IconButtonGroup from "./components/IconButtonGroup";
import { categories, occupations } from "./buttonGroupData";

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
  const [itemState, setItems] = useState([]);
  const [valueState, setValues] = useState([]);

  const updateInput = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const toggle = (value, state) => () => {
    let updateState = state === "valueState" ? setValues : setItems;
    const prevState = state === "valueState" ? valueState : itemState;
    const i = prevState.indexOf(value);
    const updatedState = [...prevState];
    if (i === -1) {
      updatedState.push(value);
    } else {
      updatedState.splice(i, 1);
    }
    updateState(updatedState);
  };

  return (
    <Container className="hi" style={{ paddingTop: 50, paddingLeft: "12%", paddingRight: "12%" }}>
      <Subtitle>
      The following questions ask for your contact information and about your background. Your contact information is used to facilitate the match. Your background is used to create a more meaningful match between you and your donor — we've found this results in more personalized donations!
      </Subtitle>
      <Form style={{ paddingTop: 10 }}>
        <Text>BASIC INFO</Text>
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
              <StyledInput
                type="mailingaddress"
                name="mailingaddress"
                id="mailingAddress"
                placeholder="Mailing Address"
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
                <option key={us_state}>{us_state}</option>
              ))}
            </StyledInput>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <StyledInput type="select" name="select" id="network">
                {referrals.map((ref) => (
                  <option key={ref}>{ref}</option>
                ))}
              </StyledInput>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex">
            <StyledText htmlFor="other">Do you fall into any of these categories? </StyledText>
          </Col>
        </Row>
        <IconButtonGroup
                data={categories}
                selected={itemState}
                toggle={toggle}
                state="itemState"
              />
        <Row>
          <Col className="d-flex">
            <Text htmlFor="other">OCCUPATION </Text>
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
          <Col className="d-flex">
            <StyledText htmlFor="other">What industry do you work in?</StyledText>
          </Col>
          <IconButtonGroup
                data={occupations}
                selected={itemState}
                toggle={toggle}
                state="itemState"
              />
        </Row>
        <Row>
          <Col>
            <StyledText htmlFor="other">Please provide proof that you are an essential worker</StyledText>
          </Col>
        </Row>
        <Row>
          <Col>
            <SmallText>Examples: a screenshot of an email from your manager (with a date and name), your last paycheck, screenshots from an employee app (your name must be included in the picture), or any other documentation that will help us verify your status. 
                We must have proof in order to match you with a donor.</SmallText>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Input type="file" name="file" id="exampleFile" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex">
            <Text htmlFor="other">OTHER INFO </Text>
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