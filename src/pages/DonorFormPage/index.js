import React, { useState } from 'react';
import {
  Screen,
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
  ColumnFlex,
  CenteredFlex,
  CapitalizedButton,
  // SideMenuText,
} from './styles';
import MatchedPage from '../MatchedPage';
import IconButtonGroup from './components/IconButtonGroup';
import TextButtonGroup from './components/TextButtonGroup';
import { values, items, yesNo, donationOptions } from './buttonGroupData';
import {
  Form, 
  FormGroup, 
  Container, 
  Row, 
  Col,
} from 'reactstrap';
import USAMap from 'react-usa-map';
import useStep from '../../hooks';

const MAP_GREEN = '#8CC9BA';
const MAP_GRAY = '#d3d3d3';

export default function DonorFormPage() {
  const [valueState, setValues] = useState([]);
  const [itemState, setItems] = useState([]);
  const [regionState, setRegion] = useState([]);
  const [repeatDonationState, setRepeatDonation] = useState([]);
  const [cashDonationState, setCashDonation] = useState([]);
  const { currentStep, next } = useStep(0);

  const toggle = (value, state) => () => {
    let updateState = state === 'valueState' ? setValues : 'itemState' ? setItems : setRegion;
    const prevState = state === 'valueState' ? valueState : 'itemState' ? itemState : regionState;
    const i = prevState.indexOf(value);
    const updatedState = [...prevState];
    if (i === -1) {
      updatedState.push(value);
    } else {
      updatedState.splice(i, 1);
    }
    updateState(updatedState);
  };

  const singleSelectToggle = (value, state) => () => {
    let updateState = state === 'repeatDonationState' ? setRepeatDonation : setCashDonation;
    const prevState = state === 'repeatDonationState' ? repeatDonationState : cashDonationState;
    let updatedState;
    if (prevState[0] === value) {
      updatedState = [];
    } else {
      updatedState = [value];
    }
    updateState(updatedState);
  };

  const mapHandler = (event) => {
    toggle(mapRegions[event.target.dataset.name], 'regionState')();
  };

  const selectAllRegions = (event) => {
    for (const region of regions) {
      if (regionState.indexOf(region) === -1) {
        toggle(region, 'regionState')();
      }
    }
  };

  const regions = [
    'Northeast',
    'Midwest',
    'South',
    'West'
  ];

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

  const mapRegions = {
    'AK': 'West',
    'AL': 'South',
    'AR': 'South',
    'AS': '?',
    'AZ': 'West',
    'CA': 'West',
    'CO': 'West',
    'CT': 'Northeast',
    'DC': 'South',
    'DE': 'South',
    'FL': 'South',
    'GA': 'South',
    'GU': '?',
    'HI': 'West',
    'IA': 'Midwest',
    'ID': 'West',
    'IL': 'Midwest',
    'IN': 'Midwest',
    'KS': 'Midwest',
    'KY': 'South',
    'LA': 'South',
    'MA': 'Northeast',
    'MD': 'South',
    'ME': 'Northeast',
    'MI': 'Midwest',
    'MN': 'Midwest',
    'MO': 'Midwest',
    'MS': 'South',
    'MT': 'West',
    'NC': 'South',
    'ND': 'Midwest',
    'NE': 'Midwest',
    'NH': 'Northeast',
    'NJ': 'Northeast',
    'NM': 'West',
    'NV': 'West',
    'NY': 'Northeast',
    'OH': 'Midwest',
    'OK': 'South',
    'OR': 'West',
    'PA': 'Northeast',
    'PR': '?',
    'RI': 'Northeast',
    'SC': 'South',
    'SD': 'Midwest',
    'TN': 'South',
    'TX': 'South',
    'UT': 'West',
    'VA': 'South',
    'VI': '?',
    'VT': 'Northeast',
    'WA': 'West',
    'WI': 'Midwest',
    'WV': 'South',
    'WY': 'West',
  };

  const statesCustomConfig = {
      'AK': {
        fill: regionState.indexOf('West') !== -1 ? MAP_GREEN: MAP_GRAY
      },
      'AL': 'South',
      'AR': 'South',
      'AS': '?',
      'AZ': 'West',
      'CA': 'West',
      'CO': 'West',
      'CT': 'Northeast',
      'DC': 'South',
      'DE': 'South',
      'FL': 'South',
      'GA': 'South',
      'GU': '?',
      'HI': 'West',
      'IA': 'Midwest',
      'ID': 'West',
      'IL': 'Midwest',
      'IN': 'Midwest',
      'KS': 'Midwest',
      'KY': 'South',
      'LA': 'South',
      'MA': 'Northeast',
      'MD': 'South',
      'ME': 'Northeast',
      'MI': 'Midwest',
      'MN': 'Midwest',
      'MO': 'Midwest',
      'MS': 'South',
      'MT': 'West',
      'NC': 'South',
      'ND': 'Midwest',
      'NE': 'Midwest',
      'NH': 'Northeast',
      'NJ': 'Northeast',
      'NM': 'West',
      'NV': 'West',
      'NY': 'Northeast',
      'OH': 'Midwest',
      'OK': 'South',
      'OR': 'West',
      'PA': 'Northeast',
      'PR': '?',
      'RI': 'Northeast',
      'SC': 'South',
      'SD': 'Midwest',
      'TN': 'South',
      'TX': 'South',
      'UT': 'West',
      'VA': 'South',
      'VI': '?',
      'VT': 'Northeast',
      'WA': 'West',
      'WI': 'Midwest',
      'WV': 'South',
      'WY': 'West',
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <Screen>
          <RowFlex>
            <ColumnFlex>
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
                <USAMap customize={statesCustomConfig} onClick={mapHandler} width={window.innerWidth * 0.9}/>
                <CapitalizedButton onClick={selectAllRegions} >I Can Donate Anywhere</CapitalizedButton>
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
              <ColumnFlex>
                <Header>
                  Would you like to donate monthly?
                </Header>
                <Subtitle>
                This is a one-time donation to a single essential worker. If you would 
                like to be matched with more essential workers, we would love for you 
                to fill out another form when you're ready to give again!
                </Subtitle>
                <TextButtonGroup
                data={yesNo}
                selected={repeatDonationState}
                toggle={singleSelectToggle}
                state="repeatDonationState"
              />
              </ColumnFlex>
        
                <StyledButton
                  onClick={next}
                  style={{ marginTop: 40, width: '40%' }}
                >
                  CONTINUE
                </StyledButton>
                </CenteredFlex>
            </ColumnFlex>
            </RowFlex>
          </Screen>
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