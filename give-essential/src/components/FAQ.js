import React from 'react';
import ReactMarkdown from 'react-markdown';
import {
  Nav,
  NavLink,
  NavItem,
  Collapse,
  Card,
  CardBody,
  CardHeader,
  CardText
} from 'reactstrap';
import '../css/FAQ.css';

const data = [
  {
    title: 'Basics',
    items: [
      {
        question: 'What is Give Essential?',
        answer: 'Give Essential is a matching platform that connects people with extra resources to essential workers who need them. We allow donors to directly send items to essential workers on the frontline, creating a personal donation process.\n\n' +
                'We want to help the delivery workers who don\'t have protective equipment like gloves or masks, though they are the ones in crowded stores handling our groceries and deliveries. We want to give back to the grocery store shoppers who must leave their children alone at home to work long and odd hours by providing their children with education subscriptions and games, or meal kit subscriptions to make it easier to feed their families. We want to help cashiers who have to face sudden limited access to feminine and hygiene products; janitors who spend all day with harsh chemicals and could really benefit from a bottle of lotion and nice soap.\n\n' +
                'We all have extra resources lying around our houses that can help ease some of the struggles many essential workers are facing today—why not put them to use?'
      },
      {
        question: 'What areas do you serve?',
        answer: 'We aim to primarily serve essential workers in the United States. Contact us if you\'re interesting in expanding Give Essentials to your area!'
      },
      {
        question: 'How does this work?',
        answer: '1. Visit our [home page](../)\n' +
                '2. If you want to donate items, click ["I want to donate"]() and fill out the form.\n' +
                '3. If you\'re an essential worker and need items, click ["I\'m an essential worker"]() and will out the form.\n' +
                '4. We will create the match between people with extra goods to people who need those same goods. We will email the donor with the essential worker\'s information and needs.\n' +
                '5. Donors can ship items via postal service (without even leaving their house) or purchase an item online to ship directly.\n\n' +
                'Please note: Donations are intended only for the essential worker and not to be sold.'
      }
    ]
  },
  {
    title: 'Essential Workers',
    items: [
      {
        question: 'How do I prove my essential worker status?',
        answer: 'Anything that will verify your status. A screenshot of an email from your manager (with a date and name), your last paycheck, screenshots from an employee app (your name must be included in the picture), or any other documentation that will help us verify your status.\n\n' +
                'If we cannot verify your status, you will not be matched.'
      }
    ]
  }
]

const FAQ = (props) => {
    return (
      <div className="faq">
        <div className="faq-header">
          Frequently Asked Questions
        </div>
        <div className="faq-container">
          <div className="faq-nav">
            <Nav vertical>
              {data.map((section, index) => (
                <NavItem>
                  <NavLink href={`#faq-section-${index}`}>
                    {section.title}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
          </div>
          <div className="faq-content">
            {data.map((section, index) => (
              <div className="faq-section" id={`faq-section-${index}`}>
                <div className="faq-section-title">
                  {section.title}
                </div>
                {section.items.map((item) => (
                  <Card className="faq-item">
                    <CardHeader className="faq-question">
                      {item.question}
                    </CardHeader>
                    <Collapse>
                      <CardBody>
                        <CardText className="faq-answer">
                          <ReactMarkdown>
                            {item.answer}
                          </ReactMarkdown>
                        </CardText>
                      </CardBody>
                    </Collapse>
                  </Card>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default FAQ;