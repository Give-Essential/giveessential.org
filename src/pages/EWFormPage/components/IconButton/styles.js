import styled from "styled-components";

export const CenteredFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
  display: flex;
  width: 8vw;
  height: 8vw;
  border-radius: 1vw;
  margin-left: 0.7vw;
  margin-right: 0.7vw;
  margin-top: 0.5vw;
  margin-bottom: 0.5vw;
  border: 2px solid #8cc9ba;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  background-color: ${(props) => (props.selected ? "#8cc9ba" : null)};
`;

export const Text = styled.h1`
  font-family: "Open Sans", sans-serif;
  font-size: 0.8em;
  text-align: center;
  color: ${(props) => (props.selected ? "#ffffff" : "#8cc9ba")};
`;

export const Icon = styled.img`
  width: auto;
  height: 3vw;
  margin-top: 0.5vw;
`;
