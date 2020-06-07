import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { LogoPic } from "./styles";

import Logo from "../../assets/images/logo.PNG";

import "bootstrap/dist/css/bootstrap.min.css";

const textStyles = {
  textTransform: "uppercase",
  fontFamily: "Archivo Narrow, sans-serif",
  fontStyle: "normal",
  fontWeight: "normal",
};

export function NavBar() {
  return (
    <div style={{ boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)" }}>
      <Navbar color="white" light expand="md">
        <NavbarBrand href="/">
          <LogoPic src={Logo} alt="Logo" />
        </NavbarBrand>
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
          <NavItem>
            <NavLink href="/get-help">Get help</NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Donate
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Give Items</DropdownItem>
              <DropdownItem>Be a Patron</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
