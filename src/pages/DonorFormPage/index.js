import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Screen,
  Header,
  Subtitle,
  // SubmitButton,
  // ButtonText,
  StyledInput, StyledInputMobile,
  StyledLabel,
  StyledTitle,
  StyledText,
  StyledButton,
  // StyledContainer,
  RowFlex,
  ColumnFlex,
  CenteredFlex,
  CapitalizedButton,
  SmallerScreenAlternative,
  LargerScreenAlternative,
  // ModalContainer,
  // RowSeparatedFlex,
  // WrappableHeader,
  // SideMenuText,
  RedText,
  Subtext,
  DonorPageHeaderMobile,
  DonorPageSubtitleMobile,
  DonorPageTitleMobile,
  SubtextMobile
} from './styles';
import MatchedPage from '../MatchedPage';
import IconButtonGroup from './components/IconButtonGroup';
import TextButtonGroup from './components/TextButtonGroup';
import { values, items, yesNo, /* donationOptions */ } from './buttonGroupData';
import {
  Form, 
  FormGroup, 
  Container, 
  Row, 
  Col,
} from 'reactstrap';
import USAMap from 'react-usa-map';
import useStep from '../../hooks';
// import closeIcon from '../../assets/icons/close.png';
// import { renderIntoDocument } from 'react-dom/test-utils';
import {
  HeaderMobile,
  SubmitButtonMobile,
  SubtitleMobile,
  TitleMobile,
  RedTextMobile,
    ButtonText
} from "../EWFormPage/styles";

import  WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Montserrat:thin', 'open-serif'],
  }
});

const MAP_GREEN = '#8CC9BA';
const MAP_GRAY = '#d3d3d3';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}


export default function DonorFormPage() {
  const [valueState, setValues] = useState([]);
  const [valueErrorState, setValueError] = useState("");
  const [itemState, setItems] = useState([]);
  const [itemErrorState, setItemError] = useState("");
  const [regionState, setRegions] = useState([]);
  const [repeatDonationState, setRepeatDonation] = useState([]);
  const [repeatDonationErrorState, setRepeatDonationError] = useState("");
  const [cashDonationState, setCashDonation] = useState([]);
  const [modalIsOpen, setModalState] = useState(true);
  const [firstNameState, setFirstName] = useState("");
  const [firstNameErrorState, setFirstNameError] = useState("");
  const [lastNameState, setLastName] = useState("");
  const [lastNameErrorState, setLastNameError] = useState("");
  const [emailState, setEmail] = useState("");
  const [emailErrorState, setEmailError] = useState("");
  const [phoneNumberState, setPhoneNumber] = useState("");
  const [phoneNumberErrorState, setPhoneNumberError] = useState("");
  const [cityState, setCity] = useState("");
  const [cityErrorState, setCityError] = useState("");
  const [stateState, setState] = useState("");
  const [stateErrorState, setStateError] = useState("");
  const [referrerState, setReferrer] = useState("");
  const [otherState, setOther] = useState("");
  const [referrerErrorState, setReferrerError] = useState("");
  const { currentStep, next } = useStep(0);

  const toggle = (value, state) => () => {
    let updateState = state === 'valueState' ? setValues : state === 'itemState' ? setItems : state === 'regionState' ? setRegions : setModalState;
    const prevState = state === 'valueState' ? valueState : state === 'itemState' ? itemState : state === 'regionState' ? regionState : modalIsOpen;
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

  const regions = [
    'Northeast',
    'Midwest',
    'South',
    'West'
  ];

  const selectAllRegions = () => {
    setRegions(regions);
  };

  const selectRegion = (event) => {
    console.log('event', event.target.value);
    const region = event.target.value;
    if (region === 'Anywhere') {
      selectAllRegions();
    } else {
      toggle(event.target.value, 'regionState')();
    }
  }

  const setFormValue = (value, state) => () => {
    let updateState = state === 'firstNameState' ? setFirstName : state === 'lastNameState' ? setLastName : state === 'emailState' ? setEmail : state === 'phoneNumberState' ? setPhoneNumber : state === 'cityState' ? setCity : state === 'stateState' ? setState : state === 'referrerState' ? setReferrer : setOther;
    const updatedState = [value];
    updateState(updatedState);
  };

  const submitForm = () => {
    let referrerInfo;
    if (otherState && !referrerState) {
      referrerInfo = otherState[0];
    } else if (referrerState && !otherState) {
      referrerInfo = referrerState[0];
    } else if (referrerState && otherState) {
      referrerInfo = `${referrerState[0]} ${otherState[0]}`;
    }

    let repeatDonationInfo;
    if (repeatDonationState && repeatDonationState[0] === 'yes') {
      repeatDonationInfo = true;
    } else {
      repeatDonationInfo = false;
    }

    let regionInfo;
    if (regionState.length === 0) {
      regionInfo = regions;
    } else {
      regionInfo = regionState;
    }

    const data = {
      donors: [
        {
          name: {
            first: firstNameState[0],
            last: lastNameState[0],
          },
          email: emailState[0],
          phone: phoneNumberState[0],
          referrer: referrerInfo,
          comments: '',
          consent: true,
          address: {
            city: cityState[0],
            state: stateState[0],
          },
          preferences: valueState,
          regions: regionInfo,
          items: itemState,
          monthlyContribution: repeatDonationInfo,
         }
      ]
    };
     console.log(data);

     axios.post("https://giveessential-286602.ue.r.appspot.com/api/donor", data)
      .then(() => {
        console.log("Post successful!")
        next();
      })
      .catch((error) => {
        console.log("Request failed!")
        console.log(error);
      })
  }

  const validateFirstPage = () => {
    let numErrors = 0;
    if (itemState.length === 0) {
      setItemError("Please specify what items you would like to receive");
      numErrors += 1;
    } else {
      setItemError("");
    }

    if (repeatDonationState.length === 0) {
      setRepeatDonationError("Please indicate whether you'd like to donate repeatedly or just once");
      numErrors += 1;
    } else {
      setRepeatDonationError("");
    }

    if (valueState.length < 2) {
      setValueError("Please specify at least two values");
      numErrors += 1;
    }

    if (itemState.length > 0 && repeatDonationState.length > 0 && valueState.length >= 2) {
      if (regionState === []) {
        selectAllRegions();
      }
      next();
    }
  }

  const validateSecondPage = (event) => {
    event.preventDefault();
    let numErrors = 0;
    if (firstNameState === '') {
      setFirstNameError("Please enter your first name");
      numErrors += 1;
    } else {
      setFirstNameError("");
    }

    if (lastNameState === '') {
      setLastNameError("Please specify your last name");
      numErrors += 1;
    } else {
      setLastNameError("");
    }

    if (emailState === '') {
      setEmailError("Please provide your email");
      numErrors += 1;
    } else {
      setEmailError("");
    }

    if (phoneNumberState === '') {
      setPhoneNumberError("Please enter your phone number");
      numErrors += 1;
    } else {
      setPhoneNumberError("");
    }

    if (cityState === '') {
      setCityError("Please provide your city");
      numErrors += 1;
    } else {
      setCityError("");
    }

    if (stateState === '' || stateState === 'State') {
      setStateError("Please select your state");
      numErrors += 1;
    } else {
      setStateError("");
    }

    if ((referrerState === '' && otherState === '') || (referrerState === 'How did you hear about us?' && otherState === '')) {
      setReferrerError("Please specify your referrer by either selecting it in the dropdown or writing it out in the 'Other' input field");
      numErrors += 1;
    } else {
      setReferrerError("");
    }

    if (firstNameState !== '' && lastNameState !== '' && emailState !== '' && phoneNumberState !== '' && cityState !== '' && stateState !== 'State' && stateState !== '' && ((referrerState !== '' && referrerState !== 'How did you hear about us?') || otherState !== '')) {
      submitForm();
    }
  }

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

  const fillConfig = (region) => {
    return {
      fill: regionState.indexOf(region) !== -1 ? MAP_GREEN: MAP_GRAY
    };
  };

  const statesCustomConfig = {
      'AK': fillConfig('West'),
      'AL': fillConfig('South'),
      'AR': fillConfig('South'),
      'AS': '?',
      'AZ': fillConfig('West'),
      'CA': fillConfig('West'),
      'CO': fillConfig('West'),
      'CT': fillConfig('Northeast'),
      'DC': fillConfig('South'),
      'DE': fillConfig('South'),
      'FL': fillConfig('South'),
      'GA': fillConfig('South'),
      'GU': '?',
      'HI': fillConfig('West'),
      'IA': fillConfig('Midwest'),
      'ID': fillConfig('West'),
      'IL': fillConfig('Midwest'),
      'IN': fillConfig('Midwest'),
      'KS': fillConfig('Midwest'),
      'KY': fillConfig('South'),
      'LA': fillConfig('South'),
      'MA': fillConfig('Northeast'),
      'MD': fillConfig('South'),
      'ME': fillConfig('Northeast'),
      'MI': fillConfig('Midwest'),
      'MN': fillConfig('Midwest'),
      'MO': fillConfig('Midwest'),
      'MS': fillConfig('South'),
      'MT': fillConfig('West'),
      'NC': fillConfig('South'),
      'ND': fillConfig('Midwest'),
      'NE': fillConfig('Midwest'),
      'NH': fillConfig('Northeast'),
      'NJ': fillConfig('Northeast'),
      'NM': fillConfig('West'),
      'NV': fillConfig('West'),
      'NY': fillConfig('Northeast'),
      'OH': fillConfig('Midwest'),
      'OK': fillConfig('South'),
      'OR': fillConfig('West'),
      'PA': fillConfig('Northeast'),
      'PR': '?',
      'RI': fillConfig('Northeast'),
      'SC': fillConfig('South'),
      'SD': fillConfig('Midwest'),
      'TN': fillConfig('South'),
      'TX': fillConfig('South'),
      'UT': fillConfig('West'),
      'VA': fillConfig('South'),
      'VI': '?',
      'VT': fillConfig('Northeast'),
      'WA': fillConfig('West'),
      'WI': fillConfig('Midwest'),
      'WV': fillConfig('South'),
      'WY': fillConfig('West'),
  };

  const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
  }

  const {height, width} = useWindowDimensions();

  const renderStep = () => {
    if (width <420) {
      return (
          <Screen>
            <CenteredFlex>
              {/* <ModalContainer>
              <RowSeparatedFlex>
                <WrappableHeader>Prefer to make a cash donation to an essential worker?</WrappableHeader>
                <img src={closeIcon} alt="Close Buttom" onClick={toggle(false, 'modalIsOpen')}/>
              </RowSeparatedFlex>
              <Subtitle>Your donation will go directly to an essential worker! Additional info text here</Subtitle>
              <TextButtonGroup
                  data={donationOptions}
                  selected={cashDonationState}
                  toggle={singleSelectToggle}
                  state="cashDonationState"
              />
            </ModalContainer> */}
              <RowFlex>
                <ColumnFlex>
                  <CenteredFlex>
                    <DonorPageHeaderMobile>Donor Form</DonorPageHeaderMobile>
                    <DonorPageTitleMobile style={{marginTop: "15px"}}>What do you care about?</DonorPageTitleMobile>
                    <DonorPageSubtitleMobile>Select all that apply (minimum 2)</DonorPageSubtitleMobile>
                    <div style={{paddingLeft: "25px"}}>
                      <IconButtonGroup
                          data={values}
                          selected={valueState}
                          toggle={toggle}
                          state="valueState"
                      />
                    </div>

                    <RedTextMobile>{valueErrorState}</RedTextMobile>
                  </CenteredFlex>
                  <CenteredFlex>
                    <DonorPageTitleMobile>Where in the country would you like to give to?</DonorPageTitleMobile>
                    <DonorPageSubtitleMobile>
                      If no region is selected, we’ll match you with someone from
                      anywhere in the US.
                    </DonorPageSubtitleMobile>
                    <LargerScreenAlternative>
                      <USAMap customize={statesCustomConfig} onClick={mapHandler} width={window.innerWidth * 0.9}/>
                      <CapitalizedButton onClick={selectAllRegions}>I Can Donate Anywhere</CapitalizedButton>
                    </LargerScreenAlternative>
                    <SmallerScreenAlternative>
                      <Col>
                        <FormGroup>
                          <StyledInputMobile type="select" name="select" id="region" onChange={(event) => { selectRegion(event); }}>
                            <option key="anywhere">Anywhere</option>
                            {regions.map((region) => (
                                <option key={region}>{region}</option>
                            ))}
                          </StyledInputMobile>
                        </FormGroup>
                        <SubtitleMobile style={{fontSize: "12px"}}>"West" includes Alaska and Hawaii</SubtitleMobile>
                      </Col>
                    </SmallerScreenAlternative>
                  </CenteredFlex>
                  <CenteredFlex>
                    <DonorPageTitleMobile>What can you give?</DonorPageTitleMobile>
                      <div style={{paddingLeft: "24px", paddingTop: "5px"}}>
                        <IconButtonGroup
                            data={items}
                            selected={itemState}
                            toggle={toggle}
                            state="itemState"
                        />
                      </div>
                    <RedTextMobile>{itemErrorState}</RedTextMobile>
                  </CenteredFlex>
                  <CenteredFlex>
                    <ColumnFlex>
                      <DonorPageTitleMobile>
                        Would you like to donate monthly?
                      </DonorPageTitleMobile>
                      <DonorPageSubtitleMobile>
                        This is a one-time donation to a single essential worker. If you would
                        like to be matched with more essential workers, we would love for you
                        to fill out another form when you're ready to give again!
                      </DonorPageSubtitleMobile>
                      <CenteredFlex style={{marginTop: "-7.5vw", marginBottom: "-13vw"}}>
                        <TextButtonGroup
                            data={yesNo}
                            selected={repeatDonationState}
                            toggle={singleSelectToggle}
                            state="repeatDonationState"
                        />
                      </CenteredFlex>

                      <RedTextMobile>{repeatDonationErrorState}</RedTextMobile>
                    </ColumnFlex>

                    <SubmitButtonMobile
                        onClick={validateFirstPage}
                        // style={{ marginTop: 40, width: '40%' }}
                    >
                      <ButtonText>CONTINUE</ButtonText>
                    </SubmitButtonMobile>
                  </CenteredFlex>
                </ColumnFlex>
              </RowFlex>
            </CenteredFlex>
          </Screen>
      );

    } else {
      switch (currentStep) {
        case 0:
          return (
              <Screen>
                <CenteredFlex>
                  {/* <ModalContainer>
              <RowSeparatedFlex>
                <WrappableHeader>Prefer to make a cash donation to an essential worker?</WrappableHeader>
                <img src={closeIcon} alt="Close Buttom" onClick={toggle(false, 'modalIsOpen')}/>
              </RowSeparatedFlex>
              <Subtitle>Your donation will go directly to an essential worker! Additional info text here</Subtitle>
              <TextButtonGroup
                  data={donationOptions}
                  selected={cashDonationState}
                  toggle={singleSelectToggle}
                  state="cashDonationState"
              />
            </ModalContainer> */}
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
                        <RedText>{valueErrorState}</RedText>
                      </CenteredFlex>
                      <CenteredFlex>
                        <Header>Where in the country would you like to give to?</Header>
                        <Subtitle>
                          If no region is selected, we’ll match you with someone from
                          anywhere in the US.
                        </Subtitle>
                        <LargerScreenAlternative>
                          <USAMap customize={statesCustomConfig} onClick={mapHandler} width={window.innerWidth * 0.9}/>
                          <CapitalizedButton onClick={selectAllRegions}>I Can Donate Anywhere</CapitalizedButton>
                        </LargerScreenAlternative>
                        <SmallerScreenAlternative>
                          <Col>
                            <FormGroup>
                              <StyledInput type="select" name="select" id="region" onChange={(event) => { selectRegion(event); }}>
                                <option key="anywhere">Anywhere</option>
                                {regions.map((region) => (
                                    <option key={region}>{region}</option>
                                ))}
                              </StyledInput>
                            </FormGroup>
                            <Subtext>"West" includes Alaska and Hawaii</Subtext>
                          </Col>
                        </SmallerScreenAlternative>
                      </CenteredFlex>
                      <CenteredFlex>
                        <Header>What can you give?</Header>
                        <IconButtonGroup
                            data={items}
                            selected={itemState}
                            toggle={toggle}
                            state="itemState"
                        />
                        <RedText>{itemErrorState}</RedText>
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
                          <RedText>{repeatDonationErrorState}</RedText>
                        </ColumnFlex>

                        <StyledButton
                            onClick={validateFirstPage}
                            style={{ marginTop: 40, width: '40%' }}
                        >
                          CONTINUE
                        </StyledButton>
                      </CenteredFlex>
                    </ColumnFlex>
                  </RowFlex>
                </CenteredFlex>
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
                            onChange={(event) => { setFormValue(event.target.value, 'firstNameState')(); }}
                            value={firstNameState}
                        />
                      </FormGroup>
                      <RedText>{firstNameErrorState}</RedText>
                    </Col>
                    <Col>
                      <FormGroup>
                        <StyledInput
                            type="name"
                            name="name"
                            id="lastName"
                            placeholder="Last Name"
                            onChange={(event) => { setFormValue(event.target.value, 'lastNameState')(); }}
                        />
                      </FormGroup>
                      <RedText>{lastNameErrorState}</RedText>
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
                            onChange={(event) => { setFormValue(event.target.value, 'emailState')(); }}
                        />
                      </FormGroup>
                      <RedText>{emailErrorState}</RedText>
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
                            onChange={(event) => { setFormValue(event.target.value, 'phoneNumberState')(); }}
                        />
                      </FormGroup>
                      <RedText>{phoneNumberErrorState}</RedText>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <StyledInput name="text" id="city" placeholder="City" onChange={(event) => { setFormValue(event.target.value, 'cityState')(); }} />
                      </FormGroup>
                      <RedText>{cityErrorState}</RedText>
                    </Col>
                    <Col>
                      <StyledInput type="select" name="select" id="state" onChange={(event) => { setFormValue(event.target.value, 'stateState')(); }}>
                        {states.map((us_state) => (
                            <option key={us_state}>{us_state}</option>
                        ))}
                      </StyledInput>
                      <RedText>{stateErrorState}</RedText>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <StyledInput type="select" name="select" id="network" onChange={(event) => { setFormValue(event.target.value, 'referrerState')(); }}>
                          {referrals.map((ref) => (
                              <option key={ref}>{ref}</option>
                          ))}
                        </StyledInput>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="d-flex">
                      <StyledLabel htmlFor="other">Other: </StyledLabel>
                      <StyledInput noBorder underLine name="other" id="other" onChange={(event) => { setFormValue(event.target.value, 'otherState')(); }}/>
                    </Col>
                  </Row>
                  <RedText>{referrerErrorState}</RedText>
                  <ColumnFlex>
                    <StyledText>Legal text here</StyledText>
                    <CenteredFlex>
                      <StyledButton onClick={validateSecondPage}>SUBMIT</StyledButton>
                    </CenteredFlex>
                    <StyledText>
                      By submitting, you agree to our{' '}
                      <strong>terms and conditions</strong>
                    </StyledText>
                  </ColumnFlex>
                </Form>
              </Container>
          );
        case 2:
          return <MatchedPage />;
        default:
          return <p>An error occurred.</p>;
      }
    }

  };
  return <Screen style={{ paddingBottom: 20 }}>{renderStep()}</Screen>;
}