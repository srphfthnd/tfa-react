import React, { useState } from "react";
import "./accordion.scss";

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const FAQCONTENTSJSON = [
    {
      question: "Who can borrow money from Gibb Consulting Inc?",
      answer:
        "Virtually all established businesses in almost all industries located within The United States of America. We lend to almost all SIC codes. We also lend to all business structures, i.e. sole proprietors, LLCs, S Corps, Corps, etc. Funding must also be finalized by a verifiable owner/member/officer of the business. Sorry, we do no not provide startup capital for businesses that are not established or individuals that are not the registered owner of the business.",
    },
    {
      question: "What can I use the borrowed funding for?",
      answer:
        "You can use the capital for virtually anything that will suit your business needs.",
    },
    {
      question: "How much can I borrow from Gibb Consulting Inc?",
      answer:
        "Our loans typically range from $5,000 to 250,000 per location. Depending on your business, that amount can be larger or anywhere in between those amounts.",
    },
    {
      question:
        "How does Gibb Consulting Inc evaluate your credit worthiness?",
      answer:
        "We take a look at the last 4 months or so of statements from either your bank or credit card processor. Based on these statements, we evaluate your ability to generate revenue as well as analyze your cash flow.  If a business is seasonal, we may need to use a greater number of statements to evaluate it.",
    },
    {
      question: "How do I repay Gibb Consulting Inc?",
      answer:
        "Payback occurs via an automatic debit of either your credit card processing deposits or directly from your banking institution.",
    },
    {
      question: "Is there a way to keep track of repayment?",
      answer:
        "Yes, we will set up a secure online account where you can keep track of your balance and payments.",
    },
    {
      question:
        "Are there any fees or additional costs associated with applying for financing with Gibb Consulting Inc?",
      answer:
        "No, all application and funding is straightforward without any hidden fees or costs. The only payments that will be made to us are those explicitly agreed upon in the terms of your funding.",
    },
    {
      question: "How long will it take to receive funding?",
      answer:
        "The process from pre-qualification to funding proceeds rather quickly. Most commonly, funding occurs three to four days after we receive your application and statements.",
    },
    {
      question:
        "Does Gibb Consulting Inc lend to those with previous bankruptcies and tax liens?",
      answer:
        "Yes, we will lend to those with previous bankruptcies that have been resolved. We will also lend to those with tax liens as long as the lien is currently under $200,000.",
    },
    {
      question:
        "Does Gibb Consulting Inc require a change of credit card processors?",
      answer:
        "No, unlike a lot of our competitors we will work with any processor and do not deem it necessary to change your current situation. We can upon your request research and recommend a processor with rates more favorable to you.",
    },
    {
      question: "Does Gibb Consulting Inc require a personal guarantee?",
      answer:
        "The only guarantee we require is protection from fraud and intervention for most of our programs. For almost all of our programs, no personal guarantees are required. However, with a certain small percentage of our programs, they may be required. This is not the typical case and is quite rare.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      {FAQCONTENTSJSON.map((data, index) => {
        return (
          <div className="accordion">
            <div className="accordion-title" onClick={() => toggleAccordion(index)}>
              <h3>{data?.question}</h3>
            </div>
            <div className={`accordion-details ${activeIndex === index && "toggled"}`}>
              <p>{data?.answer}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Accordion;
