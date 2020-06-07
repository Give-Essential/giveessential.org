import React from "react";
import { Screen, CenteredFlex, RowFlex, Header, Paragraph } from "./styles";
import Profile from "./components/Profile";

import Amy from "../../assets/images/Amy.png";
import Rine from "../../assets/images/Rine.png";

export default function AboutUsPage() {
  return (
    <Screen>
      <CenteredFlex>
        <Header style={{ marginTop: 48, marginBottom: 48 }}>Who are we?</Header>
        <RowFlex style={{ paddingBottom: 32 }}>
          <Profile src={Amy} name="Amy" title="co-founder" />
          <Profile src={Rine} name="Rine" title="co-founder" />
          <Profile src={Rine} name="Crystal" title="role" />
          <Profile src={Rine} name="Name" title="role" />
          <Profile src={Rine} name="Name" title="role" />
        </RowFlex>
        <Paragraph>
          Hello! We're Amy and Rine, co-founders of Give Essential. We were
          troubled by the lack of support for essential workers during this
          COVID-19 epidemic, so we built and launched Give Essential.
        </Paragraph>
        <Paragraph>
          Since then, we've built a team of 30+ volunteers — please fill out
          this form if you're interested in volunteering. We are a 100%
          volunteer-run organization and could not do this without our
          incredible team.
        </Paragraph>
      </CenteredFlex>
    </Screen>
  );
}
