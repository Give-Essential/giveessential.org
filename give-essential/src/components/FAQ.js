import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/faqstyle.css'
import '../css/style2.css'

export default function FAQ() {
    return (<body>
        <div class="cover">
            <nav>
                <div class="mobile-nav">
                    <a href="/" id="logo"><img id="logo" src="img/newgraphics/colornotitle.png" alt="site logo"></a>
                    <ul>
                        <li>
                            <label for="mobile-toggle"><i class="fa fa-bars" style="color: #304741"></i></label>
                            <input type="checkbox" id="mobile-toggle">
                            <div class="mobile-popup-menu">
                                <div class="toggle-nav">
                                    <a href="/" id="logo"><img id="logo" src="img/newgraphics/logonotitle.png" alt="site logo"></a>
                                    <ul>
                                        <li>
                                            <label for="mobile-toggle"><i class="fa fa-times"></i></label>
                                        </li>
                                    </ul>
                                </div>
                                <div class="toggle-links">
                                    <ul>
                                      <li><a href="" onclick="window.open('https://giveessential.typeform.com/to/iiqUH5')" style="color:white">I'm an essential worker</a></li>
                                      <li><a href="" onclick="window.open('https://giveessential.typeform.com/to/LWKggm')" style="color:white">I want to donate</a></li>
                                      <li><a href="https://giveessential.org/#work" style="color:white">How this works</a></li>
                                      <li><a href="/faq" style="color:white">FAQ</a></li>
                                      <li><a href="https://giveessential.org/#contact" style="color:white">Contact</a></li>
                                      <li><a href="#"
                                          onclick="window.open('https://www.gofundme.com/f/give-essential?utm_source=customer&utm_medium=copy_link&utm_campaign=p_cf+share-flow-1')" style="color:white">Our
                                          GoFundMe</a>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="web-nav">
                    <a href="/" id="logo"><img id="logo" src="img/newgraphics/logonotitle.png" alt="site logo"></a>
                    <ul>
                      <li><a href="/#how" style="color: white">How does this work?</a></li>
                      <li><a href="/#who" style="color: white">Meet the team</a></li>
                        <li><a href="/faq" style="color: white">FAQ</a></li>
                        <li><a href="/#contact" style="color: white">Contact</a></li>
                        <li><a href="#" onclick="window.open('https://www.gofundme.com/f/give-essential?utm_source=customer&utm_medium=copy_link&utm_campaign=p_cf+share-flow-1')" class="donate">Our GoFundMe</a></li>
                    </ul>
                </div>
            </nav>
          </div>
          <div class = "questions">
          <section class="cd-faq js-cd-faq container max-width-md margin-top-lg margin-bottom-lg">
          <ul class="cd-faq__categories">
              <li><a class="cd-faq__category cd-faq__category-selected truncate" href="#basics">Basics</a></li>
              <li><a class="cd-faq__category truncate" href="#essential">Essential workers</a></li>
              <li><a class="cd-faq__category truncate" href="#donors">Donors</a></li>
              <li><a class="cd-faq__category truncate" href="#volunteers">Volunteers</a></li>
          </ul> <!-- cd-faq__categories -->
    
          <div class="cd-faq__items">
              <ul id="basics" class="cd-faq__group">
                  <li class="cd-faq__title"><h2>Basics</h2></li>
                  <li class="cd-faq__item">
                      <a class="cd-faq__trigger" href="#0"><span>What is Give Essential?</span></a>
                      <div class="cd-faq__content">
                <div class="text-component">
                  <p>
                    Give Essential is a matching platform that connects people with extra resources
                    to essential workers who need them. We allow donors to directly
                    send items to essential workers on the frontline, creating a personal
                    donation process.
                    <br><br>
                    We want to help the delivery workers who don't have protective equipment like gloves or masks,
                    though they are the ones in crowded stores handling our groceries and deliveries. We want to
                    give back to the grocery store shoppers who must leave their children
                    alone at home to work long and odd hours by providing their children with education subscriptions and games, or
                    meal kit subscriptions to make it easier to feed their families. We want to help cashiers who have to face sudden limited access to feminine
                    and hygiene products; janitors who spend all day with harsh chemicals and could really benefit from a bottle of
                    lotion and nice soap.
                    <br><br>
                    We all have extra resources lying around our houses that
                    can help ease some of the struggles many essential workers are facing today—why not put them to use?
                  </p>
                </div>
                      </div> <!-- cd-faq__content -->
                  </li>
    
                  <li class="cd-faq__item">
                      <a class="cd-faq__trigger" href="#0"><span>What areas do you serve?</span></a>
                      <div class="cd-faq__content">
                <div class="text-component">
                  <p>We aim to primarily serve essential workers in the United States. Contact us if you're interesting in expanding Give Essentials to your area!</p>
                </div>
                      </div> <!-- cd-faq__content -->
                  </li>
    
            <li class="cd-faq__item">
              <a class="cd-faq__trigger" href="#0"><span>How does this work?</span></a>
              <div class="cd-faq__content">
                <div class="text-component">
                  <p>
                    1.) Visit our <a href="/" class="faqlink">home page</a>!<br>
                    2.) If you want to donate items: <br>
                    &emsp;&emsp;&emsp; Click <a href="" onclick="window.open('https://giveessential.typeform.com/to/c0t1cG')" class="faqlink">“I want to donate”</a> and fill out the form.
                    <br>
                    3.) If you're an essential worker and need items: <br>
                    &emsp;&emsp;&emsp; Click <a href="" onclick="window.open('https://giveessential.typeform.com/to/Mk76Bo')" class="faqlink">“I'm an essential worker”</a> and fill out the form.
                    <br>
                    4.) We will create the match between people with extra goods to people who need those same goods. We will email the donor
                    with the essential worker's information and needs.
                    <br>
                    5.) Donors can ship items via postal service (without even leaving their house) or purchase an item online to ship directly.
                    <br><br>
                    Please note: Donations are intended only for the essential worker and not to be sold.
                    </p>
                </div>
              </div> <!-- cd-faq__content -->
            </li>
    
    
            <li class="cd-faq__item">
              <a class="cd-faq__trigger" href="#0"><span>I don't have any items to donate, but want to help.</span></a>
              <div class="cd-faq__content">
                <div class="text-component">
                  <p> Please donate to our <a href="#" onclick="window.open('https://www.gofundme.com/f/give-essential?utm_source=customer&utm_medium=copy_link&utm_campaign=p_cf+share-flow-1')" class="faqlink">GoFundMe</a>!
                    We will be using the GoFundMe deomations to provide items for the essential workers we are
                    unable to match, as well as to cover operational costs (we are currently funding everything out
                    of our own pockets).
    <br><br>Also, we are looking for volunteers! If you're interested in helping us facilitate matches,
                    please email us at: team@giveessential.org with the subject "I want to volunteer"
                  and we will get back to you right away.</p>
                </div>
              </div> <!-- cd-faq__content -->
            </li>
    
            <li class="cd-faq__item">
              <a class="cd-faq__trigger" href="#0"><span>Can you pledge not do anything with the collected information?</span></a>
              <div class="cd-faq__content">
                <div class="text-component">
                  <p> Yes - we will not be sharing any of the information unless otherwise indicated.</p>
                </div>
              </div> <!-- cd-faq__content -->
            </li>
    
                  <li class="cd-faq__item">
                      <a class="cd-faq__trigger" href="#0"><span>Who are we?</span></a>
                      <div class="cd-faq__content">
                <div class="text-component">
                  <p>
                    We're Amy and Rine, two college roommates. As we've watched COVID-19 unfurl and significantly change
                    the world around us, we wondered what we could do to help. We were touched by how willing people were to donate
                    and come together to sew masks, donate money to various organizations, and shift services like fitness classes and therapy sessions online.
                    <br><br>However, we noticed one group that seemed neglected and in increasing danger.
                    We were troubled by the treatment of essential workers despite society's increasing reliance on them to power our day to day lives.
                    They deliver goods to our homes, man grocery stores, and
                    risk their lives daily to provide services for us, often working long hours without increased pay or necessary protective equipment.
                    We wanted to create a way for people to directly help the essential workers
                    we are relying on more than ever, without needing to even leave the home to do so. And so, we came up with Give Essential.
                    </p>
                </div>
                      </div> <!-- cd-faq__content -->
                  </li>
              </ul> <!-- cd-faq__group -->
    
              <ul id="essential" class="cd-faq__group">
                  <li class="cd-faq__title"><h2>Essential workers</h2></li>
                  <li class="cd-faq__item">
                      <a class="cd-faq__trigger" href="#0"><span>How do I prove my essential worker status?</span></a>
                      <div class="cd-faq__content">
                <div class="text-component">
                  <p>
                    Anything that will verify your status. A screenshot of an email from your manager (with a date and name),
                    your last paycheck,
                    screenshots from an employee app (your name must be included in the picture),
                    or any other documentation that will help us verify your status. <br><br>
                    If we cannot verify your status, you will not be matched.
                                </p>
                </div>
                      </div> <!-- cd-faq__content -->
                  </li>
            <li class="cd-faq__item">
              <a class="cd-faq__trigger" href="#0"><span>What types of items are being donated?</span></a>
              <div class="cd-faq__content">
                <div class="text-component">
                  <p>
                    Anything that you are in need of or will help you in light of COVID-19. Donations are intended only for the essential worker and not to be sold.
                     We'll provide a number of categories in the form to make it easier for the donor to match up
                    with your categories of needs:
                    <br>
                    <br>&emsp;&emsp;&emsp;- Personal hygiene/care products (ex: hand/dish soap, shampoo, detergent, lotion);
                    <br>&emsp;&emsp;&emsp;- Female hygiene products (ex: pads/tampons);
                    <br>&emsp;&emsp;&emsp;- Kids activities (educational subscriptions, electronics, board games/puzzles);
                    <br>&emsp;&emsp;&emsp;- Gift cards (grocery, gas station);
    
    
                  </p>
                </div>
              </div> <!-- cd-faq__content -->
            </li>
    
    
                  <li class="cd-faq__item">
                      <a class="cd-faq__trigger" href="#0"><span>Are you conducting quality control on the items?</span></a>
                      <div class="cd-faq__content">
                <div class="text-component">
                  <p>No, we are not. We are just a peer-to-peer matching platform that connects essential
                    workers who need items to people who have spare items. We are not guaranteeing anything, but
                    are relying on the generosity and kindness we've seen displayed all around the world. :) We are not liable
                  for any of the items delivered. </p>
                </div>
                      </div> <!-- cd-faq__content -->
                  </li>
    
                  <li class="cd-faq__item">
                      <a class="cd-faq__trigger" href="#0"><span>When will I get matched?</span></a>
                      <div class="cd-faq__content">
                <div class="text-component">
                  <p>
                    We will email out as soon as we find a match for your needs! We want to help you as soon as we can, but
                    this is dependent on the donors we currently have signed up.
                    </p>
                </div>
                      </div> <!-- cd-faq__content -->
                  </li>
            <li class="cd-faq__item">
                      <a class="cd-faq__trigger" href="#0"><span>Am I guaranteed a match?</span></a>
                      <div class="cd-faq__content">
                <div class="text-component">
                  <p>
                    While we would love to match everyone, we cannot guarantee that you will be matched.
                    There is more demand for supplies than there are donors, but we will do our best to fulfill
                    requests as they are submitted. Please note that if we are unable to verify your proof of
                    essential worker status, we will not be able to make a match.
                  </p>
                </div>
                      </div> <!-- cd-faq__content -->
                  </li>
    
            <li class="cd-faq__item">
              <a class="cd-faq__trigger" href="#0"><span>Will I get everything I ask for?</span></a>
              <div class="cd-faq__content">
                <div class="text-component">
                  <p>
                    This is dependent on our donors, but likely, we will be able to fulfill 1 or 2 of the categories you request.
                    PPE/COVID-protection items in particular are tricky to come by, as there is a national shortage and most of it is being donated to and dedicated to
                    healthcare workers.
                    </p>
                </div>
              </div> <!-- cd-faq__content -->
            </li>
    
    
            <li class="cd-faq__item">
              <a class="cd-faq__trigger" href="#0"><span>When will my delivery arrive?</span></a>
              <div class="cd-faq__content">
                <div class="text-component">
                  <p>
                    We will send you a tracking number for your delivery as soon as we receive one from the donor!
                    </p>
                </div>
              </div> <!-- cd-faq__content -->
            </li>
              </ul> <!-- cd-faq__group -->
    
              <ul id="donors" class="cd-faq__group">
                  <li class="cd-faq__title"><h2>Donors</h2></li>
                  <li class="cd-faq__item">
                      <a class="cd-faq__trigger" href="#0"><span>What types of things can I donate?</span></a>
                      <div class="cd-faq__content">
                <div class="text-component">
                  <p>
                    Anything you have around the house that will help someone facing challenges related to
                    COVID-19! Many common day-to-day items have flown off shelves
                    both in stores and online, from protective equipment like gloves to food items like
                    flour and bread. Truly, anything can help.
                    Some example of in-demand items: masks, body lotion, toys, groceries
                    <br><br>You can let us know what categories you'd like to help out with, and we'll match you with someone who would like help in that category.
                    Here are our current categories:
                    <br>
                    <br>&emsp;&emsp;&emsp;- Personal hygiene/care products (ex: hand/dish soap, shampoo, detergent, lotion);
                    <br>&emsp;&emsp;&emsp;- Female hygiene products (ex: pads/tampons);
                    <br>&emsp;&emsp;&emsp;- Kids activities (educational subscriptions, electronics, board games/puzzles);
                    <br>&emsp;&emsp;&emsp;- Gift cards (grocery, gas station);
    
                    <br><br>Is there a way that you want to support that isn't listed? Email us here: team@giveessential.com
                  </p>
                </div>
                      </div> <!-- cd-faq__content -->
                  </li>
    
                  <li class="cd-faq__item">
                      <a class="cd-faq__trigger" href="#0"><span>Can I send extra items that weren't requested?</span></a>
                      <div class="cd-faq__content">
                <div class="text-component">
                  <p>Certainly! We want to spread joy in any way possible. You'll get to learn a little about
                    the essential worker you're matched with, so feel free to add anything you think will help them or brighten
                    their day (a quick hand-drawn card can do wonders!).
                  </p>
                </div>
                      </div> <!-- cd-faq__content -->
                  </li>
    
                  <li class="cd-faq__item">
                      <a class="cd-faq__trigger" href="#0"><span>Are you covering delivery costs?</span></a>
                      <div class="cd-faq__content">
                <div class="text-component">
                  <p>While we would love to, we are currently not covering shipping fees.</p>
                </div>
                      </div> <!-- cd-faq__content -->
                  </li>
    
                  <li class="cd-faq__item">
                      <a class="cd-faq__trigger" href="#0"><span>What condition should the items be in?</span></a>
                      <div class="cd-faq__content">
                <div class="text-component">
                  <p>We ask that donors who are planning to send hygiene products and COVID-prevention
                    items to send brand new—in other words: unused, unopened, and undamaged—items. All other items should
                    be in new or like-new condition.
                  </p>
                </div>
                      </div> <!-- cd-faq__content -->
                  </li>
    
            <li class="cd-faq__item">
              <a class="cd-faq__trigger" href="#0"><span>Can I get more than one match?</span></a>
              <div class="cd-faq__content">
                <div class="text-component">
                  <p>Yes! Just let us know in the form, and we will make it happen.
                  </p>
                </div>
              </div> <!-- cd-faq__content -->
            </li>
            <li class="cd-faq__item">
              <a class="cd-faq__trigger" href="#0"><span>How else can I help?</span></a>
              <div class="cd-faq__content">
                <div class="text-component">
                  <p> Please donate to our <a href="#" onclick="window.open('https://www.gofundme.com/f/give-essential?utm_source=customer&utm_medium=copy_link&utm_campaign=p_cf+share-flow-1')" class="faqlink">GoFundMe</a>!
                    We will be using the GoFundMe deomations to provide items for the essential workers we are
                    unable to match, as well as to cover operational costs (we are currently funding everything out
                    of our own pockets).
                    <br><br>We are also looking for volunteers! If you're interested in helping us facilitate matches,
                    please email us at team@giveessential.org with the subject "I want to volunteer"
                  and we will get back to you right away.</p>
                </div>
              </div> <!-- cd-faq__content -->
            </li>
    
    
              <ul id="volunteers" class="cd-faq__group">
                <li class="cd-faq__title"><h2>Volunteers</h2></li>
                <li class="cd-faq__item">
                  <a class="cd-faq__trigger" href="#0"><span>Can I volunteer to help?</span></a>
                  <div class="cd-faq__content">
                    <div class="text-component">
                      <p>
                        We appreciate you! Please email us at: team@giveessential.org with the subject "I want to volunteer"
                        and we will get back to you right away.
                      </p>
                    </div>
                  </div> <!-- cd-faq__content -->
                </li>
    
    
    
    
              </ul> <!-- cd-faq__group -->
    
    
          </div> <!-- cd-faq__items -->
    
          <a href="#0" class="cd-faq__close-panel text-replace">Close</a>
    
        <div class="cd-faq__overlay" aria-hidden="true"></div>
    </section> <!-- cd-faq -->
    </div>
    <script src="assets/js/util.js"></script> <!-- util functions included in the CodyHouse framework -->
    <script src="assets/js/main.js"></script>
    </body>);
}