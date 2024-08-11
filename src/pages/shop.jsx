import React, { useState, useCallback, useMemo } from "react";
import storeData from "../Data/Data";
import '../index.css';
import AllCategoryCard from "../utility/AllCategoryCard";
import Recommended from "../components/Recommended/Recommended";
import Products from "../components/Products/Products";
import { useOutletContext } from "react-router-dom";
import BagItems from "../components/BagItems/BagItems";

const Shop = () => {
  const {
    bag,
    total,
    appHandleBag,
    handleRemoveBagItem,
    handleBagOpen,
    bagOpen,
  } = useOutletContext();

  const [selectedCategory, setSelectedCategory] = useState("");
  const [query, setQuery] = useState("");

  const handleInputChange = useCallback((event) => {
    setQuery(event.target.value);
  }, []);

  const handleRadioChange = useCallback((event) => {
    setSelectedCategory(event.target.value);
  }, []);

  const handleClick = useCallback((event) => {
    setSelectedCategory(event.target.value);
  }, []);

  const filteredItems = useMemo(() => {
    if (!query) return storeData;
    return storeData.filter((storeItem) =>
      storeItem.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  const filteredData = useMemo(() => {
    if (!selectedCategory && !query) return storeData;

    return filteredItems.filter(({ color, company, title }) =>
      [color, company, title].includes(selectedCategory)
    );
  }, [filteredItems, selectedCategory]);

  const renderedItems = useMemo(() => {
    return filteredData.map(
      ({ img, title, newPrice, prevPrice, id, description }) => (
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
      )
    );
  }, [filteredData, appHandleBag]);

  return (
    <section className="shop-page">
      <div className="shop-hero">
        <div className="sh-header-div">
          <h1 className="head-text SH-HEADER">SHOEFANG</h1>
          <div className="c-icon">©</div>
        </div>
        <p className="smallestp small">
          © 2024 SHOEFANG B.V. all copyrights intended.
        </p>
      </div>
      <Recommended
        handleClick={handleClick}
        query={query}
        handleChange={handleRadioChange}
        handleInputChange={handleInputChange}
      />
      <Products result={renderedItems} />
      <BagItems
        total={total}
        bagData={bag}
        bagOpen={bagOpen}
        handleBagOpen={handleBagOpen}
        handleRemoveBagItem={handleRemoveBagItem}
      />
    </section>
  );
};

export default Shop;
