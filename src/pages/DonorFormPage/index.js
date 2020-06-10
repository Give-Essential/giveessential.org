import React, { useState } from "react";
import { Screen, CenteredFlex, Header, Subtitle } from "./styles";
import IconButtonGroup from "./components/IconButtonGroup";
import { values, items } from "./buttonGroupData";

export default function DonorFormPage() {
  const [valueState, setValues] = useState([]);
  const [itemState, setItems] = useState([]);

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
    <Screen>
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
          If no region is selected, we’ll match you with someone from anywhere
          in the US.
        </Subtitle>
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
        <Header>How many essential workers would you like to help?</Header>
        <Subtitle>
          This is a one-time donation and we've set an upper limit of 3 matches
          based on feedback from previous donors. If you would like to be
          matched with more essential workers after the first three, we would
          love for you to fill out another form when you're ready to give again!
        </Subtitle>
      </CenteredFlex>
    </Screen>
  );
}
