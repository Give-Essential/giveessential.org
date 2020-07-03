import React from 'react';
import ReactMarkdown from 'react-markdown';
import {
  Nav,
  NavItem,
  Collapse,
  Card,
  CardBody,
  CardHeader,
  CardText,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {
  Screen,
  CenteredFlex,
  RowFlex,
  Paragraph,
  FAQHeader,
  FAQContainer,
  FAQFlex,
} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { isMobile } from 'react-device-detect';
import InfoBox from './components/InfoBox';
import Contact from './components/Contact';
import one from '../../assets/icons/1.png';
import two from '../../assets/icons/2.png';
import three from '../../assets/icons/3.png';
import categories from '../../assets/icons/categories.png';
import match from '../../assets/icons/match.png';
import packagee from '../../assets/icons/package.png';

const data = [
  {
    title: 'Basics',
    items: [
      {
        question: 'What is Give Essential?',
        answer:
          'Give Essential is a matching platform that connects people with extra resources to essential workers who need them. We allow donors to directly send items to essential workers on the frontline, creating a personal donation process.\n\n' +
          "We want to help the delivery workers who don't have protective equipment like gloves or masks, though they are the ones in crowded stores handling our groceries and deliveries. We want to give back to the grocery store shoppers who must leave their children alone at home to work long and odd hours by providing their children with education subscriptions and games, or meal kit subscriptions to make it easier to feed their families. We want to help cashiers who have to face sudden limited access to feminine and hygiene products; janitors who spend all day with harsh chemicals and could really benefit from a bottle of lotion and nice soap.\n\n" +
          'We all have extra resources lying around our houses that can help ease some of the struggles many essential workers are facing today—why not put them to use?',
      },
      {
        question: 'What areas do you serve?',
        answer:
          "We aim to primarily serve essential workers in the United States. Contact us if you're interesting in expanding Give Essentials to your area!",
      },
      {
        question: 'How does this work?',
        answer:
          '1. Visit our [home page](../)\n' +
          '2. If you want to donate items, click ["I want to donate"]() and fill out the form.\n' +
          '3. If you\'re an essential worker and need items, click ["I\'m an essential worker"]() and will out the form.\n' +
          "4. We will create the match between people with extra goods to people who need those same goods. We will email the donor with the essential worker's information and needs.\n" +
          '5. Donors can ship items via postal service (without even leaving their house) or purchase an item online to ship directly.\n\n' +
          'Please note: Donations are intended only for the essential worker and not to be sold.',
      },
      {
        question: "I don't have any items to donate, but want to help.",
        answer:
          'Please donate to our [GoFundMe](https://www.gofundme.com/f/giveessential?utm_source=customer&utm_medium=copy_link&utm_campaign=p_cf+share-flow-1)! We will be using the GoFundMe deomations to provide items for the essential workers we are unable to match, as well as to cover operational costs (we are currently funding everything out of our own pockets).\n\n' +
          'Also, we are looking for volunteers! If you\'re interested in helping us facilitate matches, please email us at: [team@giveessential.org](mailto://team@giveessential.org) with the subject "I want to volunteer" and we will get back to you right away.',
      },
      {
        question:
          'Can you pledge not do anything with the collected information?',
        answer:
          'Yes - we will not be sharing any of the information unless otherwise indicated.',
      },
      {
        question: 'Who are we?',
        answer:
          "We're Amy and Rine, two college roommates. As we've watched COVID-19 unfurl and significantly change the world around us, we wondered what we could do to help. We were touched by how willing people were to donate and come together to sew masks, donate money to various organizations, and shift services like fitness classes and therapy sessions online.\n\n" +
          "However, we noticed one group that seemed neglected and in increasing danger. We were troubled by the treatment of essential workers despite society's increasing reliance on them to power our day to day lives. They deliver goods to our homes, man grocery stores, and risk their lives daily to provide services for us, often working long hours without increased pay or necessary protective equipment. We wanted to create a way for people to directly help the essential workers we are relying on more than ever, without needing to even leave the home to do so. And so, we came up with Give Essential.",
      },
    ],
  },
  {
    title: 'Essential Workers',
    items: [
      {
        question: 'How do I prove my essential worker status?',
        answer:
          'Anything that will verify your status. A screenshot of an email from your manager (with a date and name), your last paycheck, screenshots from an employee app (your name must be included in the picture), or any other documentation that will help us verify your status.\n\n' +
          'If we cannot verify your status, you will not be matched.',
      },
      {
        question: 'What types of items are being donated?',
        answer:
          "Anything that you are in need of or will help you in light of COVID-19. Donations are intended only for the essential worker and not to be sold. We'll provide a number of categories in the form to make it easier for the donor to match up with your categories of needs:\n\n" +
          '- Personal hygiene/care products (ex: hand/dish soap, shampoo, detergent, lotion)\n' +
          '- Female hygiene products (ex: pads/tampons)\n' +
          '- Kids activities (educational subscriptions, electronics, board games/puzzles)\n' +
          '- Gift cards (grocery, gas station)',
      },
      {
        question: 'Are you conducting quality control on the items?',
        answer:
          "No, we are not. We are just a peer-to-peer matching platform that connects essential workers who need items to people who have spare items. We are not guaranteeing anything, but are relying on the generosity and kindness we've seen displayed all around the world. :) We are not liable for any of the items delivered.",
      },
      {
        question: 'When will I get matched?',
        answer:
          'We will email out as soon as we find a match for your needs! We want to help you as soon as we can, but this is dependent on the donors we currently have signed up.',
      },
      {
        question: 'Am I guaranteed a match?',
        answer:
          'While we would love to match everyone, we cannot guarantee that you will be matched. There is more demand for supplies than there are donors, but we will do our best to fulfill requests as they are submitted. Please note that if we are unable to verify your proof of essential worker status, we will not be able to make a match.',
      },
      {
        question: 'Will I get everything I ask for?',
        answer:
          'This is dependent on our donors, but likely, we will be able to fulfill 1 or 2 of the categories you request. PPE/COVID-protection items in particular are tricky to come by, as there is a national shortage and most of it is being donated to and dedicated to healthcare workers.',
      },
      {
        question: 'When will my delivery arrive?',
        answer:
          'We will send you a tracking number for your delivery as soon as we receive one from the donor!',
      },
    ],
  },
  {
    title: 'Donors',
    items: [
      {
        question: 'What types of things can I donate?',
        answer:
          'Anything you have around the house that will help someone facing challenges related to COVID-19! Many common day-to-day items have flown off shelves both in stores and online, from protective equipment like gloves to food items like flour and bread. Truly, anything can help. Some example of in-demand items: masks, body lotion, toys, groceries.\n\n' +
          "You can let us know what'd like to help out with, and we'll match you with someone who would like help in that category. Here are our current categories:\n\n" +
          '- Personal hygiene/care products (ex: hand/dish soap, shampoo, detergent, lotion)\n' +
          '- Female hygiene products (ex: pads/tampons)\n' +
          '- Kids activities (educational subscriptions, electronics, board games/puzzles)\n' +
          '- Gift cards (grocery, gas station)\n' +
          " there a way that you want to support that isn't listed? Email us here: [team@giveessential.com](mailto://team@giveessential.com)",
      },
      {
        question: "Can I send extra items that weren't requested?",
        answer:
          "Certainly! We want to spread joy in any way possible. You'll get to learn a little about the essential worker you're matched with, so feel free to add anything you think will help them or brighten their day (a quick hand-drawn card can do wonders!).",
      },
      {
        question: 'Are you covering delivery costs?',
        answer:
          'While we would love to, we are currently not covering shipping fees.',
      },
      {
        question: 'What condition should the items be in?',
        answer:
          'We ask that donors who are planning to send hygiene products and COVID-prevention items to send brand new—in other words: unused, unopened, and undamaged—items. All other items should be in new or like-new condition.',
      },
      {
        question: 'Can I get more than one match?',
        answer:
          'Yes! Just let us know in the form, and we will make it happen.',
      },
      {
        question: 'How else can I help?',
        answer:
          'Please donate to our [GoFundMe](https://www.gofundme.com/f/giveessential?utm_source=customer&utm_medium=copy_link&utm_campaign=p_cf+share-flow-1)! We will be using the GoFundMe deomations to provide items for the essential workers we are unable to match, as well as to cover operational costs (we are currently funding everything out of our own pockets).\n\n' +
          'We are also looking for volunteers! If you\'re interested in helping us facilitate matches, please email us at [team@giveessential.org](mailto://team@giveessential.org) with the subject "I want to volunteer" and we will get back to you right away.',
      },
    ],
  },
  {
    title: 'Volunteers',
    items: [
      {
        question: 'Can I volunteer to help?',
        answer:
          'We appreciate you! Please email us at: [team@giveessential.org](mailto://team@giveessential.org) with the subject "I want to volunteer" and we will get back to you right away.',
      },
    ],
  },
];

class FAQ extends React.Component {
  constructor(props) {
    super();

    this.toggleItem = this.toggleItem.bind(this);
    this.toggleMobileNav = this.toggleMobileNav.bind(this);

    // setup states
    var collapsedStates = {};
    data.forEach((sec, secIndex) => {
      sec.items.forEach((_item, itemIndex) => {
        collapsedStates[`faq-${secIndex}-${itemIndex}`] = false;
      });
    });

    this.state = {
      collapsedStates: collapsedStates,
      mobileNavOpen: false,
    };
  }

  toggleItem(secIndex, itemIndex) {
    var temp = this.state.collapsedStates;
    temp[`faq-${secIndex}-${itemIndex}`] = !temp[
      `faq-${secIndex}-${itemIndex}`
    ];

    this.setState({
      collapsedStates: temp,
    });
  }

  toggleMobileNav(value) {
    if (value == null) {
      value = !this.state.mobileNavOpen;
    }

    this.setState({
      mobileNavOpen: value,
    });
  }

  render() {
    return (
      <Screen>
        <CenteredFlex style={{ paddingBottom: 52 }}>
          <FAQHeader style={{ marginTop: 90, marginBottom: 0 }}>
            How does this work?
          </FAQHeader>
          <Paragraph>
            Give Essential lets you send your extra household items directly to
            an essential worker who needs them, providing a way to support the
            frontline from your home. If you have any supplies or funds to
            share, you can help!
          </Paragraph>
          <Paragraph>
            We all have extra stuff—board games collecting dust, a box of unused
            tampons, extra shampoo bottles from hotels. Anything that you can
            share will go directly to an essential worker in need.
          </Paragraph>
          <RowFlex style={{ paddingBottom: 32 }}>
            <InfoBox
              numsrc={one}
              title="Sign Up"
              reference="Essential workers and donors both fill out forms letting us know what items essential workers need and what items donors have to share."
              iconsrc={categories}
            ></InfoBox>
            <InfoBox
              numsrc={two}
              title="Get Matched!"
              reference="Give Essential will match essential workers with donors based on needs and requests. Look out for an email from our volunteers!
              Categories of donations: cleaning supplies, masks, personal hygiene products, feminine hygiene products, kids activities, gift cards"
              iconsrc={match}
            ></InfoBox>
            <InfoBox
              numsrc={three}
              title="Care Package"
              reference="Donors will then send their gift directly to an essential worker in need!
              How to ship: From the house using USPS's Click and Ship, post office package drop-off, or through an online order"
              iconsrc={packagee}
            ></InfoBox>
          </RowFlex>
        </CenteredFlex>
        <FAQFlex>
          <FAQHeader>Frequently Asked Questions</FAQHeader>
          <FAQContainer>
            {isMobile ? (
              <div className="faq-nav mobile">
                <Card style={{ backgroundColor: '#8CC9BA' }}>
                  <CardHeader
                    className="faq-nav-mobile-header"
                    onClick={() => this.toggleMobileNav()}
                  >
                    Sections
                    <FontAwesomeIcon
                      icon={this.state.mobileNavOpen ? faAngleUp : faAngleDown}
                    />
                  </CardHeader>
                  <Collapse isOpen={this.state.mobileNavOpen}>
                    <CardBody style={{ padding: 0 }}>
                      <ListGroup>
                        {data.map((section, index) => (
                          <AnchorLink
                            offset="300"
                            href={`#faq-section-${index}`}
                            onClick={() => this.toggleMobileNav(false)}
                          >
                            <ListGroupItem className="faq-nav-mobile-link">
                              {section.title}
                            </ListGroupItem>
                          </AnchorLink>
                        ))}
                      </ListGroup>
                    </CardBody>
                  </Collapse>
                </Card>
              </div>
            ) : (
              <div className="faq-nav desktop">
                <ListGroup>
                  {data.map((section, index) => (
                    <AnchorLink href={`#faq-section-${index}`}>
                      <ListGroupItem style={{ backgroundColor: '#DFE9EC' }}>
                        {section.title}
                      </ListGroupItem>
                    </AnchorLink>
                  ))}
                </ListGroup>
              </div>
            )}

            <div className={`faq-content ${isMobile ? 'mobile' : 'desktop'}`}>
              {data.map((section, sectionIndex) => (
                <div className="faq-section" id={`faq-section-${sectionIndex}`}>
                  <div className="faq-section-title">{section.title}</div>
                  {section.items.map((item, itemIndex) => {
                    return (
                      <Card className="faq-item">
                        <CardHeader
                          className="faq-question"
                          onClick={() =>
                            this.toggleItem(sectionIndex, itemIndex)
                          }
                        >
                          {item.question}
                          <FontAwesomeIcon
                            icon={
                              this.state.collapsedStates[
                                `faq-${sectionIndex}-${itemIndex}`
                              ]
                                ? faAngleUp
                                : faAngleDown
                            }
                          />
                        </CardHeader>
                        <Collapse
                          isOpen={
                            this.state.collapsedStates[
                              `faq-${sectionIndex}-${itemIndex}`
                            ]
                          }
                        >
                          <CardBody style={{ paddingBottom: 0 }}>
                            <CardText className="faq-answer">
                              <ReactMarkdown>{item.answer}</ReactMarkdown>
                            </CardText>
                          </CardBody>
                        </Collapse>
                      </Card>
                    );
                  })}
                </div>
              ))}
            </div>
          </FAQContainer>
        </FAQFlex>
        <Contact />
      </Screen>
    );
  }
}

export default FAQ;
