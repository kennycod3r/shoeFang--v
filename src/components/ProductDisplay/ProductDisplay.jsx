import React from "react";
import AllCategoryCard from "../../utility/AllCategoryCard";
import '../../index.css';

const ProductDisplay = ({ title, icon, data, appHandleBag }) => {
  return (
    <section className="newarrivals">
      <div className="cat-text-header">
        <div className="svg-con">
          <img src={icon} alt="icon" />
        </div>
        <div>
          <h1 className="headtext-small bolderh2">{title}</h1>
        </div>
      </div>
      <div className="category-section">
        {data.map(({ img, title, newPrice, prevPrice, id, description }) => (
          <AllCategoryCard
            key={id}
            image={img}
            title={title}
            newPrice={newPrice}
            prevPrice={prevPrice}
            imageId={id}
            description={description}
            appHandleBag={appHandleBag}
          />
        ))}
      </div>
    </section>
  );
};
export default ProductDisplay;
