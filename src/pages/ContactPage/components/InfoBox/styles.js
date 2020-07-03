import styled from 'styled-components';

export const ProfilePic = styled.img`
  border-radius: 50%;
  width: 12vh;
  height: 12vh;
  margin-bottom: 4px;
`;

export const Paragraph = styled.h1`
  font-size: 12px;
  margin-bottom: 1px;
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

export const WhiteBox = styled(ColumnFlex)`
  width: 23vw;
  background-color: #fff;
  height: 29vh;
  text-align: center;
  display: block;
`;

export const Title = styled.h1`
  font-family: 'Open Sans', sans-serif;
  font-size: 2.2em;
  font-weight: 900;
  line-height: 1em;
  text-align: center;
  margin-top: 10%;
  padding-left: 15%;
  padding-right: 15%;
  width: 100%;
`;

export const NumberPic = styled.img`
  max-width: 16vw;
  height: auto;
  margin-left: 5px;
  margin-top: 20px;
  margin-right: 3px;
`;

export const IconPic = styled.img`
  max-width: 10vw;
  height: auto;
  margin-top: -15px;
`;

export const Reference = styled.h1`
  font-size: 0.95em;
  line-height: 10px;
  padding: 5%;
  color: #000;
  text-align: center;
`;
