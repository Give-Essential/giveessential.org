import React from "react";
import {
  BackgroundContainer,
  Dot,
  DotText,
  HeaderText,
  ListText,
} from "./styles";

// SVG Imports
import mail from "./Icons/mail.svg";
import gift from "./Icons/gift.svg";
import tracking from "./Icons/tracking.svg";
import hand from "./Icons/hand.svg";

const nextStepsList = [
  [
    mail,
    " Read through the email from matches@giveessential.org for more information on your matches. Make sure to also check your spam or junk mail if you cannot find the email",
  ],
  [
    hand,
    " Decide how you want to donate. Options include shipping from home via USPS, visiting the postal office, or buying and shipping directly online.",
  ],
  [gift, "Ship your package!"],
  [
    tracking,
    "Send us the tracking number for your donation through the form that can be found in the email.",
  ],
];

export default function MatchedPage() {
  return (
    <BackgroundContainer>
      <HeaderText>
        You’ve been matched! Look out for an email from
        matches@giveessential.org for more information :)
      </HeaderText>
      {nextStepsList.map((e, i) => (
        <div style={{ display: "flex" }}>
          <Dot color={"#8CC9BA"}>
            <DotText>{i + 1}</DotText>
          </Dot>
          <img src={e[0]} alt="Logo for correspodning list item" />
          <ListText>{e[1]}</ListText>
        </div>
      ))}
      <div>Thank you for your donation!</div>
      <div>Return to homepage</div>
    </BackgroundContainer>
  );
}
