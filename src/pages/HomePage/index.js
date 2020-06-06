import React from "react";
import { Screen } from "./styles";
import Main from "./components/Main";
import QuoteStrip from "./components/QuoteStrip";
import News from "./components/News";
import WhatWeDo from "./components/WhatWeDo";
import Contact from "./components/Contact";

export default function HomePage() {
  return (
    <Screen>
      <Main />
      <WhatWeDo />
      <QuoteStrip />
      <News />
      <Contact />
    </Screen>
  );
}
