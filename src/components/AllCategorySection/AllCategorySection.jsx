import React from "react";
import AllCategoryCard from "../../utility/AllCategoryCard";
import Sponsor from "../Sponsors/Sponsor";
import allcategorydata from "../../Data/allcategorydata";
import "./AllCategory.css";

const AllCategorySection = ({ appHandleBag }) => {
  return (
    <>
      <Sponsor />
      <div className="category-section">
        {allcategorydata.map((item) => (
          <AllCategoryCard
            key={item.id}
            image={item.img}
            title={item.title}
            newPrice={item.newPrice}
            prevPrice={item.prevPrice}
            description={item.description}
            appHandleBag={appHandleBag}
            imageId={item.id}
          />
        ))}
      </div>
    </>
  );
};

export default AllCategorySection;

