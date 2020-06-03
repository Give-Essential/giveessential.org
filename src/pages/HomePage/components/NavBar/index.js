import React, { Component } from "react";
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Col,
  Row,
} from "reactstrap";

import Logo from "../../assets/images/logo.PNG";

const textStyles = {
  textTransform: "uppercase",
  fontFamily: "Archivo Narrow",
  fontStyle: "normal",
  fontWeight: "normal",
};

export class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  render() {
    const toggle = () =>
      this.setState({
        isOpen: !this.state.isOpen,
      });

    return (
      <div style={{ boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)" }}>
        <Navbar color="white" light expand="md">
          <NavbarBrand href="/">
            <img src={Logo} alt="Logo" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar style={textStyles}>
              <NavItem>
                <NavLink href="/components/">How does this work?</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  Who we are
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  Contact us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  Get help
                </NavLink>
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
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
