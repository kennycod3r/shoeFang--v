import React, { useState, useCallback, useMemo } from "react";
import Products from "../components/Products/Products";
import Recommended from "../components/Recommended/Recommended";
import Sidebar from "../components/Sidebar/Sidebar";
import storeData from "../Data/Data";
import HeadText from "../components/HeadText/HeadText";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import HeroTwo from "../components/HeroTwo/HeroTwo";
import { Outlet } from "react-router-dom";
import AllCategorySection from "../components/AllCategorySection/AllCategorySection";
import AllCategoryCard from "../utility/AllCategoryCard";
import { BagProvider } from "../context/BagContext";

export default function ShoeFangTwo() {
  const [closeSidebar, setCloseSidebar] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [bag, setBag] = useState([]);
  const [query, setQuery] = useState("");
  const [total, setTotal] = useState(0);

  const handleBag = useCallback((newBagData) => {
    setBag((prevState) => [...prevState, newBagData]);
    setTotal((prevState) => prevState + Number(newBagData.newPrice));
  }, []);

  const handleRemoveBagItem = useCallback((imageId, newItemPrice, qty) => {
    setBag((prevState) => prevState.filter((item) => item.imageId !== imageId));
    setTotal((prevState) => prevState - Number(newItemPrice));
  }, []);

  const handleSidebar = useCallback(() => {
    setCloseSidebar((prevState) => !prevState);
  }, []);

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
        handleBag={handleBag}
      />
    ));
  }, [filteredItems, selectedCategory, handleBag, query]);

  return (
    <BagProvider value={{ bag, total, handleBag, handleRemoveBagItem }}>
      <div id="detail">
        <HeadText
          handleSidebar={handleSidebar}
          total={total}
          bagData={bag}
          handleRemoveBagItem={handleRemoveBagItem}
        />
        <section className="body-section">
          <Outlet />
          <Hero />
          {closeSidebar && <Sidebar handleSidebar={handleSidebar} />}
          <AllCategorySection handleBag={handleBag} />
          <Recommended
            handleClick={handleClick}
            query={query}
            handleChange={handleRadioChange}
            handleInputChange={handleInputChange}
          />
          <Products result={filteredData} />
          <HeroTwo />
        </section>
        <Footer />
      </div>
    </BagProvider>
  );
}
