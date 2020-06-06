import React, { useState } from "react";
import { ColumnFlex, CenteredFlex, Header, RowFlex } from "../../styles";
import {
  WhatWeDoBlock,
  QuestionMark,
  EmphasizedText,
  ListItem,
  Dot,
  DotText,
  tooltipStyle,
} from "./styles";
import { Tooltip } from "reactstrap";
import question from "../../../../assets/images/question.svg";

const infoList = [
  [
    "Essential workers tell us what they need. Donors tell us what they have",
    "#F3D04E",
  ],
  ["We match essential workers with donors", "#8CC9BA"],
  ["Donors ship their gifts to their match", "#FD8E7B"],
];

export default function WhatWeDo() {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <ColumnFlex
      style={{
        backgroundColor: "#F4F4F4",
        paddingBottom: "8vh",
        paddingTop: "8vh",
      }}
    >
      <CenteredFlex style={{ paddingTop: 20 }}>
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
            to make ends meet or is unable to work from home`}
          </Tooltip>
        </WhatWeDoBlock>
      </CenteredFlex>
      <RowFlex>
        <ColumnFlex
          style={{
            width: "44vw",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Header style={{ width: "30vw", marginLeft: "10vw" }}>
            How does this work?
          </Header>
        </ColumnFlex>
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
      </RowFlex>
    </ColumnFlex>
  );
}
