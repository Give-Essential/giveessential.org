import styled from "styled-components";
import { Input, Label, CardTitle, Col } from 'reactstrap';

export const Flex = styled.div`
  display: flex;
`;

export const RowFlex = styled(Flex)`
  justify-content: center;
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
  font-size: 40px;
  margin-top: 12px;
  margin-bottom: 12px;
`;
export const StyledTitle = styled.h1`
  font-family: 'Archivo', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 44px;
  text-align: center;
  & span {
    display: block;
  }
  margin-bottom: 12px;
  margin-top: 48px;
`;
export const StyledInput = styled(Input)`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  border: ${({ noBorder }) => (noBorder ? 'none' : '2px solid #8cc9ba')};
  border-radius: ${({ noBorder }) => (noBorder ? 0 : '5px')};
  border-bottom: ${({ underLine }) =>
    underLine ? '3px solid #8CC9BA' : '2px solid #8CC9BA'};
`;
export const StyledLabel = styled(Label)`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 38px;
  display: flex;
  align-items: center;
  margin: 0;
`;
export const StyledText = styled.p`
  font-family: 'Archivo';
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 22px;
`;

export const StyledButton = styled.button`
  display: block;
  margin: 22px auto;
  border: none;
  border-radius: 12px;
  width: 100%;
  background-color: ${(props) => (props.disabled ? '#dddddd' : '#8CC9BA')};
  color: ${(props) => (props.disabled ? '#8CC9BA' : '#ffffff')};
  font-size: 28px;
  padding: 28px 0;
`;

export const StyledContainer = styled.div`
  flex-basis: 55%;
  margin-top: 50px;
`;