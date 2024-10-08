import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import BagItem from "../../utility/BagItem";
import { GiShoppingCart } from "react-icons/gi";
import CloseButton from "../../utility/CloseButton";
import "../../index.css";

const BagItems = ({
  bagOpen,
  total,
  handleBagOpen,
  bagData,
  handleRemoveBagItem,
}) => {
  const bagSidebar = document.getElementById("bagSidebar");

  if (!bagOpen) return null;

  return ReactDOM.createPortal(
    <div
      data-lenis-prevent
      className={`Bag-item-section ${bagOpen ? "slideInRight" : ""}`}
    >
      {bagData.length > 0 ? (
        <>
          <div className="Bag-item-section-inner">
            <div className="bag-item-nav">
              <div className="scroll-down">
                <p>scroll-down</p>
                <p> ↓</p>
              </div>
              <div className="relative" onClick={handleBagOpen}>
                <CloseButton />
              </div>
            </div>
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
                qty={item.qty}
                size={item.size}
              />
            ))}
          </div>
          <div className="total-checkout-div">
            <div className="total-div">
              <p>Subtotal</p>
              <p className="total-price">£{total}.00</p>
            </div>
            <button className="checkout-btn">
              <Link
                to="/check-out"
                className="btn-link"
                onClick={handleBagOpen}
              >
                CHECKOUT
              </Link>
            </button>
          </div>
        </>
      ) : (
        <div className="bag-empty">
          <CloseButton onClick={handleBagOpen} />
          <div className="bag-empty-div purchase-img">
            <GiShoppingCart className="bag-empty-cart" />
          </div>
          <p>Oops! Looks like your bag is empty.</p>
          <Link
            to="/"
            className="cont-shopping btn-link"
            onClick={handleBagOpen}
          >
            CONTINUE SHOPPING
          </Link>
        </div>
      )}
    </div>,
    bagSidebar
  );
};

export default BagItems;
