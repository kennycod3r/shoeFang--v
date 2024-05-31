import AllCategoryCard from "../../utility/AllCategoryCard";
import React from "react";
import './AllCategory.css';
import allcategorydata from "../../Data/allcategorydata";
import Sponsor from "../Sponsors/Sponsor";

export default function AllCategorySection({ handleBag }) {
  return (
    <>
      <Sponsor/>
      
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
