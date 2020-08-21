import React, { useState, useCallback } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Screen,
  CenteredFlex,
  Header,
  Title,
  Subtitle,
  SubmitButton,
  ButtonText,
  Text,
  PinkSubmitButton,
  SmallButton,
  SmallButtonText,
  StyledInput,
  StyledLabel,
  StyledText,
  StyledButton,
  RowFlex,
  ColumnFlex,
  SmallText
} from "./styles";
import { Form, FormGroup, Container, Row, Col, Label, Input } from 'reactstrap';
import IconButtonGroup from "./components/IconButtonGroup";
import SmallButtonGroup from "./components/SmallButtonGroup";
import { items, categories, occupations } from "./buttonGroupData";
import useStep from '../../hooks';
import EWMatchedPage from '../EWMatchedPage';

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


export default function EssentialWorkerFormPage() {
  const [valueState, setValues] = useState([]);
  const [itemState, setItems] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [referrer, setReferrer] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [circumstances, setCircumstances] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [employer, setEmployer] = useState("");
  const [industry, setIndustry] = useState("");
  const { currentStep, next } = useStep(0);


  const onFirstNameChange = (event) => {
    setFirstName(event.target.value);
    console.log(firstName);
  };

  const onLastNameChange = (event) => {
    setLastName(event.target.value);
    console.log(firstName);
    console.log(lastName);
  };

  const onEmailChange = (event) => {
    setEmail(event.target.value);
    console.log(email);
  };

  const onPhoneChange = (event) => {
    setPhone(event.target.value);
    console.log(phone);
  };

  const onReferrerChange = (event) => {
    setReferrer(event.target.value);
    console.log(referrer);
  };

  const onStreetChange = (event) => {
    setStreet(event.target.value);
    console.log(street);
  };

  const onCityChange = (event) => {
    setCity(event.target.value);
    console.log(city);
  };

  const onStateChange = (event) => {
    setState(event.target.value);
    console.log(state);
  };

  const onZipChange = (event) => {
    setZip(event.target.value);
    console.log(zip);
  };

  const onCircumstancesChange = (event) => {
    setCircumstances(event.target.value);
    console.log(circumstances);
  };

  const onJobTitleChange = (event) => {
    setJobTitle(event.target.value);
    console.log(jobTitle);
  };

  const onEmployerChange = (event) => {
    setEmployer(event.target.value);
    console.log(employer);
  };

  const onIndustryChange = (event) => {
    setIndustry(event.target.value);
    console.log(industry);
  };


  const onSubmit = e => {
    e.preventDefault();

    const newUser = 
    {
      "ews": [
        {
          "name": {
            "first": firstName,
            "last": lastName
          },
          "email": email,
          "phone": phone,
          "referrer": referrer,
          "comments": "",
          "consent": true,
          "address": {
            "street": street,
            "city": city,
            "state": state,
            "zip": zip
          },
          "items": [
            {
              "type": "cleaning",
              "desc": "blah, clorox wipes."
            }
          ],
          "circumstances": circumstances,
          "categories": [
            "housingInsecure",
            "student"
          ],
          "occupation": {
            "jobTitle": jobTitle,
            "employer": employer,
            "industry": industry,
            "other": "",
            "proof": "someurl"
          },
          "share": true
        }
      ]
    };

    axios
      .post("https://giveessential-286602.ue.r.appspot.com/api/ew", newUser)
      .then(() => {
        console.log("Post successful!")
      })
      .catch(() => {
        console.log("Request failed!")
      })
      window.location.href = "/essential-worker-matched";
  };

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

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <Screen style={{ paddingBottom: 10 }}>
            <CenteredFlex>
              <Header>Essential Worker Form</Header>
              <Subtitle>The following questions ask about which items you need. 
                We will pass this information along to your match so that they are able 
                to send an appropriate and helpful gift.</Subtitle>
              <Title>What types of items do you need?</Title>
                <IconButtonGroup
                data={items}
                selected={itemState}
                toggle={toggle}
                state="itemState"
              />
            </CenteredFlex>
            <CenteredFlex>
              <Title>Please provide a description of your circumstances so we can better understand what you might need.</Title>
              <Input 
                style={{ width: "55vw", color: "#8CC9BA", borderRadius: 10, border: "2px solid #8CC9BA", backgroundColor: "#FFF", height: "15vh" }} 
                type="textarea"
                name="circumstances"
                onChange={onCircumstancesChange}
                value={circumstances}
                placeholder="Are you a grocery shopper who needs help with gas? Are you a single mother who needs activities for her kids? Feel free to tell us anything about your situation and the items that you need so that we can better help you."
                />
            </CenteredFlex>
            <CenteredFlex>
              <Title>Can we anonymously share your story on Give Essential media?</Title>
              <Text>We want to share stories to help reach donors. Stories will be completely anonymous on our public media; all personal identification information will be removed (name, company name, address, etc).</Text>
            </CenteredFlex>
            <SmallButtonGroup
                selected={itemState}
                toggle={toggle}
                state="itemState"
              />
            <CenteredFlex>
              <Title>Any additional notes or comments?</Title>
              <Input 
                style={{ width: "55vw", color: "#8CC9BA", borderRadius: 10, border: "2px solid #8CC9BA", backgroundColor: "#FFF" }} 
                type="comments"
                name="comments"
                placeholder="Comments"
              />
      {" "}
              <SubmitButton style={{ marginTop: 40}} onClick={next}>
                <ButtonText>CONTINUE</ButtonText>
              </SubmitButton>
            </CenteredFlex>
          </Screen>
    );
      case 1:
        return (
          <Container className="hi" style={{ paddingTop: 50, paddingLeft: "12%", paddingRight: "12%" }}>
          <Subtitle>
          The following questions ask for your contact information and about your background. Your contact information is used to facilitate the match. Your background is used to create a more meaningful match between you and your donor — we've found this results in more personalized donations!
          </Subtitle>
          <Form style={{ paddingTop: 10 }} >
            <Text>BASIC INFO</Text>
            <Row>
              <Col>
                <FormGroup>
                  <StyledInput
                    type="name"
                    name="name"
                    onChange={onFirstNameChange}
                    value={firstName}
                    id="setFirstName"
                    placeholder="First Name"
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <StyledInput
                    type="name"
                    name="name"
                    onChange={onLastNameChange}
                    value={lastName}
                    id="setLastName"
                    placeholder="Last Name"
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
                    onChange={onEmailChange}
                    value={email}
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
                    onChange={onPhoneChange}
                    value={phone}
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
                    onChange={onStreetChange}
                    value={street}
                    id="mailingAddress"
                    placeholder="Mailing Address"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <StyledInput 
                    name="text" 
                    onChange={onCityChange}
                    value={city}
                    id="city" 
                    placeholder="City" />
                </FormGroup>
              </Col>
              <Col>
                <StyledInput 
                  type="select" 
                  name="select" 
                  onChange={onStateChange}
                  value={state}
                  id="state">
                  {states.map((us_state) => (
                    <option key={us_state}>{us_state}</option>
                  ))}
                </StyledInput>
              </Col>
              <Col>
                <FormGroup>
                  <StyledInput 
                    name="text" 
                    onChange={onZipChange}
                    value={zip}
                    id="zip" 
                    placeholder="Zip Code" />
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
                    onChange={onJobTitleChange}
                    value={jobTitle}
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
                    type="employer"
                    name="employer"
                    onChange={onEmployerChange}
                    value={employer}
                    id="employer"
                    placeholder="Employer/Institution"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex">
                <StyledText htmlFor="other">What industry do you work in?</StyledText>
              </Col>
            </Row>
            <Row>
              <IconButtonGroup
                    data={occupations}
                    selected={itemState}
                    toggle={toggle}
                    onChange={onIndustryChange}
                    value={industry}
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
                    onChange={onReferrerChange}
                    value={referrer}
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
      case 2:
        return (
          <Screen style={{ paddingTop: 50 }}>
          <CenteredFlex>
            <Subtitle>Some final disclaimers before we match you!</Subtitle>
          </CenteredFlex>
          <CenteredFlex>
            <Label check style={{ width: "55vw", paddingTop: "2%" }}>
              <Input type="checkbox" />{' '}
              <b>I consent to Give Essential to sharing the information I have provided about my circumstances with my donor.</b>
            </Label>
            <Text>This will help them get a better idea of what types of gifts to send. Company names will be removed, and donors have pledged to only use the information they're given for the sole purpose of sending a gift. In our experience, donors are more likely to send a package when we are allowed to share your story with them</Text>
          </CenteredFlex>
          <CenteredFlex>
            <Label check style={{ width: "55vw", paddingTop: "2%"  }}>
              <Input type="checkbox" />{' '}
              <b>I understand that my donor will receive my first and last name, email address, mailing address, and if I consented, the story that I shared. I understand that these items are publicly sourced from un-vetted individuals, including individuals who themselves may be carrying COVID-19, and take full responsibility for the quality, efficacy, and safety of these donations and their use, and full responsibility for the information I have shared. </b>
            </Label>
            <Text>Give Essential connects people with publicly crowd-sourced donation items to essential workers during this time of critical shortage and inaccessibility. All items are being donated and are provided without any warranty, guarantee, or certification of fitness for purpose. Nothing in this website or in the course of providing these donations establishes a legal obligation or promise on Give Essential's behalf.</Text>
          </CenteredFlex>
          <CenteredFlex>
            <PinkSubmitButton style={{ marginTop: 40 }} onClick={onSubmit}>
              <ButtonText>SUBMIT</ButtonText>
            </PinkSubmitButton>
          </CenteredFlex>
        </Screen>
        );
      case 3:
        return <EWMatchedPage />;
      default:
        return <p>WIP</p>;
    }
  };
  
  return (
    <Screen style={{ paddingBottom: 50 }}>
      <form>
        {renderStep()}
      </form>
    </Screen>
  );
}
