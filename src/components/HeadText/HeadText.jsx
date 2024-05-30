import React from "react";
import Promo from "./Promo";
import { useState } from "react";
import "./HeadText.css";
import { Link } from "react-router-dom";
import BagItems from "../BagItems/BagItems";
import fangs from "../../assets/fangs.svg";
import { AiOutlineUserAdd } from "react-icons/ai";
import HamburgerMenu from '../../utility/HamburgerMenu';

const HeadText = ({  handleSidebar, bagData, total, handleRemoveBagItem }) => {
  const [bagOpen, setBagOpen] = useState(false);

  function handleBagOpen() {
    setBagOpen((prevState) => !prevState);
  }
  return (
    <>
      <Promo />
      <div className="flexCenter outer-div">
        <div className="inner-div">
          <div className="div-one" id="sidebar">
            <HamburgerMenu  onClick={handleSidebar} />
            <div className="show-mobile">
              <Link to="/Journal/1">JOURNAL</Link>
            </div>
            <div className="show-mobile">ABOUT</div>
            {bagData ? (
              <>
                <div className="show-mobile">SALE</div>
                <div className="show-mobile">SHOP</div>
              </>
            ) : null}
          </div>

          <div className="flexCenter div-two Head">
            <Link to="/" className="head-text">
              ShoeFang
              <img src={fangs} className="fangs" alt="fang" />
            </Link>
          </div>

          <div className="div-one div-three">
            {bagData ? (
              <div className="flexSpaceBetween" onClick={handleBagOpen}>
                BAG ({bagData ? bagData.length : null})
              </div>
            ) : null}
            <div className="show-mobile">ACCOUNT</div>
            <div className="acc-icon show-mobile">
              <AiOutlineUserAdd className="account-svg" />
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
};

export default HeadText;
