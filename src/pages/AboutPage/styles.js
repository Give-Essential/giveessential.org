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

export const FAQFlex = styled(ColumnFlex)`
  font-family: 'Archivo', sans-serif;
  padding-top: calc(10vh + 2.5%);
  padding-bottom: calc(10vh + 2.5%);
  color: black;
  background-color: #FAFAFA;
`;

export const Paragraph = styled.h1`
  margin-top: 10px;
  margin-bottom: 45px;
  font-size: 1.15em;
  width: 68vw;
`;

export const FAQHeader = styled.h1`
  font-style: normal;
  font-weight: bold;
  margin-top: 2px;
  margin-bottom: 12px;
  font-size: 2.5em;
  font-weight: bolder;
  padding: 0 0 2.5% 2.5%;
  text-align: center;
`;

export const FAQContainer = styled(ColumnFlex)`
  max-width: 1500px;
  padding: 0 5.5% 0 5.5%;
  ​
  &.mobile {
      display: relative;
  }
  ​
  &.desktop {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
  }
`;

// .faq-nav {
//     position: sticky;
//     top: calc(10vh + 2.5%);
//     align-self: flex-start;
//     z-index: 1;
// ​
//     &.mobile {
//         width: 100%;
//         margin-bottom: 5%;
//     }
// ​
//     &.desktop {
//         flex: 1 0 0;
//     }
// }
// ​
// .faq-nav-item:hover {
//     background-color: #f5f5f5;
//     transition: 0.3s;
// }
// ​
// .faq-nav-mobile-header {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     background-color: #8CC9BA;
//     color: white;
// }
// ​
// .faq-content {
//     &.mobile {
//         width: 100%;
//     }
// ​
//     &.desktop {
//         flex: 6 0 0;
//         margin-left: 2.5%;
//     }
// }
// ​
// .faq-section {
//     margin-bottom: 20px;
//     padding: 10px;
//     border-radius: 5px;
//     background-color: #DFE9EC;
// }
// ​
// .faq-section-title {
//     font-size: 1.25em;
//     margin-bottom: 5px;
// }
// ​
// .faq-question {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
// }
// ​
// .faq-item {
//     margin-bottom: 5px;
// }