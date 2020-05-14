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
import axios from 'axios';
import '../css/Referral.scss';

class Referral extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      referrer: '',
      referrees: '',
      referenceMessage: '',
      success: false,
      error: false,
    }
  }

  updateReferrer = (text) => {
    this.setState({
      referrer: text,
    });
  }

  updateReferrees = (text) => {
    this.setState({
      referrees: text,
    });
  }

  updateReferenceMessage = (text) => {
    this.setState({
      referenceMessage: text,
    })
  }

  refer = () => {
    if (this.state.referrer.length < 1 || this.state.referrees.length < 1) {
      this.setState({
        error: true,
      })

      setTimeout(() => this.setState({
        error: false,
      }), 2500);

      return;
    }

    const referrees = this.state.referrees.split(',').map(referee => referee.replace(/ /g, ''));

    axios.post('https://giveessential.uc.r.appspot.com/api/refer', {
      'referrer': this.state.referrer,
      'referrees': referrees,
      'referenceMessage': this.state.referenceMessage
    }).then(() => {
      this.setState({
        success: true,
        error: false,
      });

      setTimeout(() => this.setState({
        success: false,
        referrer: '',
        referrees: '',
        referenceMessage: '',
      }), 5000);
    }).catch(() => {
      this.setState({
        success: false,
        error: true,
      })

      setTimeout(() => this.setState({
        error: false,
        referrer: '',
        referrees: '',
        referenceMessage: '',
      }), 2500);
    });
  }

  render () {
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
                    value={this.state.referrer}
                    onChange={(e) => this.updateReferrer(e.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="recipientEmails">
                    Your Friends' Emails
                  </Label>
                  <Input
                    type="text"
                    name="recipient"
                    id="recipientEmails"
                    placeholder="a@example.com, b@example.com"
                    value={this.state.referrees}
                    onChange={(e) => this.updateReferrees(e.target.value)}
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
                  value={this.state.referenceMessage}
                  onChange={(e) => this.updateReferenceMessage(e.target.value)}
                />
                <InputGroupAddon addonType="append">
                  <Button 
                    size="lg"
                    style={{
                      backgroundColor: this.state.error ? 'red' : '#8CC9BA',
                      border: 'none',
                    }}
                    onClick={this.refer}
                  >
                    {this.state.success ?
                      <React.Fragment>
                        Sent!
                      </React.Fragment>
                    :
                      <React.Fragment>
                        {this.state.error ?
                          <React.Fragment>
                            Error
                          </React.Fragment>
                        :
                          <React.Fragment>
                            Send
                          </React.Fragment>    
                        }
                      </React.Fragment>
                    }
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
