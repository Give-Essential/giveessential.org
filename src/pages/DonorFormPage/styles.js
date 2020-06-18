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
  font-size: 40px;
  margin-top: 48px;
  margin-bottom: 12px;
`;

export const Subtitle = styled.h1`
  font-size: 14px;
  width: 55vw;
  text-align: center;
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

export const ButtonText = styled.h1`
  font-size: 20px;
  margin-top: 8px;
  width: 55vw;
  text-align: center;
  color: ${(props) => (props.disabled ? "#8CC9BA" : "#ffffff")};
`;
