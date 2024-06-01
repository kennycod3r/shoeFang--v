import React from "react";
import AllCategoryCard from "../../utility/AllCategoryCard";
import Sponsor from "../Sponsors/Sponsor";
import allcategorydata from "../../Data/allcategorydata";
import './AllCategory.css';

const AllCategorySection = ({ handleBag }) => {
  return (
    <>
      <Sponsor />
      <div className="category-section">
        {allcategorydata.map(item => (
          <AllCategoryCard
            key={item.id}
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
};

export default AllCategorySection;
