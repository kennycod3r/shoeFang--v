import "./Hero.css";
import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import arrowUp from '../../assets/arrowUp.svg';
import { BsBellFill, BsFillBellSlashFill } from "react-icons/bs";
import nikeLogoImg from '../../Img/nikeLogoImg.webp';

const Hero = React.memo(() => {
  const [reminder, setReminder] = useState(false);

  const toggleReminder = useCallback(() => {
    setReminder((prevReminder) => !prevReminder);
    !reminder ?alert("Set Reminder For AIR JORDAN 6 “Reverse Oreo”?") : alert("Cancel Reminder?")
  }, [reminder]);

  return (
    <div className="hero"  style={{ backgroundImage: `url(${nikeLogoImg})` }}>
      <div className="hero-inner-section">
        <div className="hero-sales-text">
          <h2 className="hero-headtext">
            Air Jordan 6<br />
            “Reverse Oreo”
          </h2>
          <div className="aligned-paragraphs">
            <p>
              The Air Jordan 6 “Reverse Oreo” drops this June. Set a reminder! They're slated to release on Nike SNKRS and Jordan retailers for a standard price tag of $200.
            </p>
            <p>Be sure to grab your pair on release date for retail here!</p>
          </div>
          <Link className="article" to="/journal/1">
            <p>read more in article</p> <div className="animateLink"><img src={arrowUp} alt="arrow"/></div>
          </Link>
        </div>
        <div className="relative-img">
          <img
            className="yzy"
            src="https://pbs.twimg.com/media/GODoPrdW4AEqgbT?format=jpg&name=large"
            alt="shoe-img"
            loading="lazy"
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
});

export default Hero;
