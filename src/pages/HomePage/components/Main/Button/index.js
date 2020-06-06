import React from "react";
import { StyledButton } from "./styles";

export default function HomePageButton(props) {
  return (
    <StyledButton primary={props.primary} {...props}>
      {props.children}
    </StyledButton>
  );
}
