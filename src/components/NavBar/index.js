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
// import { Link } from 'react-router-dom';
import { LogoPic, MediaIcons } from "./styles";
import { Picture} from "../../pages/ContactPage/styles";

import Logo from "../../assets/images/logoWhite.png";
import fbImg from "../../assets/icons/fbWhite.png";
import instaImg from "../../assets/icons/instagramWhite.png";
import twitterImg from "../../assets/icons/twitterWhite.png";
import linkedinImg from "../../assets/icons/linkedinWhite.png";

import "bootstrap/dist/css/bootstrap.min.css";

const textStyles = {
  fontFamily: "Montserrat, Open Sans",
  fontStyle: "normal",
  fontWeight: "normal",
  color: "#fff",
};

const btnStyle = {
  backgroundColor: "#F3D04E",
  color: "#FFF", border: 0,
  textAlign: "center",
  borderRadius: ".4em",
  padding: "1.2em 2.004em",
  lineHeight: "1.2em",
  fontWeight: "420",
  letterSpacing: "0.02em",
  fontFamily: "Montserrat",
  // textTransform: "none",
  // fontStyle: "normal"
}
// #8CC9BA

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
      // <div style={{ backgroundColor: "#8CC9BA", boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)"}}>
      //
      // </div>
      <div style={{ boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)", backgroundColor: "#8CC9BA" }}>
     <Navbar light expand="md">
      <NavbarBrand href="/" >
      <LogoPic src={Logo} alt="Logo" />
      </NavbarBrand>
       <NavbarToggler onClick={toggle} />
       <Collapse isOpen={isOpen} navbar>

     <Nav className="mr-auto" navbar style={textStyles} >
    <NavItem>
      <div style={{color: "#ffffff"}}>
        <NavLink href="https://www.giveessential.org/faq">What We Do</NavLink>
      </div>
    </NavItem>
    <NavItem>
      <NavLink href="https://www.giveessential.org/how-can-i-help">How Can I Help?</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="https://www.giveessential.org/our-team">Our Team</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="https://www.giveessential.org/merch">Merch</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="https://www.giveessential.org/contact">Contact Us</NavLink>
    </NavItem>
  </Nav>

  <Nav style={{paddingInline: "0px"}}>
    <NavItem>
      <NavLink href="http://instagram.com/giveessential">
        <MediaIcons src={instaImg} alt="Instagram icon" />
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="https://www.facebook.com/GiveEssential/">
        <MediaIcons src={fbImg} alt="Facebook icon"/>
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="https://twitter.com/GiveEssential">
        <MediaIcons src={twitterImg} alt="Twitter icon"/>
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="https://www.linkedin.com/company/give-essential">
        <MediaIcons src={linkedinImg} alt="Linkedin icon"/>
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
