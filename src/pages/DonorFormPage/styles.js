import styled from "styled-components";
import { Input, Label } from 'reactstrap';

export const Flex = styled.div`
  display: flex;
`;

export const RowFlex = styled(Flex)`
  align-items: center;
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
  padding: 2rem;
`;

export const Header = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  margin-top: 48px;
  margin-bottom: 12px;
  width: 100%;
  text-align: left;
  flex-wrap: wrap;
`;

export const WrappableHeader = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  margin-top: 48px;
  margin-bottom: 12px;
  text-align: left;
  flex-wrap: wrap;
`;

export const DonorPageHeaderMobile = styled.h1`
  font-style: normal;
  font-weight: bold;
  margin-top: -42px;
  margin-bottom: 1px;
  color: #8CC9BA;
  text-align: center;
  font-size: 35px;
  font-family: "Montserrat"
`;

export const DonorPageSubtitleMobile = styled.h1`
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
  width: 85vw;
  margin-top: 0px;
  margin-bottom: 12px;
  text-align: center;
  font-family: "Montserrat";
  color: #6c757d;   
`;

export const DonorPageTitleMobile = styled.h1 `
  font-size: 17px;
  width: 84vw;
  font-weight: bold;
  margin-top: -33px;
  margin-bottom: 6px;
  text-align: center;
  font-family: "Montserrat";
`

export const Subtitle = styled.h1`
  font-size: 20px;
  width: 100%;
  text-align: left;
`;

export const Subtext = styled.h1`
  font-size: 20px;
  width: 100%;
  text-align: left;
  font-style: italic;
`;

export const SubtextMobile = styled.h1`
  // font-size: 20px;
  // width: 100%;
  text-align: center;
  // font-style: italic;
  fontFamily: "Montserrat",
  fontSize: "14px"
`;

export const SubmitButton = styled.div`
  margin-top: 50px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 6vw;
  background-color: ${(props) => (props.disabled ? "#dddddd" : "#8CC9BA")};
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ButtonText = styled.h1`
  font-size: 20px;
  margin-top: 8px;
  width: 55vw;
  text-align: center;
  color: ${(props) => (props.disabled ? "#8CC9BA" : "#ffffff")};
`;

export const StyledTitle = styled.h1`
  font-family: 'Montserrat', open-sans;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 44px;
  & span {
    display: block;
  }
  margin-bottom: 12px;
  margin-top: 48px;
`;

export const StyledInput = styled(Input)`
  font-family: 'Montserrat', open-sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  border: ${({ noBorder }) => (noBorder ? 'none' : '1px solid #8cc9ba')};
  border-radius: ${({ noBorder }) => (noBorder ? 0 : '5px')};
  border-bottom: ${({ underLine }) =>
    underLine ? '1px solid #8CC9BA' : '1px solid #8CC9BA'};
`;

export const StyledInputMobile = styled(Input)`
  font-family: 'Montserrat', open-sans;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  border: ${({ noBorder }) => (noBorder ? 'none' : '1px solid #8cc9ba')};
  border-radius: ${({ noBorder }) => (noBorder ? 0 : '5px')};
  border-bottom: ${({ underLine }) =>
    underLine ? '1px solid #8CC9BA' : '1px solid #8CC9BA'};
  margin-bottom: -6px;
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
  padding: 15px 15px;
`;

export const StyledContainer = styled.div`
  flex-basis: 55%;
  margin-top: 50px;
`;

export const CapitalizedButton = styled.h2`
  font-size: 26px;
  text-align: right;
  text-transform: uppercase;
  width: 100%;
  color: ${(props) => (props.selected ? "#ffffff" : "#8cc9ba")};
  cursor: pointer;
`;

export const SideMenuText = styled.h3`
  font-size: 26px;
  color: "#8cc9ba";
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.05);
  width: 97vw;
  margin-top: 2%;
  align-self: center;
  padding: 20px;
  padding-top: 0px;
`;

export const RowSeparatedFlex = styled.div`
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;

export const LargerScreenAlternative = styled.div`
  display: ${window.innerWidth >= 900 ? 'flex' : 'none'};
  flex-direction: column;
`;

export const SmallerScreenAlternative = styled.div`
  display: ${window.innerWidth >= 900 ? 'none' : 'flex'};
`;

export const RedText = styled.h1`
  font-size: 14px;
  width: 55vw;
  color: red;
  margin-top: 10px;
  margin-bottom: 20px;
  text-align: left;
  align-self: flex-start;
`;