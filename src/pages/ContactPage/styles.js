import styled from 'styled-components';

export const ProfilePic = styled.img`
  border-radius: 50%;
  width: 12vh;
  height: 12vh;
  margin-bottom: 4px;
`;

export const Paragraph = styled.h1`
  margin-top: 35px;
  margin-bottom: 45px;
  font-size: 1.15em;
  width: 52vw;
`;

export const Label = styled.h1`
  margin-top: 10px;
  margin-bottom: 15px;
  color: #c4c4c4;
  font-size: 1em;
  width: 74vw;
`;

export const TitleText = styled.h1`
  font-size: 12px;
  color: #fd8e7b;
  font-style: italic;
`;

export const Flex = styled.div`
  display: flex;
`;

export const ColumnFlex = styled(Flex)`
  flex-direction: column;
`;

export const RowFlex = styled(Flex)`
  align-items: center;
`;

export const CenteredFlex = styled(ColumnFlex)`
  align-items: center;
`;

export const InlineFlex = styled(ColumnFlex)`
  display: inline-block;
`;

export const Screen = styled(ColumnFlex)`
  width: 100vw;
  background-color: #fafafa;
`;

export const Header = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  margin-top: 72px;
  margin-bottom: 12px;
`;

export const WhiteBox = styled(ColumnFlex)`
  width: 23vw;
  background-color: #fff;
  height: 63vh;
  text-align: center;
  display: block;
`;

export const Title = styled.h1`
  font-family: 'Open Sans', sans-serif;
  font-size: 2em;
  font-weight: 900;
  line-height: 20px;
  text-align: center;
  margin-top: 10%;
  width: 100%;
`;

export const NumberPic = styled.img`
  max-width: 6vw;
  height: auto;
  margin-left: 5px;
  margin-top: 30px;
  margin-right: 3px;
`;

export const IconPic = styled.img`
  max-width: 10vw;
  height: auto;
  margin-top: -15px;
`;

export const Reference = styled.h1`
  font-size: 14.5px;
  line-height: 20px;
  padding: 10%;
  color: #000;
  text-align: center;
`;

export const Picture = styled.img`
  max-width: 2vw;
  height: auto;
  margin-left: 5px;
  margin-top: 0px;
  margin-right: 3px;
  display: inline-block;
`;
