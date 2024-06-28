import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import Promo from "./Promo";
import HamburgerMenu from "../../utility/HamburgerMenu";
import fangs from "../../assets/fangs.svg";
import "./HeadText.css";
import Bluepointer from "../../utility/Bluepointer";
import Account from "../../utility/Account/Account";

const HeadText = React.memo(({ handleBagOpen, handleSidebar, bagData }) => {
  return (
    <>
      <Promo />
      <header className="flexCenter outer-div">
        <nav className="inner-div">
          <div className="div-one" id="sidebar">
            <HamburgerMenu onClick={handleSidebar} />
            <div className="show-mobile">
              <Link to="/">HOME</Link>
            </div>
            <div className="show-mobile">
              <Link to="/Journal">JOURNAL</Link>
            </div>

            <div className="show-mobile">
              <Link to="/Sale">SALE</Link>
            </div>
            <div className="show-mobile">SHOP</div>
          </div>

          <div className="flexCenter div-two">
            <Link to="/" className="head-text">
              <h3>ShoeFang</h3>
              <div className="show-mobile">
                <img src={fangs} className="fangs" alt="fang" />
              </div>
            </Link>
          </div>

          <div className="div-one div-three">
            <>
              <span className="show-mobile">
                <Bluepointer />
              </span>
              <div
                className="flexSpaceBetween bag-link"
                onClick={handleBagOpen}
              >
                {`BAG (${bagData.length})`}
              </div>
            </>

            <div className=" show-mobile sm-account">
              <div>ACCOUNT</div>
              <Account />
            </div>
          </div>
        </nav>
      </header>
      <div id="detail"></div>
    </>
  );
});

export default HeadText;
