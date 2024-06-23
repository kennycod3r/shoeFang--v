import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import Promo from "./Promo";
import BagItems from "../BagItems/BagItems";
import HamburgerMenu from "../../utility/HamburgerMenu";
import fangs from "../../assets/fangs.svg";
import "./HeadText.css";
import accounticon from '../../assets/account.svg';

const HeadText = React.memo(
  ({handleBagOpen, bagOpen, handleSidebar, bagData, total, handleRemoveBagItem }) => {
  
    return (
      <>
        <Promo />
        <div className="flexCenter outer-div">
          <div className="inner-div">
            <div className="div-one" id="sidebar">
              <HamburgerMenu onClick={handleSidebar} />
              <div className="show-mobile">
                <Link to="/Journal/1">JOURNAL</Link>
              </div>
              <div className="show-mobile">ABOUT</div>

              <div className="show-mobile">SALE</div>
              <div className="show-mobile">SHOP</div>
            </div>

            <div className="flexCenter div-two">
              <Link to="/" className="head-text">
                <h3>ShoeFang</h3>
                <div className="show-mobile">
                  <img
                    src={fangs}
                    className="fangs"
                    alt="fang"
                  />
                </div>
              </Link>
            </div>

            <div className="div-one div-three">
              <div
                className="flexSpaceBetween bag-link"
                onClick={handleBagOpen}
              >
               {total >= 0 ?  `BAG (${bagData.length})`: ` `}
              </div>

              <div className="show-mobile">ACCOUNT</div>
              <div className="acc-icon show-mobile">
                <img src={accounticon} alt="account" className="account-svg" />
              </div>
            </div>
          </div>
        </div>
        <div id="detail"></div>
        {bagOpen && (
          <BagItems
            bagData={bagData}
            bagOpen={bagOpen}
            total={total}
            handleBagOpen={handleBagOpen}
            handleRemoveBagItem={handleRemoveBagItem}
          />
        )}
      </>
    );
  }
);

export default HeadText;
