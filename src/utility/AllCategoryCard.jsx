import React, { useState, useCallback } from "react";
import { BsCartCheckFill } from "react-icons/bs";
import { PiShoppingCartSimple } from "react-icons/pi";
import Discount from "./Discount";
import ImageWithFallback from "./ImageWithFallback";
import unavailable from "../Img/unavailable.webp";


const AllCategoryCard = React.memo(({
  image,
  description,
  title,
  newPrice,
  prevPrice,
  handleBag,
  imageId,
}) => {
  const [bagged, setBagged] = useState(false);

  const handleBagData = useCallback(() => {
    const newBagData = { title, newPrice, prevPrice, imageUrl: image, imageId };
    handleBag(newBagData);
    setBagged(true);
  }, [handleBag, image, title, newPrice, prevPrice, imageId]);

  return (
    <section className="ac-card">
      <div className="ac-item-wrapper">
        <div className="img-absolute-div">
          <ImageWithFallback src={image} alt={title} fallbackSrc={unavailable} className="image" />
          <Discount newPrice={newPrice} prevPrice={prevPrice} />
          <div className="flexCenter shop-circle" onClick={handleBagData}>
            {bagged ? <BsCartCheckFill  className="nav-icons" />: <PiShoppingCartSimple className="nav-icons" />}
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
});

export default AllCategoryCard;
