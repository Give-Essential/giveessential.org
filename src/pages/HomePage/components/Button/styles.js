import styled from "styled-components";

export const StyledButton = styled.button`
  width: 25%;
  border-radius: 6px;
  color: ${(props) => (props.primary ? "#fd8e7b" : "#f3d04e")};
  padding: 0.5%;
`;
