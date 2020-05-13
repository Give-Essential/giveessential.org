import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/style2.css'
import '../css/Home.css'
import { Container, Row, Col } from 'reactstrap';
import Nav from './Nav';

import Referral from './Referral';

export default function Home() {
    return (
        <div className="cover">
          <div>
            <section className="main-container">
              <div className="content-box">
                <div className="content-text-box">
                  <h1 className="maintext">Connecting essential workers to essential items</h1>
                  <h3 className="tagtext">Essential workers on the frontline need your help. Send a package of household items you already own—without leaving your home.
                    <br /><br /></h3>
                </div>
              </div>
              <div className="picture-box">
                <div className="content-links-box">
                  <NavLink to="" onclick="window.open('https://giveessential.typeform.com/to/Mk76Bo')"
                    className="css-button-rounded css-button-rounded-1">I'm an essential worker</NavLink>
                  <NavLink to="" onclick="window.open('https://giveessential.typeform.com/to/LWKggm')"
                    className="css-button-rounded css-button-rounded-2">I want to donate</NavLink>
                    <br /><center><NavLink to="" onclick="window.open('https://www.facebook.com/GiveEssential/')">
                    <i className="fa fa-facebook-square"
                        ><img src={ require('../img/FB.svg') } alt="Facebook" /></i></NavLink>
                        <NavLink to="" onclick="window.open('https://instagram.com/GiveEssential')">
                          <i className="fa fa-instagram" ><img src={ require('../img/IN.svg') } alt="Facebook" /></i></NavLink>
                      <NavLink to="" onclick="window.open('https://twitter.com/GiveEssential')">
                        <i className="fa fa-twitter" ><img src={ require('../img/TW.svg') } alt="Facebook" /></i></NavLink></center>
                </div>
              </div>
            </section>      
            <section className="how">
              <h3 className="how-text">
                <center> How does this work? </center>
              </h3>
              <div className="who-text-box">
                <div className="who-text">
                    <b>Give Essential lets you send your extra household items directly to an essential worker who needs them, providing a way to support the frontline from your home.
                    </b> If you have any supplies or funds to share, you can help!
                    <br /><br />During this pandemic, we have asked essential workers to risk their lives so that our
                    communities can stay safe at home. But who protects them? Let’s help the single mother
                    working to fulfill her 6th grocery delivery order of the day. The immunocompromised
                    veteran forced to take on night shifts re-stocking shelves.
                    Give Essential brings our communities together to give back to our essential workers.
                    <br /><br />
                    We all have extra stuff—board games collecting dust, a box of unused tampons,
                    extra shampoo bottles from hotels.
                    <b>Anything that you can share will go directly to an essential worker in need.</b><br />
                    <br /><b>How are we defining “essential worker”?</b> An essential worker is anyone who has to risk
                    their health in order to make ends meet and/or is unable to work from home.
                    <br /><br /><i><b>Examples:</b></i> Postal workers, delivery shopper/drivers, retail personnel, grocery personnel, bank tellers, EMT
                </div>
              </div>
              <h3 className="secondhow-text">
                <center>I'm interested! What now?</center>
              </h3>
              <section className="interested">
              <Container className="interestedSteps">
                <Row className="flex center">
                  <Col lg="4" md="6" sm="12" className="space">
                    <div className="actionBox signUp">
                      <div className="actionBoxTitle">
                        <h4>1. Sign up</h4>
                        <div className="actionBoxInformation">
                          <p>Essential workers and donors both fill out forms letting us know what essential workers need and what donors have.</p>
                          <form action="https://giveessential.typeform.com/to/Mk76Bo" target="_blank">
                            <button className="xop-btn-2">Essential Workers<i aria-hidden="true"></i></button>
                          </form>
                          <form action="https://giveessential.typeform.com/to/LWKggm" target="_blank">
                            <button className="xop-btn-2">Donors <i aria-hidden="true"></i></button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg="4" md="6" sm="12" className="space">
                    <div className="actionBox createMatch">
                      <div className="actionBoxTitle">
                        <h4>2. We create matches</h4>
                        <div className="actionBoxInformation">
                        <p>For example: We create a match between a donor with extra toys and an essential worker with kids.<br /><br />
                        Categories of donations: personal hygiene products, feminine hygiene products,
                        kids activities, gift cards.</p>
                          <div className="actionImage">
                            <img src={ require('../img/handshake.png') } alt="Handshake" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg="4" md="6" sm="12" className="space">
                    <div className="actionBox giftDelivery">
                      <div className="actionBoxTitle">
                        <h4>3. Gift delivery</h4>
                        <div className="actionBoxInformation">
                          <p>Give Essential will email the donor their match, and the donor will send the essential worker their donation! <br/><br/> Donors can directly support the frontline without even leaving their home, using resources they already have.</p>
                          <div className="actionImage">
                            <img src={ require('../img/truck.png') } alt="Handshake" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
              </section>

              <h3 className="secondhow-text">
                <center>Featured Donation Requests</center>
              </h3>
              <center>
                <p >Read about some of the essential workers you can help.</p>
              </center>
              <div className="how-text-box">
                <iframe title="Google Doc" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ4iBqbwQPXMU25n0z2YuTK_59mhDvRMATPzX-hz1cxKb5ztsCIYFwA-I8UDxKmIc5HFwlGyM1Biglw/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
              </div>      
            </section>
            <section className="press">
              <div className="comp-text-box">
                <div className="comp-text-box-header">
                  <h3 className=" how-text">In the news</h3>
                </div>
                <Container className="about">
                <Row>
                  <Col lg="3" md="6" sm="12">
                    <NavLink to="" onclick="window.open('https://www.nj.com/coronavirus/2020/04/need-supplies-have-some-to-donate-these-nj-college-students-found-a-way-pair-you-up.html')">
                      <img border="18vw" alt="typeform" src={ require("../img/media/NJ.png") } height="350vw" />
                    </NavLink>
                  </Col>
                  <Col lg="3" md="6" sm="12">
                    <NavLink to="" onclick="window.open('https://twitter.com/AnnMcLaneKuster/status/1251879134239866880')">
                      <img border="18vw" alt="typeform" src={ require("../img/media/kuster.png") } height="350vw" />
                    </NavLink>
                  </Col>
                  <Col lg="3" md="6" sm="12">
                    <NavLink to="" onclick="window.open('https://www.vnews.com/Volunteer-Spotlight-Dartmouth-students-launch-program-to-connect-essential-workers-with-volunteers-33949710')">
                      <img border="18vw" alt="typeform" src={ require("../img/media/valleynews.png") } height="350vw" />
                    </NavLink>
                  </Col>
                  <Col lg="3" md="6" sm="12">
                    <NavLink to="" onclick="window.open('https://www.baynews9.com/fl/tampa/news/2020/04/21/college-students-create-website-to-help-essential-workers')">
                      <img border="18vw" alt="typeform" src={ require("../img/media/baynews.png") } width="350vw" />
                    </NavLink>
                  </Col>
                </Row>
                </Container>
              </div>
            </section>
            <Referral />
            <section className="who">
              <Container className="about">
                <Row>
                  <Col lg="6" sm="12">
                    <img alt="typeform" src={ require("../img/cofounders.png") } />
                  </Col>
                  <Col lg="6" sm="12">
                  <div>
                    <p>
                      <h3>Meet the co-founders</h3>
                    </p>
                    <p>We're Amy and Rine, two college roommates. Over the past few weeks,
                      COVID-19 has turned our lives upside down. We were troubled by the
                      lack of support for essential workers despite society's increasing
                      reliance on their services, and wanted to help. We built and launched
                      Give Essential within 72 hours and have been touched by the responses we've received.
                    </p>
                    <p>Since then, we've built a team of 30+ volunteers. We are a 100% volunteer-run organization and could not do this without our incredible team.</p>
                    <p><b>Executive Directors:</b> Amy, Crystal, Rine</p>
                    <p><b>Core Team:</b> Cindy, Kaitlyn, Kristie, Luiza</p>
                    <p><b>Software Engineers:</b> Jai Smith, John MacDonald</p>
                    <NavLink to="" onclick="window.open('https://giveessential.typeform.com/to/Uj4kWJ')">Check out this form if you're interested in volunteering!</NavLink>
                  </div>
                  </Col>
                </Row>
              </Container>
            </section>
            <section className="contact">
              <div className="ct-text-box">
                <h3 className="how-text">Contact us!</h3>
                <h3 ><b>General questions:</b> team@giveessential.org</h3>
                <h3 ><b>Outreach:</b> outreach@giveessential.org</h3>
                <h3 ><b>Media:</b> pr@giveessential.org</h3>
              </div>
            </section>
          </div>
          <footer>
            <div className="privacy-policy">
              <ul>
                <li>
                  <NavLink to="https://docs.google.com/document/d/19mfnurvguiTeBEgWk79-u0tLASRgJqcZL1u0fISkLxQ/edit?usp=sharing"
                    id="logo">
                    Privacy Policy
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="social-links">
              <ul>
                <li>
                  <NavLink to="" onclick="window.open('https://www.facebook.com/GiveEssential/')">
                  <i className="fa fa-facebook-square"
                      ></i></NavLink></li>
                <li><NavLink to="" onclick="window.open('https://twitter.com/GiveEssential')"><i className="fa fa-twitter" ></i></NavLink></li>
                <li><NavLink to="" onclick="window.open('https://instagram.com/GiveEssential')"><i className="fa fa-instagram" ></i></NavLink></li>
              </ul>
            </div>
          </footer>
        </div>
    );
}