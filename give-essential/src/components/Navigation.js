import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../img/newgraphics/logonotitle.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';

class Navigation extends Component {
    render() {
        return (
            <nav>
                <div className="mobile-nav">
                  <NavLink to="#" id="logo"><img id="logo" src={ Logo } alt="site logo" /></NavLink>
                  <ul>
                    <li>
                      <label><i clascoms="fa fa-bars" ></i></label>
                      <input type="checkbox" id="mobile-toggle" />
                      <div className="mobile-popup-menu">
                        <div className="toggle-nav">
                          <NavLink to="#" id="logo"><img id="logo" src={ Logo } alt="site logo" /></NavLink>
                          <ul>
                            <li>
                              <label><i className="fa fa-times"></i></label>
                            </li>
                          </ul>
                        </div>
                        <div className="toggle-links">
                          <ul>
                            <li><NavLink to="" onClick={(e) => window.open('https://giveessential.typeform.com/to/Mk76Bo')}>I'm an essential worker</NavLink></li>
                            <li><NavLink to="" onClick={(e) => window.open('https://giveessential.typeform.com/to/LWKggm')}>I want to donate</NavLink></li>
                            <li><NavLink to="https://giveessential.org/#work">How this works</NavLink></li>
                            <li><NavLink to="/faq">FAQ</NavLink></li>
                            <li><NavLink to="https://giveessential.org/#contact">Contact</NavLink></li>
                            <li><NavLink to="#"
                                onClick={(e) => window.open('https://www.gofundme.com/f/give-essential?utm_source=customer&utm_medium=copy_link&utm_campaign=p_cf+share-flow-1') }>Our
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
                    <li><AnchorLink offset='100' href='#how'>How does this work?</AnchorLink></li>
                    <li><AnchorLink offset='100' href='#meet'>Meet the team</AnchorLink></li>
                    <li><NavLink to="/faq" >FAQ</NavLink></li>
                    <li><AnchorLink offset='100' href='#contact'>Contact</AnchorLink></li>
                    <li><NavLink to="#"
                                onClick={(e) => window.open('https://www.gofundme.com/f/give-essential?utm_source=customer&utm_medium=copy_link&utm_campaign=p_cf+share-flow-1') }>Our
                                GoFundMe</NavLink></li>
                  </ul>
                </div>
              </nav>
        );
    }
}

export default Navigation;