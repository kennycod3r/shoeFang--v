import "./Hero.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { BsBellFill, BsFillBellSlashFill } from "react-icons/bs";

export default function Hero() {
  const [reminder, setReminder] = useState(false);

  const toggleReminder = () => {
    setReminder((prevReminder) => !prevReminder);
  };

  return (
    <div className="hero">
      <div className="hero-inner-section">
        <div className="hero-sales-text">
          <h2 className="hero-headtext">
            Air Jordan 6<br />
            “Reverse Oreo”
          </h2>
          <div className="aligned-paragraphs">
            <p>
              The Air Jordan 6 “Reverse Oreo” drops this June set
              Reminder!.They're stated to release on Nike SNKRS, Jordan
              retailers for a standard price tag of $200.
            </p>
            <p>Be sure to grab your pair on release date for retail here!</p>
          </div>
          <Link className="article" to="/Journal/1">
            read more in article <MdArrowOutward />
          </Link>
        </div>
        <div className="relative-img">
          <img
            className="yzy"
            src="https://pbs.twimg.com/media/GODoPrdW4AEqgbT?format=jpg&name=large"
            alt="article"
          />
          <div
            className="flexCenter shop-circle reminder"
            onClick={toggleReminder}
          >
            {reminder ? (
              <BsBellFill className="bag-icon" color="blue" />
            ) : (
              <BsFillBellSlashFill />
            )}
          </div>
          <div className="reminder-container">
            <p>{reminder ? "reminder set!" : "set reminder?"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
