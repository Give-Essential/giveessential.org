import React, { useState } from 'react';
import {
  Screen,
  CenteredFlex,
  Header,
  Subtitle,
  SubmitButton,
  ButtonText,
  StyledInput,
  StyledLabel,
  StyledTitle,
  StyledText,
  StyledButton,
  StyledContainer,
  RowFlex,
} from './styles';
import SubmitPage from '../SubmitPage';
import MatchedPage from '../MatchedPage';
import IconButtonGroup from './components/IconButtonGroup';
import { values, items } from './buttonGroupData';
import {
  Form, 
  FormGroup, 
  Container, 
  Row, 
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import USAMap from 'react-usa-map';
import useStep from '../../hooks';

export default function DonorFormPage() {
  const [valueState, setValues] = useState([]);
  const [itemState, setItems] = useState([]);
  const { currentStep, next } = useStep(0);

  const toggle = (value, state) => () => {
    let updateState = state === 'valueState' ? setValues : setItems;
    const prevState = state === 'valueState' ? valueState : itemState;
    const i = prevState.indexOf(value);
    const updatedState = [...prevState];

    if (i === -1) {
      updatedState.push(value);
    } else {
      updatedState.splice(i, 1);
    }
    updateState(updatedState);
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);
  const mapHandler = (event) => {
    alert(event.target.dataset.name);
  };

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

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <>
            <CenteredFlex>
              <Header>What do you care about?</Header>
              <Subtitle>Select all that apply (minimum 2)</Subtitle>
              <IconButtonGroup
                data={values}
                selected={valueState}
                toggle={toggle}
                state="valueState"
              />
            </CenteredFlex>
            <CenteredFlex>
              <Header>Where in the country would you like to give to?</Header>
              <Subtitle>
                If no region is selected, we’ll match you with someone from
                anywhere in the US.
              </Subtitle>
              <USAMap onClick={mapHandler} />
            </CenteredFlex>
            <CenteredFlex>
              <Header>What can you give?</Header>
              <IconButtonGroup
                data={items}
                selected={itemState}
                toggle={toggle}
                state="itemState"
              />
            </CenteredFlex>
            <CenteredFlex>
              <Header>
                How many essential workers would you like to help?
              </Header>
              <Subtitle>
                This is a one-time donation and we've set an upper limit of 3
                matches based on feedback from previous donors. If you would
                like to be matched with more essential workers after the first
                three, we would love for you to fill out another form when
                you're ready to give again!
              </Subtitle>
              <Dropdown
                style={{ marginTop: 40, width: '40vw' }}
                isOpen={dropdownOpen}
                toggle={toggleDropdown}
              >
                <DropdownToggle
                  caret
                  style={{
                    paddingRight: '80%',
                    color: '#8CC9BA',
                    borderRadius: 10,
                    border: '2px solid #8CC9BA',
                    backgroundColor: '#FFF',
                  }}
                >
                  Select one
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>1</DropdownItem>
                  <DropdownItem>2</DropdownItem>
                  <DropdownItem>3</DropdownItem>
                </DropdownMenu>
              </Dropdown>{' '}
              <SubmitButton
                onClick={next}
                style={{ marginTop: 40, width: '40%' }}
              >
                <ButtonText>CONTINUE</ButtonText>
              </SubmitButton>
            </CenteredFlex>
          </>
        );
      case 1:
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
      case 2:
        return <MatchedPage />;
      default:
        return <p>WIP</p>;
    }
  };
  return <Screen style={{ paddingBottom: 20 }}>{renderStep()}</Screen>;
}