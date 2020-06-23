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

export const ProfilePic = styled.img`
  border-radius: 50%;
  width: 12vh;
  height: 12vh;
  margin-bottom: 4px;
`;

export const NameText = styled.h1`
  font-size: 12px;
  margin-bottom: 1px;
`;

export const TitleText = styled.h1`
  font-size: 12px;
  color: #fd8e7b;
  font-style: italic;
`;

export const CenteredFlex = styled(ColumnFlex)`
  align-items: center;
  background-color: #F8F8F8;
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
