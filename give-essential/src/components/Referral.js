import React, { PureComponent } from 'react';
import { 
  Col, Row, Button, Form, 
  FormGroup, Label, Input,
  InputGroup, InputGroupAddon
} from 'reactstrap';
import { 
  FacebookShareButton, TwitterShareButton,
  FacebookIcon, TwitterIcon
} from 'react-share';
import '../css/Referral.scss';

class Referral extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      expanded: true,
    };
  }

  expandReferral = () => {
    this.setState({
      expanded: false,
    });
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return (
      <div className="referral">
        <div className="referral-tagline">
          Want to help spread the word?
        </div>
        <div className="referral-email">
          <Form>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="senderName">
                    Your Name
                  </Label>
                  <Input 
                    type="text"
                    name="sender"
                    id="senderName"
                    placeholder="name"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="recipientEmails">
                    Your Friends' Emails
                  </Label>
                  <Input 
                    type="email"
                    name="recipient"
                    id="recipientEmails"
                    placeholder="a@example.com, b@example.com"
                    multiple
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="message">
                Message (optional)
              </Label>
              <InputGroup>
                <Input
                  type="textarea"
                  name="message"
                  id="message"
                  placeholder="attach an optional message"
                />
                <InputGroupAddon addonType="append">
                  <Button 
                    size="lg"
                    style={{
                      backgroundColor: '#8CC9BA',
                      border: 'none',
                    }}
                  >
                    Send
                  </Button>
                </InputGroupAddon>
              </InputGroup>
            </FormGroup>
          </Form>
        </div>
        <div className="referral-socialMedia">
          <div className="referral-socialMedia-sec">
            <FacebookShareButton
              url="https://giveessential.org"
            >
              <div className="referral-socialMedia-button">
                <FacebookIcon
                  size={32}
                  round={true}
                />
                <div className="referral-socialMedia-platform">
                  Facebook
                </div>
              </div>
            </FacebookShareButton>
          </div>
          <div className="referral-socialMedia-sec">
            <TwitterShareButton
              url="https://giveessential.org"
              title="Essential workers on the frontline need your help. To learn more and sign up as either a donor or essential worker, visit"
              hashtags={['GiveEssential']}
              related={['@GiveEssential']}
            >
              <div className="referral-socialMedia-button">
                <TwitterIcon
                  size={32}
                  round={true}
                />
                <div className="referral-socialMedia-platform">
                  Twitter
                </div>
              </div>
            </TwitterShareButton>
          </div>
        </div>
      </div>
    );
  }
}

export default Referral;
