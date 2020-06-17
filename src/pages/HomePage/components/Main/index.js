import React from "react";
import { RowFlex, ColumnFlex } from "../../styles";
import { Picture, HeavyText, LightText } from "./styles";
import Button from "./Button";
import { Link } from "react-router-dom";
import adImg from "../../../../assets/images/landing_img.PNG";

export default function Main() {
  return (
    <RowFlex style={{ paddingBottom: 80, background: "linear-gradient(-60deg,#8CC9BA 30%,#ffffff 30%)"}}>
      <ColumnFlex style={{ marginTop: 120, marginLeft: "9vw" }}>
        <ColumnFlex>
          <LightText style={{ marginBottom: 16 }}>GIVE ESSENTIAL IS</LightText>
          <HeavyText style={{ marginBottom: 60 }}>
            Helping essential workers access the items they need
          </HeavyText>
        </ColumnFlex>
        <RowFlex>
          <Link to="/donor-form">
            <Button primary style={{ marginRight: 14 }}>
              GIVE HELP
            </Button>
          </Link>
          <Button>GET HELP</Button>
        </RowFlex>
      </ColumnFlex>
      <ColumnFlex>
        <Picture src={adImg} alt="Example box given to a worker" />
      </ColumnFlex>
    </RowFlex>
  );
}
