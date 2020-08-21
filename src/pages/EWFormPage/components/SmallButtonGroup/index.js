import React from "react";
import IconButton from "../IconButton";
import { SmallButton, SmallButtonText, RowFlex } from "../../styles";

export default function SmallButtonGroup(props) {
  const { data, selected, toggle, state } = props;


  return (
    <RowFlex style={{ paddingLeft: "22.5vw" }}>
    <SmallButton>
      <SmallButtonText       
        selected={selected.includes("yes")}
        toggle={toggle}
        state={state}>Yes</SmallButtonText>
    </SmallButton>
    <SmallButton>
      <SmallButtonText 
        selected={selected.includes("no")}
        toggle={toggle}
        state={state}>No</SmallButtonText>
    </SmallButton>
  </RowFlex>
  );
}
