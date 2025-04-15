import React from "react";
import "./questions.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";

function QuestionsPage() {
  return (
    <>
      <div className="question-section">
        <div className="question-form">
          <div className="question-icon">
            <FontAwesomeIcon size="4x" icon={faQuestion} />
          </div>
          <div className="question-intro">
            <h3>Have questions?</h3>
            <p>
              We'd love to talk to you. Get in touch now for a FREE
              consultation!
            </p>
          </div>
          <div className="questions">
            <div className="subs-input">
              <input className="subs-input-field" id="name" placeholder="" />
              <label className="subs-input-label" for="name">
                Name
              </label>
            </div>
            <div className="subs-input">
              <input className="subs-input-field" id="company" placeholder="" />
              <label className="subs-input-label" for="company">
                Company Name
              </label>
            </div>
            <div className="subs-input">
              <input className="subs-input-field" id="email" placeholder="" />
              <label className="subs-input-label" for="email">
                Email Address
              </label>
            </div>
            <div className="subs-input">
              <input
                className="subs-input-field"
                id="phonenumber"
                placeholder=""
              />
              <label className="subs-input-label" for="phonenumber">
                Phone Number
              </label>
            </div>
            <div className="subs-input text-area-m">
              <textarea
                type="text"
                className="subs-input-area"
                id="message"
                placeholder=""
              />
              <label className="subs-input-label text-area" for="message">
                Message
              </label>
            </div>
          </div>
          <div className="question-button">
            <div className="button">
              <div className="call-us">
                <a>Submit</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuestionsPage;
