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
  padding-top: 50px;
  justify-content: center;
  align-items: center;
`;

export const InlineFlex = styled(ColumnFlex)`
  display: inline-block;
`;

export const Header = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  margin-top: 12px;
  margin-bottom: 12px;
`;

export const Picture = styled.img`
  max-width: 2vw;
  height: auto;
  margin-left: 5px;
  margin-top: 0px;
  margin-right: 3px;
  display: inline-block;
`;