import styled from "styled-components";

export const CenteredFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
  display: flex;
  width: ${window.innerWidth >= 900 ? '124px' : '75px'};
  height: ${window.innerWidth >= 900? '48px' : '30px'};
  border-radius: 1vw;
  margin-left: 0.7vw;
  margin-right: 0.7vw;
  margin-top: 0.5vw;
  margin-bottom: 0.5vw;
  border: 2px solid #8cc9ba;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.selected ? "#8cc9ba" : "#F8F8F8")};
  cursor: pointer;
`;

export const Text = styled.h1`
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  font-size: ${ window.innerWidth >= 900 ? '17px' : '12px'};
  text-align: center;
  margin: 0px;
  color: ${(props) => (props.selected ? "#ffffff" : "#8cc9ba")};
`;

export const Icon = styled.img`
  width: auto;
  height: 50px;
`;
