import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../img/newgraphics/logonotitle.png'
import {Events, animateScroll as scroller } from 'react-scroll'
 
class Navigation extends Component {
    componentDidMount() {
        Events.scrollEvent.register('begin', function () {});
        Events.scrollEvent.register('end', function () {});
    }

    scrollTo(element) {
        scroller.scrollTo(element, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }

      
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
                    <li><NavLink to="#work" onClick={(e) => this.scrollTo('work') }>How does this work?</NavLink></li>
                    <li><NavLink to="#meet" onClick={(e) => this.scrollTo('meet') }>Meet the team</NavLink></li>
                    <li><NavLink to="/faq" >FAQ</NavLink></li>
                    <li><NavLink to="#contact" onClick={(e) => this.scrollTo('contact') }>Contact</NavLink></li>
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