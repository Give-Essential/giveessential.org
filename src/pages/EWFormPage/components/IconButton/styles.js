import styled from "styled-components";

export const CenteredFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
  display: flex;
  width: ${ window.innerWidth >= 900 ? '8vw' : '25vw'};
  height: ${ window.innerWidth >= 900 ? '8vw' : '25vw'};
  border-radius: 1vw;
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
  font-family: "Montserrat";
  font-size: ${ window.innerWidth >= 900 ? '15px' : '12px'};
  text-align: center;
  color: ${(props) => (props.selected ? "#ffffff" : "#8cc9ba")};
`;

export const Icon = styled.img`
  width: auto;
  height: ${ window.innerWidth >= 900 ? '45px' : '40px'};
  margin-top: 0.5vw;
  -webkit-filter: ${(props) => (props.selected ? 'brightness(0) invert(1);': 'none;')}
`;
