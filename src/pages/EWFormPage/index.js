import React, { useState } from "react";
import {
  Screen,
  CenteredFlex,
  Header,
  Title,
  Subtitle,
  SubmitButton,
  ButtonText,
  Text,
  SmallButton,
  SmallButtonText
} from "./styles";
import IconButtonGroup from "./components/IconButtonGroup";
import { items } from "./buttonGroupData";
import {
  Input
} from "reactstrap";
import useStep from '../../hooks';
import EWSubmitPage from '../EWSubmitPage';
import EWMatchedPage from '../EWMatchedPage';

export default function EssentialWorkerFormPage(props) {
  const [valueState, setValues] = useState([]);
  const [itemState, setItems] = useState([]);
  const [formData, setFormData] = useState({})
  const { currentStep, next } = useStep(0);
  // const { selected, state } = props;

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

  // https://giveessential.uc.r.appspot.com/api/ew

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
                style={{ width: "40vw", color: "#8CC9BA", borderRadius: 10, border: "2px solid #8CC9BA", backgroundColor: "#FFF" }} 
                type="text"
                name="circumstances"
                placeholder="circumstances"
                onChange={updateInput}
                value={formData.circumstances || ''}
                />
            </CenteredFlex>
            <CenteredFlex>
              <Title>Can we anonymously share your story on Give Essential media?</Title>
              <Text>We want to share stories to help reach donors. Stories will be completely anonymous on our public media; all personal identification information will be removed (name, company name, address, etc).</Text>
              <SmallButton style={{ marginTop: 20, width: "20%" }}>
                <SmallButtonText>Yes</SmallButtonText>
              </SmallButton>
              <SmallButton style={{ marginTop: 20, width: "20%" }}>
                <SmallButtonText>No</SmallButtonText>
              </SmallButton>
            </CenteredFlex>
            <CenteredFlex>
              <Title>Any additional notes or comments?</Title>
              <Input 
                style={{ width: "40vw", color: "#8CC9BA", borderRadius: 10, border: "2px solid #8CC9BA", backgroundColor: "#FFF" }} 
                type="comments"
                name="comments"
                placeholder="Comments"
                onChange={updateInput}
                value={formData.comments || ''}/>
      {" "}
              <SubmitButton style={{ marginTop: 40, width: "40%" }} onClick={next}>
                <ButtonText>CONTINUE</ButtonText>
              </SubmitButton>
            </CenteredFlex>
          </Screen>
    );
      case 1:
        return (
          <Screen style={{ paddingTop: 50 }}>
          <CenteredFlex>
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
            <Title>Please specify what types of cleaning supplies would be most helpful for you to receive.</Title>
            <Input type="textarea" name="text" style={{ width: "40vw", color: "#8CC9BA", borderRadius: 10, border: "2px solid #8CC9BA", backgroundColor: "#FFF" }} />
          </CenteredFlex>
          <CenteredFlex>
            <Title>Please provide a description of your circumstances so we can better understand what you might need.</Title>
            <Input type="textarea" name="text" style={{ width: "40vw", color: "#8CC9BA", borderRadius: 10, border: "2px solid #8CC9BA", backgroundColor: "#FFF" }} />
          </CenteredFlex>
          <CenteredFlex>
            <Title>Can we anonymously share your story on Give Essential media?</Title>
            <Text>We want to share stories to help reach donors. Stories will be completely anonymous on our public media; all personal identification information will be removed (name, company name, address, etc).</Text>
            <SmallButton style={{ marginTop: 20, width: "20%" }}>
              <SmallButtonText>Yes</SmallButtonText>
            </SmallButton>
            <SmallButton style={{ marginTop: 20, width: "20%" }}>
              <SmallButtonText>No</SmallButtonText>
            </SmallButton>
          </CenteredFlex>
          <CenteredFlex>
            <Title>Any additional notes or comments?</Title>
            <Input type="textarea" name="text" style={{ width: "40vw", color: "#8CC9BA", borderRadius: 10, border: "2px solid #8CC9BA", backgroundColor: "#FFF" }} />
    {" "}
            <SubmitButton style={{ marginTop: 40, width: "40%" }} onClick={next}>
              <ButtonText>CONTINUE</ButtonText>
            </SubmitButton>
          </CenteredFlex>
        </Screen>
      );
      case 2:
        return <EWSubmitPage next={next} />;
      case 3:
        return (
          <Screen style={{ paddingTop: 50 }}>
          <CenteredFlex>
            <Subtitle>Some final disclaimers before we match you!</Subtitle>
          </CenteredFlex>
          <CenteredFlex>
            <Title>I consent to Give Essential to sharing the information I have provided about my circumstances with my donor.</Title>
            <Text>This will help them get a better idea of what types of gifts to send. Company names will be removed, and donors have pledged to only use the information they're given for the sole purpose of sending a gift. In our experience, donors are more likely to send a package when we are allowed to share your story with them</Text>
          </CenteredFlex>
          <CenteredFlex>
            <Title>I understand that my donor will receive my first and last name, email address, mailing address, and if I consented, the story that I shared. I understand that these items are publicly sourced from un-vetted individuals, including individuals who themselves may be carrying COVID-19, and take full responsibility for the quality, efficacy, and safety of these donations and their use, and full responsibility for the information I have shared. </Title>
            <Text>Give Essential connects people with publicly crowd-sourced donation items to essential workers during this time of critical shortage and inaccessibility. All items are being donated and are provided without any warranty, guarantee, or certification of fitness for purpose. Nothing in this website or in the course of providing these donations establishes a legal obligation or promise on Give Essential's behalf.</Text>
          </CenteredFlex>
          <CenteredFlex>
            <SubmitButton style={{ marginTop: 40, width: "40%" }} onClick={next} type="submit">
              <ButtonText>SUBMIT</ButtonText>
            </SubmitButton>
          </CenteredFlex>
        </Screen>
        );
      case 4:
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
