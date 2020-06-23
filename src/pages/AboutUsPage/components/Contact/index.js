import React from "react";
import { Link } from "react-router-dom";
import { CenteredFlex, Picture, InlineFlex } from "../../styles";
import fbImg from "../../../../assets/icons/fb.png";
import instaImg from "../../../../assets/icons/insta.png";
import twitterImg from "../../../../assets/icons/twitter.png";

export default function Contact() {
  return (
    <CenteredFlex
      style={{
        backgroundColor: "#8CC9BA",
        paddingBottom: "8vh",
        paddingTop: "8vh",
        color: "#FFFFFF",
      }}
    >
      <h5>CONTACT</h5>
      <h6>giveessential@gmail.com</h6>
      <InlineFlex>
        <a href="https://www.facebook.com/GiveEssential">
          <Picture src={fbImg} alt="FB icon" />
        </a>
        <a href="https://www.instagram.com/giveessential/">
          <Picture src={instaImg} alt="Instagram icon" />
        </a>
        <a href="https://twitter.com/giveessential">
          <Picture src={twitterImg} alt="Twitter icon" />
        </a>
      </InlineFlex>
    </CenteredFlex>
  );
}
