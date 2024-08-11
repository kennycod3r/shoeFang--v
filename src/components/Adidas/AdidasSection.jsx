import React from "react";
import adidassvg from "../../assets/adidas1.svg";
import ProductDisplay from "../ProductDisplay/ProductDisplay";
import '../../index.css';


const AdidasSection = ({ data, appHandleBag }) => {
  return (
    <ProductDisplay
      title="shop adidas"
      icon={adidassvg}
      data={data}
      appHandleBag={appHandleBag}
    />
  );
};

export default AdidasSection;
