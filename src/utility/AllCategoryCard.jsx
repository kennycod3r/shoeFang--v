import React, { memo } from "react";
import PropTypes from "prop-types";
import Discount from "./Discount";
import AddBagComponent from "./AddBagComponent";

const AllCategoryCard = memo(
  ({
    image,
    description,
    title,
    newPrice,
    prevPrice,
    appHandleBag,
    imageId,
  }) => {
    return (
      <section className="ac-card">
        <div className="ac-item-wrapper">
          <div
            className="img-absolute-div"
            style={{ backgroundImage: `url(${image})` }}
          >
            <img src={image} alt={title} className="image" />
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
          <h3>{title}</h3>
          <p className={`small ${description ? "light-grey" : ""}`}>
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


export default AllCategoryCard;
