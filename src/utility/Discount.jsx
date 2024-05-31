import React from "react";

export default function Discount({ newPrice, prevPrice }) {

  const receivedNewPrice = Number(newPrice);
  const receivedPrevPrice = Number(prevPrice);

  const discount = Math.floor(((receivedPrevPrice - receivedNewPrice) / receivedPrevPrice) * 100);
  
  return (
    <div className="img-promo-div flexBase">
      <div className="promo-div">New</div>
      {discount > 0 ? <div className="promo-div img-promo">{discount}%</div> : null}
    </div>
  );
}
