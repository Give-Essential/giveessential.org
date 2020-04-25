import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/faqstyle.css'
import '../css/style2.css'

export default function EssentialWorkers () {
    return (
        <body>
    <div class="cover">
        <nav>
            <div class="mobile-nav">
                <a href="#" id="logo"><img id="logo" src="img/ge_center_sm.png" alt="site logo"></a>
                <ul>
                    <li>
                        <label for="mobile-toggle"><i class="fa fa-bars" style="color: #3c4731"></i></label>
                        <input type="checkbox" id="mobile-toggle">
                        <div class="mobile-popup-menu">
                            <div class="toggle-nav">
                                <a href="/" id="logo"><img id="logo" src="img/communitylogowhite.png" alt="site logo"></a>
                                <ul>
                                    <li>
                                        <label for="mobile-toggle"><i class="fa fa-times"></i></label>
                                    </li>
                                </ul>
                            </div>
                            <div class="toggle-links">
                                <ul>
                                    <li><a href="/essentialworkers">I'm an essential worker</a></li>
                                    <li><a href="/donors">I want to donate</a></li>
                                    <li><a href="/faq">FAQ</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                    <li><a href="#" onclick="window.open('https://www.gofundme.com/f/give-essential?utm_source=customer&utm_medium=copy_link&utm_campaign=p_cf+share-flow-1')">Our GoFundMe</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="web-nav-f">
                <a href="/" id="logo"><img id="logo" src="img/ge_center_sm.png" alt="site logo"></a>
                <ul>
                  <li><a href="/#how" style="color: #3c4731">How does this work?</a></li>
                  <li><a href="/#who" style="color: #3c4731">Meet the team</a></li>
                    <li><a href="/faq" style="color: #3c4731">FAQ</a></li>
                    <li><a href="#contact" style="color: #3c4731">Contact</a></li>
                    <li><a href="#" onclick="window.open('https://www.gofundme.com/f/give-essential?utm_source=customer&utm_medium=copy_link&utm_campaign=p_cf+share-flow-1')" class="donate">Our GoFundMe</a></li>
                </ul>
            </div>
        </nav>

        <div class="form-container">
          <p><center><i>* If there is an issue with the form below, please <a href="#" onclick="window.open('https://giveessential.typeform.com/to/I3eh9p') " style="font-weight:800; color:#3c4731; opacity:0.8;">click here.</a> </i></center>
</p>

          <div class="form-box">
<div class="typeform-widget" data-url="https://giveessential.typeform.com/to/I3eh9p" data-transparency="50" data-hide-headers=true data-hide-footer=true style="width: 80vw; height: 80vh;"></div> <script> (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; if(!gi.call(d,id)) { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })() </script> <div style="font-family: Sans-Serif;font-size: 12px;color: #999;opacity: 0.5; padding-top: -10px;"> powered by <a href="https://admin.typeform.com/signup?utm_campaign=I3eh9p&utm_source=typeform.com-01E5BB3NAXE55X272MQKJF4PQT-essentials&utm_medium=typeform&utm_content=typeform-embedded-poweredbytypeform&utm_term=EN" style="color: #999" target="_blank">Typeform</a> </div>          </div>
        </div>

        <footer>
            <ul>
                <!-- <li><a href="#"><i class="fa fa-facebook-square" style="color: #3c4731"></i></a></li>-->
                <li><a href="http://twitter.com/GiveEssential"><i class="fa fa-twitter" style="color: #3c4731;"></i></a></li>
                <!-- <li><a href="#"><i class="fa fa-instagram" style="color: #3c4731"></i></a></li>-->
            </ul>
            <li>            <a href="" onclick="window.open('https://docs.google.com/document/d/19mfnurvguiTeBEgWk79-u0tLASRgJqcZL1u0fISkLxQ/edit?usp=sharing')" id="logo">
                          Privacy Policy
                        </a>
                      </li>

        </footer>
</body>
    );
}