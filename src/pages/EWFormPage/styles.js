import styled from "styled-components";
import { Input, Label } from 'reactstrap';

export const Flex = styled.div`
  display: flex;
`;

export const RowFlex = styled(Flex)`
  flex-wrap: wrap;
  flex-direction: row;
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
  font-size: 2.2em;
  margin-top: 48px;
  margin-bottom: 12px;
  color: #F3D04E;
  text-align: center;
`;

export const HeaderMobile = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 2.2em;
  margin-top: 35px;
  margin-bottom: 8px;
  color: #8CC9BA;
  text-align: center;
  font-size: 31px;
  font-family: "Montserrat"
`;

export const HeaderMobile = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 2.2em;
  margin-top: 35px;
  margin-bottom: 8px;
  color: #8CC9BA;
  text-align: center;
  font-size: 31px;
`;

export const Title = styled.h1`
  font-size: 16px;
  width: 55vw;
  font-weight: 800;
  margin-top: 30px;
  text-align: left;
  font-family: "Montserrat";
`;

export const TitleMobile = styled.h1`
  font-size: 16px;
  width: 84vw;
  font-weight: bold;
  margin-top: 22px;
  margin-bottom: 16px;
  text-align: center;
  font-family: "Montserrat";
`;

export const TitleMobile = styled.h1`
  font-size: 16px;
  width: 84vw;
  font-weight: 800;
  margin-top: 22px;
  margin-bottom: 16px;
  text-align: center;
`;

export const Subtitle = styled.h1`
  font-size: 16px;
  font-style: italic;
  font-weight: 700;
  width: 55vw;
  font-weight: 800;
  margin-top: 10px;
  text-align: left;
  font-family: "Montserrat";
`;

export const SubtitleMobile = styled.h1`
  font-size: 14px;
  // font-style: italic;
  font-weight: 400;
  width: 85vw;
  margin-top: 10px;
  text-align: center;
  font-family: "Montserrat";
  color: #6c757d;
`;

export const SubtitleMobile = styled.h1`
  font-size: 14px;
  font-style: italic;
  font-weight: 535;
  width: 85vw;
  margin-top: 10px;
  text-align: center;
  // color: #2c3e50;
`;

export const Text = styled.h1`
  font-size: 14px;
  width: 55vw;
  margin-top: 10px;
  text-align: left;
  font-family: "Montserrat";
  color: "#6c757d";
`;

export const TextMobile = styled.h1`
  font-size: 13px;
  width: 80vw;
  margin-top: 0px;
  margin-bottom: 15px;
  text-align: center;
  font-family: "Montserrat";
  color: "#6c757d";
`;

export const TextMobile = styled.h1`
  font-size: 14px;
  width: 80vw;
  margin-top: 0px;
  margin-bottom: 15px;
  text-align: center;
`;

export const SmallText = styled.h1`
  font-size: 12px;
  width: 55vw;
  margin-top: 10px;
  text-align: left;
`;

export const RedText = styled.h1`
  font-size: 14px;
  width: 55vw;
  color: red;
  text-align: left;
`;

export const SubmitButton = styled.div`
  margin-top: 50px;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  width: ${ window.innerWidth >= 900 ? '30%' : '60%'};
  height: ${ window.innerWidth >= 900 ? '5vw' : '12vw'};
  cursor: pointer;
  background-color: ${(props) => (props.disabled ? "#dddddd" : "#8CC9BA")};
  align-items: center;
  justify-content: center;
  padding: 15px 0;
`;

export const SubmitButtonMobile = styled.div`
  margin-top: 50px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  width: ${ window.innerWidth >= 900 ? '30%' : '74%'};
  height: ${ window.innerWidth >= 900 ? '5vw' : '8vw'};
  cursor: pointer;
  background-color: ${(props) => (props.disabled ? "#dddddd" : "#8CC9BA")};
  align-items: center;
  justify-content: center;
  // padding: 15px 0;
  font-size: 13px;
`;

export const PinkSubmitButton = styled.div`
  margin-top: 50px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  width: ${ window.innerWidth >= 900 ? '30%' : '70%'};
  height: ${ window.innerWidth >= 900 ? '5vw' : '12vw'};
  cursor: pointer;
  background-color: ${(props) => (props.disabled ? "#dddddd" : "#FD8E7B")};
  align-items: center;
  justify-content: center;
  padding: 15px 0;
`;

export const SmallButton = styled.div`
  margin-top: 30px;
  border-radius: 6px;
  border: 2px solid #8CC9BA;
  display: flex;
  width: 10vw;
  cursor: pointer;
  height: 30px;
  align-items: center;
  margin-right: 10px;
  background-color: ${(props) => (props.selected ? "#8CC9BA" : null)};
`;

export const SmallButtonText = styled.h1`
  font-size: 17px;
  margin-top: 8px;
  width: 55vw;
  font-weight: 500;
  text-align: center;
  color: #8CC9BA;
`;


export const ButtonText = styled.h1`
  font-size: 1.2em;
  margin-top: 8px;
  width: 55vw;
  text-align: center;
  color: ${(props) => (props.disabled ? "#8CC9BA" : "#ffffff")};
`;

export const StyledInput = styled(Input)`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1em;
  border: ${({ noBorder }) => (noBorder ? 'none' : '1px solid #8cc9ba')};
  border-radius: ${({ noBorder }) => (noBorder ? 0 : '5px')};
  border-bottom: ${({ underLine }) =>
    underLine ? '1px solid #8CC9BA' : '1px solid #8CC9BA'};
`;

export const StyledLabel = styled(Label)`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;
  display: flex;
  align-items: center;
  margin: 0;
`;

export const StyledText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  margin-top: 10px;
`;

export const StyledButton = styled.button`
  display: block;
  margin: 22px auto;
  border: none;
  border-radius: 12px;
  width: 50%;
  background-color: ${(props) => (props.disabled ? '#dddddd' : '#8CC9BA')};
  color: ${(props) => (props.disabled ? '#8CC9BA' : '#ffffff')};
  font-size: 20px;
  padding: 15px 0;
`;

export const StyledContainer = styled.div`
  flex-basis: 55%;
  margin-top: 50px;
`;