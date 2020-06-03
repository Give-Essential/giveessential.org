import styled from "styled-components";

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

export const HeaderText = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 44px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #8cc9ba;
  padding: 3% 14%;
`;

export const BackgroundContainer = styled.div`
  background-color: #f4f4f4;
  height: 100%;
`;

export const ListText = styled.h4`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 38px;
  display: flex;
  align-items: center;
`;
