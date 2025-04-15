import React from "react";
import "./ouradvantage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullseye,
  faCheckToSlot,
  faChessKing,
  faClock,
  faCreditCard,
  faFastForward,
  faHome,
  faMap
} from "@fortawesome/free-solid-svg-icons";
import processimg from "../../../assets/process.png";
import QuestionsPage from "../questions/questions";

function OurAdvantage() {
  return (
    <div className="ouradvantage-container">
      <div className="ouradvantage-upper">
        <div className="ouradvantage-content">
          <div className="title">
            <h2>Why work with The Gibb Consulting?</h2>
          </div>
          <div className="list">
            <ul>
              <li>
                <strong>
                  Easy and simple pre-approval with extremely high approval
                  rates.
                </strong>
              </li>
            </ul>
            <ul>
              <li>
                <strong>
                  Fast Funding: Money will be in your hands within just a few
                  days.
                </strong>
                <strong> </strong>
              </li>
            </ul>
            <ul>
              <li>
                <strong>
                  It is NOT necessary to process credit cards to obtain working
                  capital.
                </strong>
              </li>
            </ul>
            <ul>
              <li>
                <strong>
                  We do NOT require you to switch your current credit card
                  processor.
                </strong>
              </li>
            </ul>
            <ul>
              <li>
                <strong>Simple, easy to understand payback terms.</strong>
              </li>
            </ul>
            <ul>
              <li>
                <strong>
                  Longer payback programs than our competitors (12+ months).
                </strong>
              </li>
            </ul>
            <ul>
              <li>
                <strong>
                  Personal guarantees and collateral are not required.
                </strong>
              </li>
            </ul>
            <ul>
              <li>
                <strong>
                  We work with businesses from almost every industry.
                </strong>
              </li>
            </ul>
          </div>
          <div className="button">
            <div className="call-us">
              <a>Call Us now</a>
            </div>
          </div>
        </div>
      </div>
      <div className="ouradvantage-info-section">
        <div className="ouradvantage-info">
          <div className="info-title">
            <h3>
              Gibb Consulting Inc can extend capital to all established
              businesses in nearly every industry.
            </h3>
          </div>
          <div className="info-desc">
            <p>
              We have programs that evaluate your business through your credit
              card processing statements, banks statements or a combination of
              both. There is absolutely no need to accept credit cards to work
              with us. This allows many more business owners to take advantage
              of our versatile lending programs. In addition to the benefits
              we've already mentioned, these additional factors allow us to
              partner with you to create individualized programs that will
              optimize your cash flow.
            </p>
          </div>
          <div className="info-grid">
            <div className="info-card">
              <div className="card-icon">
                <FontAwesomeIcon size="4x" icon={faCheckToSlot} />
              </div>
              <div className="card-title">
                <span>Our approval rates are extremely high.</span>
              </div>
              <div className="card-desc">
                <p>
                  Even though you may have been told before that your credit
                  worthiness isn't going to get you the capital you need, our
                  high success rate will have you on your way to capturing your
                  goals.
                </p>
              </div>
            </div>
            <div className="info-card">
              <div className="card-icon">
                <FontAwesomeIcon size="4x" icon={faClock} />
              </div>
              <div className="card-title">
                <span>We offer terms from 6 to 18 months.</span>
              </div>
              <div className="card-desc">
                <p>
                  This allows you to select the best option to suit your budget.
                </p>
              </div>
            </div>
            <div className="info-card">
              <div className="card-icon">
                <FontAwesomeIcon size="4x" icon={faBullseye} />
              </div>
              <div className="card-title">
                <span>Wide funding range</span>
              </div>
              <div className="card-desc">
                <p>
                  Our funding amounts typically range from $5,000 to 250,000 per
                  location
                </p>
              </div>
            </div>
            <div className="info-card">
              <div className="card-icon">
                <FontAwesomeIcon size="4x" icon={faMap} />
              </div>
              <div className="card-title">
                <span>Fixed or variable payments are available.</span>
              </div>
              <div className="card-desc">
                <p>
                  Another option that allows you to determine what is best for
                  the cash flow of your business.
                </p>
              </div>
            </div>
            <div className="info-card">
              <div className="card-icon">
                <FontAwesomeIcon size="4x" icon={faFastForward} />
              </div>
              <div className="card-title">
                <span>Our funding is in your hands within days</span>
              </div>
              <div className="card-desc">
                <p>after the start of the process.</p>
              </div>
            </div>
            <div className="info-card">
              <div className="card-icon">
                <FontAwesomeIcon size="4x" icon={faHome} />
              </div>
              <div className="card-title">
                <span>Personal guarantees or collateral aren't necessary</span>
              </div>
              <div className="card-desc">
                <p>to obtain funding from Gibb Consulting Inc.</p>
              </div>
            </div>
            <div className="info-card">
              <div className="card-icon">
                <FontAwesomeIcon size="4x" icon={faChessKing} />
              </div>
              <div className="card-title">
                <span>
                  You have the ultimate freedom of using your funds however you
                  see fit to promote growth within your business.
                </span>
              </div>
              <div className="card-desc">
                <p>
                  The new equipment you couldn't afford could be delivered on
                  Monday. Need that extra cash for renovations or a new
                  location? That marketing campaign you wanted to star in is now
                  a reality. Funds to pay down tax liens or past due accounts?
                  These concerns and many more are the reason you should be
                  partnered with Gibb Consulting Inc, where we can have your
                  wants and needs quickly turned into realities. How you choose
                  to use your capital to promote growth in your business is
                  entirely up to you.
                </p>
              </div>
            </div>
            <div className="info-card">
              <div className="card-icon">
                <FontAwesomeIcon size="4x" icon={faCreditCard} />
              </div>
              <div className="card-title">
                <span>
                  We will not have to change your credit card processor.
                </span>
              </div>
              <div className="card-desc">
                <p>
                  Most of our competitors will require you to switch processors,
                  creating a greater hassle, more paperwork and possibly an
                  interruption of service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ouradvantage-process-section">
        <div className="ouradvantage-process">
          <div className="process-col">
            <div className="process-title">The Process</div>
            <div className="process-desc">
              <p>
                The process of getting the money in your hands is incredibly
                simple and requires little effort. It also moves as quickly as
                you need it to and will have cash in your hands in just a few
                days.
              </p>
            </div>
            <div className="process-img">
              <img src={processimg} />
            </div>
          </div>
          <div className="process-col">
            <p>
              <strong>Pre approval: </strong>To start the process,{" "}
              <a href="">fill out our no obligation pre-approval application</a>
              . Once we obtain this, there will be a request for your most
              recent bank or credit card statements. These will be submitted and
              then we can then determine how much capital we can extend to your
              business.
            </p>
            <p>
              <strong>Offers: </strong>You will be presented with several offers
              with varying terms. We will work together to tailor a program
              specifically for you and your businesses needs.
            </p>
            <p>
              <strong>Acceptance:</strong> Once we have tailored a program to
              fit your business, we simply need you to agree to it. You are now
              very close to having your capital in your hands.
            </p>
            <p>
              <strong>Funding: </strong>The agreed upon sum is deposited in your
              bank and is yours to use freely within your business. This
              typically occurs the next day after acceptance.
            </p>
            <p>
              <strong>
                Now you're off to achieving your goals, using your cash flow to
                take your business to the next level. <a href="">Apply now!</a>
              </strong>
            </p>
          </div>
        </div>
      </div>
      <QuestionsPage/>
    </div>
  );
}

export default OurAdvantage;
