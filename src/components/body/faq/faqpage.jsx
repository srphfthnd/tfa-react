import React, { useEffect } from "react";
import "./faqpage.scss";
import Accordion from "../accordion/accordion";
import QuestionsPage from "../questions/questions";

function FaqPage() {

  return (
    <div className="faq-section">
      <div className="faq-container">
        <div className="title">
          <h1>Frequently Asked Questions</h1>
        </div>
        <div className="content">
          <Accordion/>
        </div>
      </div>
        <QuestionsPage/>
    </div>
  );
}

export default FaqPage;
