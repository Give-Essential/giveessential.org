import styled from "styled-components";

export const StyledButton = styled.button`
  width: 32%;
  height: 5%;
  border-radius: 6px;
  border: none;
  text-align: center;
  padding: 15px 8px;
  background-color: ${(props) => (props.primary ? "#fd8e7b" : "#f3d04e")};
  color: #ffffff;
  font-family: Montserrat;
  font-weight: 500;
  // margin: 12, 47, 11, 40;
  font-size: 16px;
  line-height: 30px;
  align-items: center;
  margin: 2%;
  margin-bottom: 10%;
`;
