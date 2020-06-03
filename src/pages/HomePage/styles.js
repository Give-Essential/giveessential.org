import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
`;

export const RowFlex = styled(Flex)`
  align-items: center;
`;

export const ColumnFlex = styled(Flex)`
  flex-direction: column;
`;

export const CenteredFlex = styled(ColumnFlex)`
  align-items: center;
`;

export const LightText = styled.h1`
  font-size: 30px;
  line-height: 33px;
  color: #333333;
`;

export const HeavyText = styled.h1`
  font-weight: bold;
  font-size: 52px;
  line-height: 57px;
  display: flex;
  align-items: center;
`;

export const PictureDiv = styled.div`
  margin-left: 91px;
  margin-top: 90px;
  margin-right: 73px;
`;

export const Header = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 52px;
  line-height: 57px;
`;

export const WhatWeDoBlock = styled.div`
  font-family: "Open Sans", sans-serif;
  font-size: 40px;
  font-weight: lighter;
  line-height: 54px;
  align-items: center;
  padding: 0% 12% 6% 12%;
  margin-top: 80px;
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
  width: 80%;
  font-weight: bold;
  font-size: 40px;
  line-height: 44px;
  color: ${(props) => (props.color ? props.color : "black")};
`;

export const Dot = styled.div`
  height: 50px;
  width: 50px;
  background-color: ${(props) => (props.color ? props.color : "black")};
  margin-right: 90px;
  border-radius: 50%;
  display: inline-block;
  text-align: center;
  color: white;
`;

export const DotText = styled.h1`
  font-weight: 600;
  font-size: 44.717px;
  line-height: 49px;
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

export const NewsImage = styled.img`
  width: 100px;
  margin-left: 20px;
  margin-right: 20px;
`;
