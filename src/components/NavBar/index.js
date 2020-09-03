import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  Collapse
} from "reactstrap";
import  WebFont from 'webfontloader';
// import { Link } from 'react-router-dom';
import { LogoPic, MediaIcons } from "./styles";
// import { Picture} from "../../pages/ContactPage/styles";

import Logo from "../../assets/images/logoWhite.png";
import fbImg from "../../assets/icons/fbWhite.png";
import instaImg from "../../assets/icons/instagramWhite.png";
import twitterImg from "../../assets/icons/twitterWhite.png";
import linkedinImg from "../../assets/icons/linkedinWhite.png";

import "bootstrap/dist/css/bootstrap.min.css";

const textStyles = {
  fontFamily: "Montserrat, Open Sans",
  // fontStyle: "normal",
  fontWeight: "300",
  fontsize: "1rem"
  // color: "#fff",
};

const btnStyle = {
  backgroundColor: "#F3D04E",
  color: "#FFF", border: 0,
  textAlign: "center",
  borderRadius: ".4em",
  padding: "1em 1.65em",
  lineHeight: "1.2em",
  fontWeight: "1000",
  letterSpacing: "0.02em",
  fontFamily: "Montserrat",
  fontsize: "8px"
  // display: "inline-block"
}
// #8CC9BA

const iconStyle = {
  color: "#fff",
  padding: "0.5em 0.3em",
  // height: "20px"
}

WebFont.load({
  google: {
    families: ['Montserrat', 'open-serif']
  }
});

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


  return (
    <div style={{ boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)", backgroundColor: "#8CC9BA" }}>
      <Navbar light expand="md">
        <NavbarBrand href="/" >
          <LogoPic src={Logo} alt="Logo" />
        </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar style={textStyles} >
          <NavItem>
              <NavLink style={{color: "#fff"}} href="https://www.giveessential.org/faq">What We Do</NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{color: "#fff"}} href="https://www.giveessential.org/how-can-i-help">How Can I Help?</NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{color: "#fff"}} href="https://www.giveessential.org/our-team">Our Team</NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{color: "#fff"}} href="https://www.giveessential.org/merch">Merch</NavLink>
          </NavItem>
          {/*<NavItem>*/}
          {/*  <NavLink style={{color: "#fff"}} href="https://www.giveessential.org/contact">Contact Us</NavLink>*/}
          {/*</NavItem>*/}
        </Nav>

        <Nav style={{}}>
          <NavItem>
            <NavLink style={iconStyle} href="http://instagram.com/giveessential">
              <MediaIcons style={{height: "16px", width: "16px"}} src={instaImg} alt="Instagram icon" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={iconStyle} href="https://www.facebook.com/GiveEssential/">
              <MediaIcons style={{height: "16px", width: "16px"}} src={fbImg} alt="Facebook icon"/>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={iconStyle} href="https://twitter.com/GiveEssential">
              <MediaIcons style={{height: "16px", width: "16px"}} src={twitterImg} alt="Twitter icon"/>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={iconStyle} href="https://www.linkedin.com/company/give-essential">
              <MediaIcons style={{height: "16px", width: "16px"}} src={linkedinImg} alt="Linkedin icon"/>
            </NavLink>
          </NavItem>
        </Nav>

        <Nav navbar style={{ float: "right", margin: 0 }}>
          <NavLink>
            <NavLink href="https://gofundme.com/f/give-essential">
              <button style={btnStyle}>Donate</button>
            </NavLink>
          </NavLink>
        </Nav>
       </Collapse>
    </Navbar>
    </div>

);
}

export default NavBar;
