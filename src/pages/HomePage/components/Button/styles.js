import styled from "styled-components";

export const StyledButton = styled.button`
  width: 271;
  height: 83;
  border-radius: 6px;
  border: none;
  text-align: center;
  padding: 15px 32px;
  background-color: ${(props) => (props.primary ? "#fd8e7b" : "#f3d04e")};
  color: #ffffff;
  font-family: "Archivo", sans-serif;
  font-weight: 600;
  margin: 12, 47, 11, 47;
  font-size: 28px;
  line-height: 30px;
  align-items: center;
`;
