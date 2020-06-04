import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
`;

export const RowFlex = styled(Flex)`
  align-items: center;
`;

export const NextSteps = styled.h1`
  font-family: Archivo;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 44px;
  /* identical to box height */

  align-items: center;
  text-align: center;
  text-decoration: underline;
`;

export const Dot = styled.div`
  height: 79px;
  width: 79px;
  background-color: ${(props) => (props.color ? props.color : "black")};
  margin-left: 25%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  color: white;
  margin-right: 5%;
`;

export const DotText = styled.h1`
  font-weight: 400;
  font-size: 44px;
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

export const StyledIcon = styled.img`
  margin: 0% 2%;
`;

export const Donation = styled.h4`
  font-style: italic;
  font-weight: bold;
  font-size: 40px;
  line-height: 44px;
  /* identical to box height */

  align-items: center;
  text-align: center;
`;
