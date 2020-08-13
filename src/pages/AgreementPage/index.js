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
import IconButton from "./components/IconButton";
import IconButtonGroup from "./components/IconButtonGroup";
import { values, items } from "./buttonGroupData";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Label,
  Input
} from "reactstrap";
import women from "../../assets/icons/values/women.png";
import cleaning from "../../assets/icons/items/cleaning.png";
import feminine from "../../assets/icons/items/feminine.png";
import gift from "../../assets/icons/items/gift.png";
import hygiene from "../../assets/icons/items/hygiene.png";
import toys from "../../assets/icons/items/toys.png";
import masks from "../../assets/icons/items/masks.png";

export default function AgreementPage(props, {next}) {

  return (
    <Screen style={{ marginTop: 100 }}>
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
        <SubmitButton style={{ marginTop: 40, width: "40%" }} onClick={next}>
          <ButtonText>CONTINUE</ButtonText>
        </SubmitButton>
      </CenteredFlex>
    </Screen>
  );
}
