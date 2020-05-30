import React, { Component } from 'react'
import Logo from '../assets/images/logo.svg';
import { Link } from 'react-router-dom';
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
                    <Link to="/">HOW DOES THIS WORK?</Link><br />
                    <Link to="/">WHO WE ARE</Link><br />
                    <Link to="/">CONTACT US</Link>
                </div>
                <div className="navSideBar">
                    <Link to="/">GET HELP</Link>
                    <Link className="donate" to="/">DONATE</Link>
                </div>
            </div>
        );
    }
}

export default NavigationBar;