import React, { memo } from "react";
import PropTypes from "prop-types";
import Discount from "./Discount";
import AddBagComponent from "./AddBagComponent";
import "../index.css";

const AllCategoryCard = memo(
  ({
    image,
    description = "",
    title,
    newPrice,
    prevPrice = 40,
    appHandleBag,
    imageId,
  }) => {
    return (
      <section className="ac-card">
        <div className="ac-item-wrapper">
          <div className="img-absolute-div">
            <img src={image} alt={title} className="image" loading="lazy" />
            <Discount newPrice={newPrice} prevPrice={prevPrice} />
            <AddBagComponent
              handleBagData={appHandleBag}
              title={title}
              newPrice={newPrice}
              prevPrice={prevPrice}
              image={image}
              imageId={imageId}
            />
          </div>
        </div>
        <div className="ac-card-details">
          <h3 className="shoe-title">{title}</h3>
          <p className={`small shoe-title ${description ? "light-grey" : ""}`}>
            {description ? (
              description
            ) : (
              <>
                <del>£{prevPrice}</del> £{newPrice}
              </>
            )}
          </p>
        </div>
      </section>
    );
  }
);

AllCategoryCard.propTypes = {
  image: PropTypes.string.isRequired,
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
  newPrice: PropTypes.string.isRequired,
  prevPrice: PropTypes.string,
  appHandleBag: PropTypes.func.isRequired,
  imageId: PropTypes.number,
};

export default AllCategoryCard;
