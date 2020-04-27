import React from 'react';
import '../css/style2.css';
import '../css/Home.css';
import { NavLink } from 'react-router-dom';
import Logo from '../img/newgraphics/logonotitle.png'

export default function Nav() {
  return (
    <nav>
      <div className="mobile-nav">
        <NavLink to="#" id="logo"><img id="logo" src={ Logo } alt="site logo" /></NavLink>
        <ul>
          <li>
            <label for="mobile-toggle"><i clascoms="fa fa-bars" ></i></label>
            <input type="checkbox" id="mobile-toggle" />
            <div className="mobile-popup-menu">
              <div className="toggle-nav">
                <NavLink to="#" id="logo"><img id="logo" src={ Logo } alt="site logo" /></NavLink>
                <ul>
                  <li>
                    <label for="mobile-toggle"><i className="fa fa-times"></i></label>
                  </li>
                </ul>
              </div>
              <div className="toggle-links">
                <ul>
                  <li><NavLink to="" onclick="window.open('https://giveessential.typeform.com/to/Mk76Bo')">I'm an essential worker</NavLink></li>
                  <li><NavLink to="" onclick="window.open('https://giveessential.typeform.com/to/LWKggm')">I want to donate</NavLink></li>
                  <li><NavLink to="https://giveessential.org/#work">How this works</NavLink></li>
                  <li><NavLink to="/faq">FAQ</NavLink></li>
                  <li><NavLink to="https://giveessential.org/#contact">Contact</NavLink></li>
                  <li><NavLink to="#"
                    onclick="window.open('https://www.gofundme.com/f/give-essential?utm_source=customer&utm_medium=copy_link&utm_campaign=p_cf+share-flow-1')">Our
                    GoFundMe</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="web-nav">
        <NavLink to="/" id="logo"><img id="logo" src={ Logo } alt="site logo" /></NavLink>
        <ul>
          <li><NavLink to="#work" >How does this work?</NavLink></li>
          <li><NavLink to="#meet" >Meet the team</NavLink></li>
          <li><NavLink to="/faq" >FAQ</NavLink></li>
          <li><NavLink to="#contact" >Contact</NavLink></li>
          <li><NavLink to="#"
            onclick="window.open('https://www.gofundme.com/f/give-essential?utm_source=customer&utm_medium=copy_link&utm_campaign=p_cf+share-flow-1')"
            className="donate">Our GoFundMe</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};
