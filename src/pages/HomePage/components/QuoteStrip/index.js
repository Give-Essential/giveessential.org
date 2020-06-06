import React from "react";
import QuoteBox from "./QuoteBox";
import { Strip, Quotes } from "./styles";
import { Header } from "../../styles";

export default function QuoteStrip() {
  return (
    <Strip>
      <Header style={{ paddingBottom: "4vh" }}>
        Essential Workers In Need
      </Header>
      <Quotes>
        <QuoteBox
          text="Everything I need to protect myself whiIe I shop for orders is all out of stock everywhere. I can’t afford normal items like hygiene and food products."
          reference={"GROCERY STORE SHOPPER IN TEXAS"}
        ></QuoteBox>
        <QuoteBox
          text="I am the main source of income for my family at the moment, as they cut hours for both my parents. Anything helps!"
          reference={"WAREHOUSE FULFILLER IN ARIZONA"}
        ></QuoteBox>
        <QuoteBox
          text="I am a registered nurse who has two children at home who have to stay by themselves while I work. I had to cut back my hours just so I could be a teacher to my 11-year-old"
          reference={"NURSE IN NEW YORK"}
        ></QuoteBox>
      </Quotes>
    </Strip>
  );
}
