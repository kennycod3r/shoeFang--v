import React from "react";
import "../App.css";

const ProductTimer = () => {
  return (
    <div className="product-timer">
      <div className="product-timer-inner">
        <div className="pt-col">
          <div className="shoe-title pt-number">08</div>
          <div className="small shoe-title white-Text">April</div>
        </div>
        <div className="pt-col">
          <div className="shoe-title pt-number">12</div>
          <div className="small shoe-title white-Text">tue</div>
        </div>
        <div className="pt-col">
          <div className="shoe-title pt-number">24</div>
          <div className="small shoe-title white-Text">year</div>
        </div>
      </div>
    </div>
  );
};

export default ProductTimer;
