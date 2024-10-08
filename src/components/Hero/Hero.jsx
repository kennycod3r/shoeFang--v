import React, { useState, useCallback } from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import { BsBellFill, BsFillBellSlashFill } from "react-icons/bs";
import PropTypes from "prop-types";
import AddBagComponent from "../../utility/AddBagComponent";
import nikeLogoImg from "../../Img/nikeLogoImg.jpg";
import Bluepointer from "../../utility/Bluepointer";

const Hero = React.memo(
  ({
    backgroundImage,
    title,
    description,
    linkText,
    linkUrl,
    heroImageUrl,
    itemPrice,
    handleNext,
    appHandleBag,
    imageId,
    salesImg,
  }) => {
    const [reminder, setReminder] = useState(false);

    const toggleReminder = useCallback(() => {
      setReminder((prevReminder) => !prevReminder);
      !reminder
        ? alert(`Set Reminder For ${title}?`)
        : alert("Cancel Reminder?");
    }, [reminder, title]);

    // Fallback to default values if props are not provided
    const defaultBackgroundImage = backgroundImage || nikeLogoImg;
    const defaultTitle = title || "Air Jordan 6 'Reverse Oreo'.";
    const defaultDescription = Array.isArray(description)
      ? description
      : [
          "The Air Jordan 6 'Reverse Oreo' drops this June. Set a reminder! They're slated to release on Nike SNKRS and Jordan retailers for a standard price tag of $200.",
          "Be sure to grab your pair on release date for retail here!",
        ];
    const defaultLinkText = linkText || "Read more in article";
    const defaultLinkUrl = linkUrl || "/journal-page";
    const defaultHeroImageUrl =
      heroImageUrl ||
      "https://pbs.twimg.com/media/GODoPrdW4AEqgbT?format=jpg&name=large";
    const defaultItemPrice = itemPrice || "£174.99";

    return (
      <div
        className="hero"
        style={{ backgroundImage: `url(${defaultBackgroundImage})` }}
      >
        <div className="hero-inner-section">
          <div className="hero-sales-text">
            <h2 className="hero-headtext ">{defaultTitle}</h2>
            {handleNext && (
              <p className="hero-price headtext-small">{defaultItemPrice}</p>
            )}
            <div className="aligned-paragraphs">
              {defaultDescription.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
            <Link to={defaultLinkUrl} className=" link-hero">
              <div className="article">
                <p>{defaultLinkText}</p>
                <Bluepointer />
              </div>
            </Link>
          </div>
          <div className="relative-img">
            {handleNext && (
              <div className="next-btn" onClick={handleNext}>
                ❯
              </div>
            )}
            <img
              className="hero-img"
              src={defaultHeroImageUrl}
              alt="hero-img"
              loading="lazy"
            />
            {handleNext ? (
              <div className="salesShopImg-container">
                <AddBagComponent
                  handleBagData={appHandleBag}
                  title={title}
                  newPrice={Number(itemPrice.replace("£", ""))}
                  prevPrice={null}
                  image={salesImg}
                  imageId={imageId}
                  className={"salesShopImg"}
                />
                <div>
                  <p className="headtext-small">ADD TO BAG</p>
                </div>
              </div>
            ) : (
              <div className="salesShopImg-container">
                <div
                  className="flexCenter shop-circle reminder salesShopImg"
                  onClick={toggleReminder}
                  tabIndex={0}
                  role="button"
                  aria-label="Set reminder"
                >
                  {reminder ? (
                    <BsBellFill className="bell-icon" />
                  ) : (
                    <BsFillBellSlashFill className="bell-icon" />
                  )}
                </div>
                <div>
                  <p className="headtext-small white-Text">
                    {reminder ? "CANCEL REMINDER" : "SET REMINDER"}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);

Hero.propTypes = {
  backgroundImage: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
  linkText: PropTypes.string,
  linkUrl: PropTypes.string,
  heroImageUrl: PropTypes.string,
  itemPrice: PropTypes.number,
  handleNext: PropTypes.func,
  imageId: PropTypes.number,
  salesImg: PropTypes.string,
};

export default Hero;
