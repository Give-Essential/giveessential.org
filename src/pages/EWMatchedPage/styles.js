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

export const Screen = styled(ColumnFlex)`
  width: 100vw;
`;

export const CenteredFlex = styled(ColumnFlex)`
  align-items: center;
`;

export const Header = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  margin-top: 58px;
  color: #8CC9BA;
`;

export const Title = styled.h1`
  font-size: 16px;
  width: 55vw;
  font-weight: 800;
  margin-top: 30px;
  text-align: left;
`;

export const Subtitle = styled.h1`
  font-size: 16px;
  font-style: italic;
  font-weight: 700;
  width: 55vw;
  font-weight: 800;
  margin-top: 10px;
  text-align: left;
`;

export const Text = styled.h1`
  font-size: 14px;
  width: 55vw;
  margin-top: 10px;
  text-align: left;
`;

export const SubmitButton = styled.div`
  margin-top: 50px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  width: 40vw;
  height: 6vw;
  background-color: ${(props) => (props.disabled ? "#dddddd" : "#8CC9BA")};
  align-items: center;
  justify-content: center;
`;

export const SmallButton = styled.div`
  margin-top: 30px;
  border-radius: 6px;
  border: 3px solid #8CC9BA;
  display: flex;
  flex-direction: row;
  width: 10vw;
  height: 2vw;
  background-color: #f8f9fa;
  align-items: center;
  justify-content: center;
`;

export const SmallButtonText = styled.h1`
  font-size: 17px;
  margin-top: 8px;
  width: 55vw;
  font-weight: 700;
  text-align: center;
  color: #8CC9BA;
`;


export const ButtonText = styled.h1`
  font-size: 20px;
  margin-top: 8px;
  width: 55vw;
  text-align: center;
  color: ${(props) => (props.disabled ? "#8CC9BA" : "#ffffff")};
`;

export const Dot = styled.div`
  height: 50px;
  width: 50px;
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
  font-size: 2em;
  margin-top: 10px;
`;

export const HeaderText = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 1.3em;
  line-height: 40px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #8cc9ba;
  padding: 3% 14%;
`;

export const BackgroundContainer = styled.div`
  height: 100%;
  padding-top: 6%;
`;

export const ListText = styled.h4`
  font-style: normal;
  font-weight: normal;
  font-size: 1em;
  line-height: 30px;
  width: 85%;
  display: flex;
  align-items: center;
`;

export const StyledIcon = styled.img`
  width: 55%;
`;

export const Donation = styled.h4`
  font-style: italic;
  font-weight: bold;
  font-size: 1.5em;
  line-height: 44px;
  /* identical to box height */

  align-items: center;
  text-align: center;
`;

export const NextSteps = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 1.8em;
  line-height: 24px;
  /* identical to box height */

  align-items: center;
  text-align: center;
`;