import React from "react";
import { NewsImage } from "./styles";
import { CenteredFlex, Header, RowFlex } from "../../styles";

import nbc from "../../../../assets/images/nbcny.png";
import news5 from "../../../../assets/images/news5.png";
import cnn from "../../../../assets/images/cnn.png";
import dnews from "../../../../assets/images/dallas-news.png";

export default function News() {
  return (
    <CenteredFlex>
      <Header>Give Essential in the press</Header>
      <RowFlex
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div style={{ margin: "5%" }}>
          <a
            href="https://www.nbcnewyork.com/on-air/as-seen-on/nj-college-roommates-connect-frontline-workers-with-essentials/2402189/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <NewsImage src={nbc} alt="wnbc logo" />
          </a>
        </div>
        <div style={{ margin: "5%" }}>
          <a
            href="https://www.news5cleveland.com/news/coronavirus/cwru-graduate-helps-form-give-essential-to-assist-essential-workers"
            target="_blank"
            rel="noopener noreferrer"
          >
            <NewsImage src={news5} alt="cleveland 5 logo" />
          </a>
        </div>
        <div style={{ margin: "5%" }}>
          <a
            href="https://twitter.com/CuomoPrimeTime/status/1257492367138942978"
            target="_blank"
            rel="noopener noreferrer"
          >
            <NewsImage src={cnn} alt="CNN logo" />
          </a>
        </div>
        <div style={{ margin: "5%" }}>
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
  );
}
