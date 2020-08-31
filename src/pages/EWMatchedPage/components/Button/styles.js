import styled from "styled-components";

export const StyledButton = styled.button`
  width: 28%;
  height: 5%;
  border-radius: 6px;
  border: none;
  text-align: center;
  padding: 15px 32px;
  background-color: ${(props) => (props.primary ? "#fd8e7b" : "#f3d04e")};
  color: #ffffff;
  font-family: "Archivo", sans-serif;
  font-weight: 500;
  margin: 12, 47, 11, 47;
  font-size: 1em;
  line-height: 30px;
  align-items: center;
  margin: 2%;
  margin-bottom: 10%;
`;
