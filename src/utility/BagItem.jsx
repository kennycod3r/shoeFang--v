import React, { useState } from "react";
import CloseButton from "./CloseButton";
import { CiTrash } from "react-icons/ci";

export default function BagItem({
  handleBagOpen,
  newItemTitle,
  newItemPrevPrice,
  newItemPrice,
  imageUrl,
  imageId,
  handleRemoveBagItem,
}) {
  const [count, setCount] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M 5 / W 6.5");

  const shoeSizes = [
    "M 3.5 / W 5",
    "M 4.5 / W 6",
    "M 5 / W 6.5",
    "M 6 / W 7.5",
    "M 7.5 / W 9",
  ];

  const handleItemCount = (operation) => {
    setCount((prevCount) => {
      if (operation === "decrement" && prevCount > 1) {
        return prevCount - 1;
      } else if (operation === "increment") {
        return prevCount + 1;
      }
      return prevCount;
    });
  };

  return (
    <div className="bag-item">
      <CloseButton onClick={handleBagOpen} />
      <h2>{newItemTitle}</h2>
      <div className="bag-img-div">
        <img className="purchase-img" src={imageUrl} alt="shoe box" />
        <div className="remove-item-div">
          <button onClick={() => handleRemoveBagItem(imageId, newItemPrice)}>
            <p>Remove</p> <CiTrash className="remove-item-btn" />
          </button>
        </div>
      </div>
      <div className="flexSpaceBetween price-header">
        <p>
          <del>{newItemPrevPrice}</del> £{newItemPrice}
        </p>
        <div className="flexCenter">
          <p className="small">QTY</p>
          <div className="item-count">
            <div
              className="bag-btn"
              onClick={() => handleItemCount("decrement")}
            >
              -
            </div>
            <div>{count}</div>
            <div
              className="bag-btn"
              onClick={() => handleItemCount("increment")}
            >
              +
            </div>
          </div>
        </div>
      </div>
      <ul className="shoeSizes">
        {shoeSizes.map((item, index) => (
          <li
            key={index}
            onClick={() => setSelectedSize(item)}
            style={
              selectedSize === item
                ? { backgroundColor: "black", color: "white" }
                : null
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}


