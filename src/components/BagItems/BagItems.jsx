import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import BagItem from "../../utility/BagItem";
import { GiShoppingCart } from "react-icons/gi";
import CloseButton from "../../utility/CloseButton";
import "./BagItems.css";

const BagItems = ({ total, bagData, bagOpen, handleBagOpen, handleRemoveBagItem }) => {
  if (!bagOpen) return null;

  const bagSidebar = document.getElementById("bagSidebar");
  if (!bagSidebar) return null;

  return ReactDOM.createPortal(
    <div className="Bag-item-section" style={{ opacity: 1, animationDelay: "2ms" }}>
      {bagData.length > 0 ? (
        <>
          {bagData.map((item, index) => (
            <BagItem
              key={index}
              newItemTitle={item.title}
              newItemPrevPrice={item.prevPrice}
              newItemPrice={item.newPrice}
              handleBagOpen={handleBagOpen}
              bagData={bagData}
              imageUrl={item.imageUrl}
              imageId={item.imageId}
              handleRemoveBagItem={handleRemoveBagItem}
            />
          ))}
        </>
      ) : (
        <div className="bag-empty">
          <CloseButton onClick={handleBagOpen} />
          <div className="bag-empty-div purchase-img">
            <GiShoppingCart className="bag-empty-cart" />
          </div>
          <p>Oops! Looks like your bag is empty.</p>
          <Link to="/" className="cont-shopping btn-link" onClick={handleBagOpen}>
            CONTINUE SHOPPING
          </Link>
        </div>
      )}
      {bagData.length > 0 && (
        <>
          <div className="total-div">
            <p>Subtotal</p>
            <p className="total-price">£{total}.00</p>
          </div>
          <button className="checkout-btn">
            <Link to="CheckOut/3" className="btn-link">
              CHECKOUT
            </Link>
          </button>
        </>
      )}
    </div>,
    bagSidebar
  );
};

export default BagItems;