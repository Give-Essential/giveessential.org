import React from "react";
import { StyledButton } from "./styles";
import  WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Montserrat', 'open-serif'],
  }
});

export default function HomePageButton(props) {
  return (
    <StyledButton primary={props.primary} {...props}>
      {props.children}
    </StyledButton>
  );
}
