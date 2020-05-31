import React, { Component } from 'react'
import Logo from '../assets/images/logo.svg';
import { NavLink } from 'react-router-dom';
import { Button } from "reactstrap";

import '../css/Navigation.css'

class NavigationBar extends Component {
    render() {
        return (
            <div className="navigation">
                <div className="logoBox">
                    <img src={Logo} alt="logo for navigation bar" />
                </div>
                <div className="navLinks">
                    <NavLink to="/">HOW DOES THIS WORK?</NavLink><br />
                    <NavLink to="/">WHO WE ARE</NavLink><br />
                    <NavLink to="/">CONTACT US</NavLink>
                </div>
                <div className="navSideBar">
                    <NavLink to="/">GET HELP</NavLink>
                    <NavLink className="donate" to="/">DONATE</NavLink>
                </div>
            </div>
        );
    }
}

export default NavigationBar;