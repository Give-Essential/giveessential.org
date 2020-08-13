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
  Input
} from "reactstrap";
import women from "../../assets/icons/values/women.png";
import cleaning from "../../assets/icons/items/cleaning.png";
import feminine from "../../assets/icons/items/feminine.png";
import gift from "../../assets/icons/items/gift.png";
import hygiene from "../../assets/icons/items/hygiene.png";
import toys from "../../assets/icons/items/toys.png";
import masks from "../../assets/icons/items/masks.png";

export default function ChoiceFormPage(props, { next }) {
  const [valueState, setValues] = useState([]);
  const [itemState, setItems] = useState([]);
  const { selected, state } = props;

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

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

  const mapHandler = (event) => {
    alert(event.target.dataset.name);
  };

  return (
    <Screen style={{ paddingBottom: 200 }}>
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
}
