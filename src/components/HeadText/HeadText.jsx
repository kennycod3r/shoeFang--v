import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import Promo from "./Promo";
import BagItems from "../BagItems/BagItems";
import HamburgerMenu from "../../utility/HamburgerMenu";
import { AiOutlineUserAdd } from "react-icons/ai";
import fangs from "../../assets/fangs.svg";
import "./HeadText.css";

const HeadText = React.memo(({ handleSidebar, bagData, total, handleRemoveBagItem }) => {
  const [bagOpen, setBagOpen] = useState(false);

  const handleBagOpen = useCallback(() => {
    setBagOpen(prevState => !prevState);
  }, []);

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
            {bagData && (
              <>
                <div className="show-mobile">SALE</div>
                <div className="show-mobile">SHOP</div>
              </>
            )}
          </div>

          <div className="flexCenter div-two">
            <Link to="/" className="head-text">
              ShoeFang
              <img src={fangs} className="fangs" alt="fang" loading="lazy" />
            </Link>
          </div>

          <div className="div-one div-three">
            {bagData && (
              <div className="flexSpaceBetween" onClick={handleBagOpen}>
                BAG ({bagData.length})
              </div>
            )}
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
});

export default HeadText;
