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

export const InlineFlex = styled(ColumnFlex)`
  display: inline-block;
`;

export const Header = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  margin-top: 72px;
  margin-bottom: 12px;
`;

export const Paragraph = styled.h1`
  margin-top: 16px;
  margin-bottom: 45px;
  font-size: 1.25em;
  width: 50vw;
`;

export const BigPicture = styled.img`
  max-width: 55vw;
  height: auto;
  margin-left: 91px;
  margin-top: 25px;
  margin-right: 73px;
`;

export const Picture = styled.img`
  max-width: 2vw;
  height: auto;
  margin-left: 5px;
  margin-top: 0px;
  margin-right: 3px;
  display: inline-block;
`;
