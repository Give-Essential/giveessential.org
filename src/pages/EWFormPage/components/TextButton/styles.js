import styled from "styled-components";

export const CenteredFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
  display: flex;
  width: 124px;
  height: 40px;
  border-radius: 1vw;
  margin-left: 0.7vw;
  margin-right: 0.7vw;
  margin-top: 0.5vw;
  margin-bottom: 0.5vw;
  border: 2px solid #8cc9ba;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.selected ? "#8cc9ba" : null)};
  cursor: pointer;
  @media (max-width: 900px) {
    width: 75px;
    height: 30px;
  }
`;

export const Text = styled.h1`
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  font-size: 17px;
  text-align: center;
  margin: 0px;
  color: ${(props) => (props.selected ? "#ffffff" : "#8cc9ba")};
  @media (max-width: 900px) {
    font-size: 12px;
  }
`;

export const Icon = styled.img`
  width: auto;
  height: 50px;
`;
