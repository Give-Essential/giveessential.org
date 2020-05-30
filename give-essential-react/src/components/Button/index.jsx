import React from "react";

import styled, { css } from "styled-components";

const StyledButton = styled.button`
    width: 25%;
    border-radius: 6px;
    color: #F3D04E
    padding: 0.5%

    ${(props) =>
      props.primary &&
      css`
        color: #fd8e7b;
      `}
`;

export default function HomePageButton() {
  return <StyledButton />;
}
