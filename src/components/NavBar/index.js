import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse
} from "reactstrap";
import { Link } from 'react-router-dom';
import { LogoPic, SideNav } from "./styles";

import Logo from "../../assets/images/logo.PNG";

import "bootstrap/dist/css/bootstrap.min.css";

const textStyles = {
  textTransform: "uppercase",
  fontFamily: "Archivo Narrow, sans-serif",
  fontStyle: "normal",
  fontWeight: "normal",
};

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div style={{ boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)" }}>
      <Navbar color="white" light expand="md">
        <NavbarBrand href="/">
          <LogoPic src={Logo} alt="Logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar style={textStyles}>
          <NavItem>
            <NavLink href="/about">How does this work?</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about-us">Who we are</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contact">Contact us</NavLink>
          </NavItem>
        </Nav>
        <Nav navbar style={{margin: 0}}>
          <NavItem style={textStyles}>
            <NavLink href="/essential-worker-form" style={{fontStyle: "italic", fontWeight: 800, color: "#000"}}>Get help</NavLink>
          </NavItem>
          <NavItem style={textStyles}>
            <NavLink href="/donor-form" style={{fontWeight: 800, color: "#FD8E7B"}}>Donate</NavLink>
          </NavItem>
        </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
