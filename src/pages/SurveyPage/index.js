import React from "react";
import * as Survey from "survey-react";
import { DonorForm } from './style';
import { Container } from "reactstrap";
//import $ from 'jquery';
import "./style.css";
import "./survey.css";

class SurveyPage extends React.Component {
    json = {
        "pages": [
         {
          "name": "Firstname",
          "elements": [
           {
            "type": "text",
            "name": "question1",
            "title": "What is your first name?",
            "isRequired": true,
            "placeHolder": "Type your answer here..."
           }
          ]
         },
         {
          "name": "Lastname",
          "elements": [
           {
            "type": "text",
            "name": "question2",
            "title": "What is your last name?",
            "isRequired": true,
            "placeHolder": "Type your answer here..."
           }
          ]
         },
         {
          "name": "Job",
          "elements": [
           {
            "type": "text",
            "name": "jobtitle",
            "title": "What is your job title and institution/company?",
            "isRequired": true,
            "placeHolder": "Type your answer here..."
           }
          ]
         },
         {
          "name": "Proof",
          "elements": [
           {
            "type": "html",
            "name": "proof_title",
            "html": "<h5>Please provide proof that you are an essential worker. *</h5><br>\n<b>Examples:</b> a screenshot of an email from your manager (with a date and name), your last paycheck, screenshots from an employee app (your name must be included in the picture), or any other documentation that will help us verify your status.\n<br><br>\nWe must have proof in order to match you with a donor."
           },
           {
            "type": "file",
            "name": "proof_file",
            "title": "Attach file here",
            "isRequired": true,
            "waitForUpload": true,
            "maxSize": 0
           }
          ]
         },
         {
          "name": "Notice",
          "elements": [
           {
            "type": "html",
            "name": "notice",
            "html": "<h5>The following questions ask for your contact information so that we can facilitate the match.</h5>"
           }
          ]
         },
         {
          "name": "Email",
          "elements": [
           {
            "type": "text",
            "name": "email",
            "title": "What is your email address?",
            "isRequired": true,
            "inputType": "email",
            "placeHolder": "somebody@example.com"
           }
          ]
         },
         {
          "name": "Mailing",
          "elements": [
           {
            "type": "text",
            "name": "address",
            "title": "What is your mailing address?",
            "isRequired": true,
            "placeHolder": "ex: 32 Main Street Apt 202"
           }
          ]
         },
         {
          "name": "City",
          "elements": [
           {
            "type": "text",
            "name": "city",
            "title": "What city are you in?",
            "isRequired": true,
            "placeHolder": "ex: Boston"
           }
          ]
         },
         {
          "name": "State",
          "elements": [
           {
            "type": "text",
            "name": "state",
            "title": "What state are you in?",
            "isRequired": true,
            "placeHolder": "ex: NH"
           }
          ]
         },
         {
          "name": "Zip",
          "elements": [
           {
            "type": "text",
            "name": "zipcode",
            "title": "What is your zip code?",
            "isRequired": true,
            "placeHolder": "ex: 02111"
           }
          ]
         },
         {
          "name": "Phone",
          "elements": [
           {
            "type": "text",
            "name": "phone",
            "title": "What is your cell phone number?",
            "inputType": "tel",
            "placeHolder": "(201) 555-0123"
           },
           {
            "type": "html",
            "name": "notice_2",
            "html": "<h5>* Optional - so that we can text you in case we can't reach you via email.</h5>"
           }
          ]
         },
         {
          "name": "Items",
          "elements": [
           {
            "type": "checkbox",
            "name": "items",
            "title": "What type of items do you need?",
            "isRequired": true,
            "choices": [
             {
              "value": "cleaning",
              "text": "Cleaning Supplies (disinfectant wipes/disposable gloves/dish soap)"
             },
             {
              "value": "masks",
              "text": "Masks (cloth/homemade, face shield, surgical/disposable)"
             },
             {
              "value": "personal",
              "text": "Personal Hygiene Products (ex: soap/detergent/shampoo/lotion)"
             },
             {
              "value": "feminine",
              "text": "Feminine Hygiene Products"
             },
             {
              "value": "kid",
              "text": "Kids' Activities (ex: electronics/board games/puzzles)"
             },
             {
              "value": "gift",
              "text": "Gift Cards (ex: gas/groceries/restaurants)"
             }
            ]
           }
          ]
         },
         {
          "name": "Additional",
          "elements": [
           {
            "type": "html",
            "name": "notice_3",
            "html": "<h5>If you selected Kids' Activities, please specify an age range and any other helpful information\n<br><br>\nPersonal Hygiene Products: please specify what type of product and any preferred brands\n<br><br>\nGift Cards: please specify what category and stores would be most helpful for you to receive</h5>\n\n<p>Please skip if not applicable</p>"
           },
           {
            "type": "text",
            "name": "notice_4",
            "title": "Type your answer below"
           }
          ]
         },
         {
          "name": "Description",
          "elements": [
           {
            "type": "html",
            "name": "question16",
            "html": "<h5>Please provide a description of your circumstances so we can better understand what you might need.</h5><br>\n<h5>Ex: Are you a grocery shopper who needs help with gas? Are you a single mother who needs activities for her kids?\n<br>\nFeel free to tell us anything about your situation and the items that you need so that we can better help you.</h5>"
           },
           {
            "type": "text",
            "name": "question17",
            "title": "Type your answer below",
            "isRequired": true
           }
          ]
         },
         {
          "name": "Consent",
          "elements": [
           {
            "type": "html",
            "name": "question20",
            "html": "<h5>I consent to Give Essential to sharing the information I have provided about my circumstances with my donor.</h5><br>\n<h5>This will help them get a better idea of what types of gifts to send. Company names will be removed, and donors have pledged to only use the information they're given for the sole purpose of sending a gift. \n<br><br>\nIn our experience, donors are more likely to send a package when we are allowed to share your story with them.</h5>"
           },
           {
            "type": "radiogroup",
            "name": "share_donor_consent",
            "title": "Select from below",
            "isRequired": true,
            "choices": [
             {
              "value": "yes",
              "text": "Yes"
             },
             {
              "value": "no",
              "text": "No"
             }
            ]
           }
          ]
         },
         {
          "name": "Anonymous",
          "elements": [
           {
            "type": "html",
            "name": "question19",
            "html": "<h5>I consent to Give Essential anonymously sharing my story on Give Essential media.</h5><br>\n<h3>We want to share stories to help reach donors. <br><br> Stories will be completely anonymous on our public media; all personal identification information will be removed (name, company name, address, etc).</h3>"
           },
           {
            "type": "radiogroup",
            "name": "media_consent",
            "title": "Select from below",
            "isRequired": true,
            "choices": [
             {
              "value": "item1",
              "text": "Yes"
             },
             {
              "value": "item2",
              "text": "No"
             }
            ]
           }
          ]
         },
         {
          "name": "page15",
          "elements": [
           {
            "type": "text",
            "name": "question22",
            "title": "How did you hear about us?",
            "placeHolder": "Type your answer here..."
           }
          ]
         },
         {
          "name": "page16",
          "elements": [
           {
            "type": "comment",
            "name": "question23",
            "title": "Any additional notes or comments?",
            "placeHolder": "Type your answer here..."
           }
          ]
         },
         {
          "name": "page17",
          "elements": [
           {
            "type": "html",
            "name": "question25",
            "html": "<h5>I understand that my donor will receive my first and last name, email address, mailing address, and if I consented, the story that I shared. I understand that these items are publicly sourced from un-vetted individuals, including individuals who themselves may be carrying COVID-19, and take full responsibility for the quality, efficacy, and safety of these donations and their use, and full responsibility for the information I have shared.\n<br>\n<br>\nGive Essential connects people with publicly crowd-sourced donation items to essential workers during this time of critical shortage and inaccessibility. All items are being donated and are provided without any warranty, guarantee, or certification of fitness for purpose. Nothing in this website or in the course of providing these donations establishes a legal obligation or promise on Give Essential's behalf.This question is required.</h5>"
           },
           {
            "type": "radiogroup",
            "name": "question24",
            "title": "Select from below",
            "isRequired": true,
            "requiredErrorText": "Please agree to the terms & conditions.",
            "validators": [
             {
              "type": "expression",
              "text": "Please agree to the terms & conditions.",
              "expression": "{question24} = 'item1'"
             }
            ],
            "choices": [
             {
              "value": "item1",
              "text": "Yes"
             },
             {
              "value": "item2",
              "text": "No"
             }
            ]
           }
          ]
         }
        ]
    }

    render() {
        return (
            <Container>
                <DonorForm>
                    <h1>Essential Worker Form</h1>
                    <Survey.Survey json={ this.json } />
                </DonorForm>
            </Container>
        );
    }
}

export default SurveyPage;