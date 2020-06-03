import React, { useState } from "react";
import { Col, Tooltip } from "reactstrap";
import {
  RowFlex,
  ColumnFlex,
  CenteredFlex,
  LightText,
  HeavyText,
  PictureDiv,
  Header,
  WhatWeDoBlock,
  QuestionMark,
  EmphasizedText,
  ListItem,
  Dot,
  DotText,
  tooltipStyle,
  NewsImage,
} from "./styles";
import Button from "./components/Button";
// Import for the landing image in the first container
import adImg from "../../assets/images/landing_img.PNG";

// Import logos from news websites that Give Essential is featured in
import nbc from "../../assets/images/nbcny.png";
import news5 from "../../assets/images/news5.png";
import cnn from "../../assets/images/cnn.png";
import dnews from "../../assets/images/dallas-news.png";
import question from "../../assets/images/question.svg";

const infoList = [
  [
    "Essential workers tell us what they need. Donors tell us what they have",
    "#F3D04E",
  ],
  ["We match essential workers with donors", "#8CC9BA"],
  ["Donors ship their gifts to their match", "#FD8E7B"],
];

export default function HomePage() {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <>
      <RowFlex>
        <RowFlex>
          <ColumnFlex style={{ marginTop: 120, marginLeft: 129, width: "39%" }}>
            <ColumnFlex>
              <LightText style={{ marginBottom: 16 }}>
                GIVE ESSENTIAL IS
              </LightText>
              <HeavyText style={{ marginBottom: 60 }}>
                Helping essential workers get the items they need.
              </HeavyText>
            </ColumnFlex>
            <RowFlex>
              <Button primary style={{ marginRight: 14 }}>
                Give Help
              </Button>
              <Button>Get Help</Button>
            </RowFlex>
          </ColumnFlex>
          <PictureDiv>
            <img src={adImg} alt="Example box given to a worker" />
          </PictureDiv>
        </RowFlex>
      </RowFlex>
      <CenteredFlex style={{ paddingTop: 130 }}>
        <Header>What we do</Header>
        <WhatWeDoBlock>
          {`We gift basic living items to essential workers `}
          <QuestionMark href="#" id="essentialWorkerTooltip">
            <img src={question} alt="Question mark" style={{ width: "2%" }} />
          </QuestionMark>
          {` on the frontlines of the COVID-19 pandemic. If you have any extra
          stuff lying around, `}
          <EmphasizedText>{`you can help!`}</EmphasizedText>
          <Tooltip
            placement="right"
            isOpen={tooltipOpen}
            target="essentialWorkerTooltip"
            toggle={toggle}
            style={tooltipStyle}
          >
            {`An essential worker is anyone who has to risk their health in order
            to make ends meet and/or is unable to work from home`}
          </Tooltip>
        </WhatWeDoBlock>
      </CenteredFlex>
      <RowFlex>
        <ColumnFlex>
          <Header
            style={{
              marginLeft: 144,
            }}
          >
            How does this work?
          </Header>
        </ColumnFlex>
        <ColumnFlex style={{ marginRight: 90, width: "60%" }}>
          <ColumnFlex>
            {infoList.map((e, i) => (
              <RowFlex style={{ marginBottom: 15 }}>
                <Dot color={e[1]}>
                  <DotText>{i + 1}</DotText>
                </Dot>
                <ListItem color={e[1]}>{e[0]}</ListItem>
              </RowFlex>
            ))}
          </ColumnFlex>
        </ColumnFlex>
      </RowFlex>
      <CenteredFlex>
        <Header>Essential workers in need</Header>
      </CenteredFlex>
      <CenteredFlex>
        <Header>In the news!</Header>
        <RowFlex>
          <div>
            <a
              href="https://www.nbcnewyork.com/on-air/as-seen-on/nj-college-roommates-connect-frontline-workers-with-essentials/2402189/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <NewsImage src={nbc} alt="wnbc logo" />
            </a>
          </div>
          <div>
            <a
              href="https://www.news5cleveland.com/news/coronavirus/cwru-graduate-helps-form-give-essential-to-assist-essential-workers"
              target="_blank"
              rel="noopener noreferrer"
            >
              <NewsImage src={news5} alt="cleveland 5 logo" />
            </a>
          </div>
          <div>
            <a
              href="https://twitter.com/CuomoPrimeTime/status/1257492367138942978"
              target="_blank"
              rel="noopener noreferrer"
            >
              <NewsImage src={cnn} alt="CNN logo" />
            </a>
          </div>
          <div>
            <a
              href="https://www.dallasnews.com/business/retail/2020/05/01/what-about-invisible-essential-workers-during-coronavirus-dartmouth-student-from-richardson-helps-start-site-linking-them-to-donors/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <NewsImage src={dnews} alt="Dallas News Logo" />
            </a>
          </div>
        </RowFlex>
      </CenteredFlex>
    </>
  );
}
