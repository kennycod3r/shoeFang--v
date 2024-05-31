import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { PiShoppingCartSimple } from "react-icons/pi";
import Discount from "./Discount";
import ImageWithFallback from "./ImageWithFallback";
import unavailable from "../Img/unavailable.webp";

const AllCategoryCard = ({
  image,
  description,
  title,
  newPrice,
  prevPrice,
  handleBag,
  imageId,
}) => {
  const [bagged, setBagged] = useState(false);

  const handleBagData = () => {
    const newBagData = { title, newPrice, prevPrice, imageUrl: image, imageId };
    handleBag(newBagData);
    setBagged(true);
  };

  return (
    <section className="ac-card">
      <div className="ac-item-wrapper">
        <div className="img-absolute-div">
          <ImageWithFallback src={image} alt={title} fallbackSrc={unavailable} className="image" />
          <Discount newPrice={newPrice} prevPrice={prevPrice} />
          <div className="flexCenter shop-circle" onClick={handleBagData}>
            {bagged ? <FaCartShopping className="nav-icons" /> : <PiShoppingCartSimple className="nav-icons" />}
          </div>
        </div>
      </div>
      <div className="ac-card-details">
        <h3>{title}</h3>
        <p className={`small ${description ? "light-grey" : ""}`}>
          {description ? description : <><del>£{prevPrice}</del> £{newPrice}</>}
        </p>
      </div>
    </section>
  );
};

export default AllCategoryCard;