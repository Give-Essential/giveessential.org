import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
`;

export const RowFlex = styled(Flex)``;

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
