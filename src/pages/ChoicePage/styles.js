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
