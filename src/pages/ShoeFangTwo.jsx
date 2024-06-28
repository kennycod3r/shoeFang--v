import React, { useState, useCallback, useMemo } from "react";
import { useOutletContext } from "react-router-dom";
import useLenis from "../components/hooks/UseLennis";
import Products from "../components/Products/Products";
import Recommended from "../components/Recommended/Recommended";
import Hero from "../components/Hero/Hero";
import storeData from "../Data/Data";
import HeroTwo from "../components/HeroTwo/HeroTwo";
import BagItems from "../components/BagItems/BagItems";
import AllCategoryCard from "../utility/AllCategoryCard";
import AllCategorySection from "../components/AllCategorySection/AllCategorySection";

export default function ShoeFangTwo() {
  const {
    bag,
    total,
    appHandleBag,
    handleRemoveBagItem,
    handleBagOpen,
    bagOpen,
  } = useOutletContext();

  useLenis();
  const [selectedCategory, setSelectedCategory] = useState(null);
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
    return storeData.filter((storeItem) =>
      storeItem.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  const filteredData = useMemo(() => {
    let filteredStoreData = storeData;

    if (query) {
      filteredStoreData = filteredItems;
    }

    if (selectedCategory) {
      filteredStoreData = filteredStoreData.filter(
        ({ color, company, title }) =>
          color === selectedCategory ||
          company === selectedCategory ||
          title === selectedCategory
      );
    }

    return filteredStoreData.map(({ img, title, newPrice, prevPrice, id }) => (
      <AllCategoryCard
        key={id}
        image={img}
        title={title}
        newPrice={newPrice}
        prevPrice={prevPrice}
        imageId={id}
        appHandleBag={appHandleBag}
      />
    ));
  }, [filteredItems, selectedCategory, query, appHandleBag]);

  return (
    <div id="detail">
      <section className={`body-section ${bagOpen ? "no-scroll" : ""}`}>
        <Hero />
        <Recommended
          handleClick={handleClick}
          query={query}
          handleChange={handleRadioChange}
          handleInputChange={handleInputChange}
        />
        <Products result={filteredData} />

        <BagItems
          total={total}
          bagData={bag}
          bagOpen={bagOpen}
          handleBagOpen={handleBagOpen}
          handleRemoveBagItem={handleRemoveBagItem}
        />

        <HeroTwo />
        <AllCategorySection appHandleBag={appHandleBag} />
      </section>
    </div>
  );
}
