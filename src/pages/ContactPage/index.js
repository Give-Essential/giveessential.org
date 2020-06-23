import React from "react";
import { Screen, CenteredFlex, RowFlex, Header, Paragraph, Label } from "./styles";
import {
  Button, Form, FormGroup, Input, FormText 
} from 'reactstrap';
import InfoBox from './components/InfoBox';
import Contact from './components/Contact';
import general from "../../assets/images/general.png";
import press from "../../assets/images/press.png";
import outreach from "../../assets/images/outreach.png";

export default function ContactPage() {
  return (
    <Screen>
      <CenteredFlex style={{ paddingBottom: 52 }}>
        <Header>Contact Us</Header>
        <Paragraph>
        Please email us directly or fill out the contact form. We will be in touch as soon as possible.
        </Paragraph>
        <Label>EMAIL</Label>
        <RowFlex style={{ paddingBottom: 32 }}>
            <InfoBox
              numsrc={general}
              reference="team@giveessential.org"
            >
            </InfoBox>
            <InfoBox
              numsrc={outreach}
              reference="outreach@giveessential.org"
            >
            </InfoBox>
            <InfoBox
              numsrc={press}
              reference="pr@giveessential.org"
              >
            </InfoBox>
          </RowFlex>
        <Label>CONTACT FORM</Label>
        <Form style={{ width: "73%", alignItems: "center" }}>
          <FormGroup>
            <Input type="name" name="name" id="name" placeholder="Name" />
          </FormGroup>
          <FormGroup>
            <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
          </FormGroup>
          <FormGroup>
            <Input type="textarea" name="text" id="exampleText" placeholder="Message" />
          </FormGroup>
          <Button style={{ width: "100%", backgroundColor: "#8CC9BA", color: "#FFFFF", border: 0, textAlign: "center" }}>Submit</Button>
        </Form>
      </CenteredFlex>
      <Contact />
    </Screen>
  );
}
