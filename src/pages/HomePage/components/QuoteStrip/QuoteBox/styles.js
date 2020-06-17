import styled from "styled-components";

export const Box = styled.div`
  width: 27vw;
  height: 27vw;
  background-color: #ffffff;
  margin-right: 24px;
  margin-left: 24px;
  align-items: center;
  justify-content: center;
  display: flex;
  position: relative;
`;

export const QuoteText = styled.h1`
  font-family: "Open Sans", sans-serif;
  font-size: 1.2em;
  line-height: 20px;
  width: 70%;
`;

export const Picture = styled.img`
  max-width: 6vw;
  height: auto;
  margin-left: -65px;
  margin-top: -330px;
  margin-right: 3px;
`;

export const Reference = styled.h1`
  font-size: 20px;
  line-height: 21px;
  width: 240px;
  position: absolute;
  text-align: right;
  color: #8cc9ba;
  right: 12px;
  bottom: 12px;
`;
