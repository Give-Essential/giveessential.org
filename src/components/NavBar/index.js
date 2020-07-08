import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink as RSNavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { Link, NavLink as RRNavLink } from 'react-router-dom';
import { LogoPic } from './styles';

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
        <NavbarBrand tag={Link} to="/">
          <LogoPic src={Logo} alt="Logo" />
        </NavbarBrand>
        <Nav className="mr-auto" navbar style={textStyles}>
          <NavItem>
            <RSNavLink tag={RRNavLink} to="/about">
              How does this work?
            </RSNavLink>
          </NavItem>
          <NavItem>
            <RSNavLink tag={RRNavLink} to="/about-us">
              Who we are
            </RSNavLink>
          </NavItem>
          <NavItem>
            <RSNavLink tag={RRNavLink} to="/contact">
              Contact us
            </RSNavLink>
          </NavItem>
        </Nav>
        <Nav navbar style={{ float: 'right', margin: 0 }}>
          <NavItem style={textStyles}>
            <RSNavLink
              tag={RRNavLink}
              to="/get-help"
              style={{ fontStyle: 'italic', fontWeight: 800, color: '#000' }}
            >
              Get help
            </RSNavLink>
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
