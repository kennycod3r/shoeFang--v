import { useState } from "react";
import "./Footer.css";
import React from "react";
import BackToTop from "../../utility/BackToTop";

export default function Footer() {
  const [userEmail, setUserEmail] = useState({
    eventValue: "",
    subscribeMsg: "Subscribe to our newsletter",
  });

  const handleSubscribe = (event) => {
    setUserEmail((prevState) => ({
      ...prevState,
      eventValue: event.target.value,
    }));
  };

  const handleSubscribeText = () => {
    if (userEmail.subscribeMsg === "Subscribed!") {
      return;
    } else if (userEmail.eventValue.length < 10) {
      setUserEmail((prevState) => ({
        ...prevState,
        subscribeMsg: "Enter a valid email",
      }));
    } else {
      setUserEmail((prevState) => ({
        ...prevState,
        subscribeMsg: "Subscribed!",
      }));
    }
    setUserEmail((prevState) => ({
      ...prevState,
      eventValue: "",
    }));
  };

  return (
    <section className="Homefooter">
      <BackToTop />
      <div className="f-title">
        <h1>FAQ</h1>
      </div>
      <div className="footer-container">
        <div className="footer-col">
          <div className="aligned-paragraphs footer-ap">
            <p>
              Extra 10% off* discount sent via email to new subscribers only. By
              subscribing, you agree to receive marketing communications
            </p>
            <p>by email. You can unsubscribe at any point.</p>
          </div>
          <ul className="aligned-paragraphs footer-ap">
            <li>Can I get a refund on my order?</li>
            <li>Can I make changes to my order?</li>
            <li>Can I cancel my order?</li>
            <li>Do you offer any Discounts?</li>
          </ul>
        </div>
        <div className="footer--text footer-col">
          <p>
            Subscribe for 10% OFF
          </p>
          <p className="job-title small">When you first sign up for our newsletter you
            will receive a 10% OFF code to use on your order.</p>
          <div>
            <h2 className="headtext-small fhs">
              Subscribe and Receive
              <br />
              News And Offers!
            </h2>
          </div>
          <div className="newsletter-div">
            <p
              style={{
                color:
                  userEmail.subscribeMsg === "Enter a valid email"
                    ? "red"
                    : "#f1f1f1",
              }}
            >
              {userEmail.subscribeMsg}
            </p>
            <input
              id="email-id"
              placeholder="Enter Your Email Address"
              type="email"
              required
              onChange={handleSubscribe}
              value={userEmail.eventValue}
            />
            <button onClick={handleSubscribeText}>Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
}
