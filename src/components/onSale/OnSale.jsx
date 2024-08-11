import React from "react";
import ProductDisplay from "../ProductDisplay/ProductDisplay";
import adidassvg from "../../assets/adidas1.svg";

const OnSale = ({ data, appHandleBag }) => {
  return (
    <ProductDisplay
      title="ON SALE"
      icon={adidassvg}
      data={data}
      appHandleBag={appHandleBag}
    />
  );
};

export default OnSale;
