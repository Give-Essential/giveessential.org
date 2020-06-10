import React from "react";
import { RowFlex, ColumnFlex } from "../../styles";
import { Picture, HeavyText, LightText } from "./styles";
import Button from "./Button";
import { Link } from "react-router-dom";
import adImg from "../../../../assets/images/landing_img.PNG";

export default function Main() {
  return (
    <RowFlex style={{ paddingBottom: 80 }}>
      <ColumnFlex style={{ marginTop: 120, marginLeft: "9vw" }}>
        <ColumnFlex>
          <LightText style={{ marginBottom: 16 }}>GIVE ESSENTIAL IS</LightText>
          <HeavyText style={{ marginBottom: 60 }}>
            Helping essential workers get the items they need.
          </HeavyText>
        </ColumnFlex>
        <RowFlex>
          <Link to="/donor-form">
            <Button primary style={{ marginRight: 14 }}>
              Give Help
            </Button>
          </Link>
          <Button>Get Help</Button>
        </RowFlex>
      </ColumnFlex>
      <Picture src={adImg} alt="Example box given to a worker" />
    </RowFlex>
  );
}
