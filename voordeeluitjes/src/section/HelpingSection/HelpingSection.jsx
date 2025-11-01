import React from "react";
import { BsQuestionSquare } from "react-icons/bs";
import { SlEarphonesAlt } from "react-icons/sl";
import "./HelpingSection.css";
const HelpingSection = () => {
  return (
    <div className="helping-main-container">
      <div className="helping-items-container">
        <div className="booking-helping-container">
          <h4>Help with your booking</h4>
        </div>
        <div className="any-question both-question-container">
          <BsQuestionSquare className="icon-item-container" />
          <div className="link-itm-container">
            <h5>Do you have any questions?</h5>
            <p>
              We may already have an answer to your question. Check out the
              <a href="" className="link-customer-service">
                frequently asked questions.
              </a>
            </p>
          </div>
        </div>
        <div className="stuck-container both-question-container">
          <SlEarphonesAlt className="icon-item-container" />

          <div className="link-itm-container">
            <h5>Are you stuck somewhere?</h5>
            <p>
              We are happy to help you. Please contact us
              <a href="" className="link-customer-service">
                our customer service.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpingSection;
