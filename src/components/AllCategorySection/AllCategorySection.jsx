import AllCategoryCard from "../../utility/AllCategoryCard";
import React from "react";
import './AllCategory.css';
import nikelogo2 from "../../assets/nikelogo2.svg";
import adidasSvg from "../../assets/adidas2.svg";
import allcategorydata from "../../Data/allcategorydata";

export default function AllCategorySection({ handleBag }) {
  return (
    <>
      <div className="sponsor-wrapper">
        {/* Your sponsor images */}
      </div>

      <h1 className="recommended-title cat-title headtext-small">
        {/* Your category title */}
      </h1>
      
      <div className="category-section">
        {allcategorydata.map((item) => (
          <AllCategoryCard
            key={item.description}
            image={item.img}
            title={item.title}
            newPrice={item.newPrice}
            prevPrice={item.prevPrice}
            handleBag={handleBag}
            description={item.description}
            imageId={item.id}
          />
        ))}
      </div>
    </>
  );
}
