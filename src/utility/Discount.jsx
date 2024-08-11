import React from "react";
import '../index.css';

const Discount = ({ newPrice, prevPrice }) => {
  const receivedNewPrice = Number(newPrice);
  const receivedPrevPrice = Number(prevPrice);

  const discount =
    receivedPrevPrice > 0
      ? Math.floor(
          ((receivedPrevPrice - receivedNewPrice) / receivedPrevPrice) * 100
        )
      : 0;

  return (
    <div className="img-promo-div flexBase">
      <div className="promo-div">New</div>
      {discount > 0 && <div className="promo-div img-promo">{discount}%</div>}
    </div>
  );
};

export default Discount;
