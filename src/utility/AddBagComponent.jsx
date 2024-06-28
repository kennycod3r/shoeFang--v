import React, { useState, useCallback } from "react";
import { BsCartCheckFill } from "react-icons/bs";
import PropTypes from 'prop-types';
import cartEmpty from "../assets/cartempty.svg";

const AddBagComponent = ({ handleBagData, title, newPrice, prevPrice, image, imageId, className }) => {
  const [bagged, setBagged] = useState(false);

  const handleBag = useCallback(() => {
    const newBagData = {
      title,
      newPrice,
      prevPrice,
      imageUrl: image,
      imageId,
    };
    handleBagData(newBagData);
    setBagged(true);
  }, [handleBagData, image, title, newPrice, prevPrice, imageId]);

  return (
    <div className={`flexCenter shop-circle ${className}`} onClick={handleBag}>
      {bagged ? (
        <BsCartCheckFill className="nav-icons" />
      ) : (
        <img src={cartEmpty} alt="add-shoe" className="nav-icons" />
      )}
    </div>
  );
};

AddBagComponent.propTypes = {
  handleBagData: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  newPrice: PropTypes.string.isRequired,
  prevPrice: PropTypes.string,
  image: PropTypes.string.isRequired,
  imageId: PropTypes.string.isRequired,
};

export default AddBagComponent;
