import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
`;

export const RowFlex = styled(Flex)`
  flex-wrap: wrap;
  flex-direction: row;
  margin-left: ${ window.innerWidth >= 900 ? '0' : '10vw'};
`;

export const Box = styled.div`
  display: flex;
  width: 10vw;
  height: 8vw;
  border-radius: 0.1vw;
  border: 4px solid #8cc9ba;
`;
