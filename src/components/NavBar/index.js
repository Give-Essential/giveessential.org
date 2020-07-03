import React from 'react';
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
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { LogoPic, ItalicText } from './styles';

import Logo from '../../assets/images/logo.PNG';

import 'bootstrap/dist/css/bootstrap.min.css';

const textStyles = {
  textTransform: 'uppercase',
  fontFamily: 'Archivo Narrow, sans-serif',
  fontStyle: 'normal',
  fontWeight: 'normal',
};

export function NavBar() {
  return (
    <div style={{ boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)' }}>
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
        </Nav>
        <Nav navbar style={{ float: 'right', margin: 0 }}>
          <NavItem style={textStyles}>
            <NavLink
              href="/get-help"
              style={{ fontStyle: 'italic', fontWeight: 800, color: '#000' }}
            >
              Get help
            </NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar style={textStyles}>
            <DropdownToggle
              nav
              caret
              style={{ fontWeight: 800, color: '#FD8E7B' }}
            >
              Donate
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem tag={Link} to="/donor-form">
                Give Items
              </DropdownItem>
              <DropdownItem>Be a Patron</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
