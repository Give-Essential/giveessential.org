import React from "react";
import { Screen, CenteredFlex, RowFlex, Header, Paragraph, BigPicture } from "./styles";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Amy from "../../assets/images/Amy.png";
import Rine from "../../assets/images/Rine.png";
import Team from "../../assets/images/team.png";

export default function AboutUsPage() {
  return (
    <Screen>
      <CenteredFlex style={{ paddingBottom: 52 }}>
        <Header>Who we are</Header>
        <RowFlex style={{ paddingBottom: 32 }}>
          <BigPicture src={Team} name="Team" title="team" />
        </RowFlex>
        <Paragraph>
        We are an all-volunteer organization — please fill out this form if you're
         interested in volunteering. We are a 100% volunteer-run organization and 
         could not do this without our incredible team.
        </Paragraph>
        <Header style={{ marginTop: 48, marginBottom: 48 }}>Founders</Header>
        <RowFlex style={{ paddingBottom: 32 }}>
          <Profile src={Amy} name="Amy" title="co-founder" />
          <Profile src={Rine} name="Rine" title="co-founder" />
          <Profile src={Rine} name="Crystal" title="role" />
          <Profile src={Rine} name="Name" title="role" />
          <Profile src={Rine} name="Name" title="role" />
        </RowFlex>
        <Paragraph>
          Hello! We're Amy and Rine, co-founders of Give Essential. We were
          troubled by the lack of support sfor essential workers during this
          COVID-19 epidemic, so we built and launched Give Essential.
        </Paragraph>
      </CenteredFlex>
      <Contact />
    </Screen>
  );
}
