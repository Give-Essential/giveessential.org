import styled from "styled-components";

export const WhatWeDoBlock = styled.div`
  font-family: "Open Sans", sans-serif;
  font-size: 30px;
  font-weight: lighter;
  line-height: 40px;
  align-items: center;
  padding: 0% 12% 6% 12%;
  margin-top: 40px;
`;

export const QuestionMark = styled.span`
  text-decoration: underline;
  color: blue;
`;

export const EmphasizedText = styled.span`
  color: #fd8e7b;
  font-style: italic;
  font-weight: bold;
`;

export const ListItem = styled.h1`
  font-weight: bold;
  font-size: 25px;
  line-height: 30px;
  width: 35vw;
  color: ${(props) => (props.color ? props.color : "black")};
`;

export const Dot = styled.div`
  height: 50px;
  width: 50px;
  background-color: ${(props) => (props.color ? props.color : "black")};
  margin-right: 60px;
  margin-left: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  color: white;
`;

export const DotText = styled.h1`
  font-weight: 400;
  font-size: 30px;
  margin-top: 8px;
`;

export const Trapezoid = styled.div`
  border-bottom: 100px solid #8cc9ba;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  height: 0;
  width: 33%;
  z-index: 0;
  position: relative;
`;

export const tooltipStyle = {
  fontFamily: "Open Sans",
  fontStyle: "italic",
  fontWeight: "bold",
  fontSize: "20px",
  lineHeight: "27px",
  display: "flex",
  alignItems: "center",
  color: "#8CC9BA",
};
