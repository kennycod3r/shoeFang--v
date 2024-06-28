import React, { useState, useEffect, useCallback } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Loading from "./utility/Loader/Loading";
import useLenis from "./components/hooks/UseLennis";
import Sidebar from "./components/Sidebar/Sidebar";
import BagItems from "./components/BagItems/BagItems";
import HeadText from "./components/HeadText/HeadText";

function App() {
  useLenis();

  const [isLoading, setIsLoading] = useState(true);
  const [bag, setBag] = useState([]);
  const [total, setTotal] = useState(0);
  const [bagOpen, setBagOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleBagOpen = useCallback(() => setBagOpen((prev) => !prev), []);
  const handleRemoveBagItem = useCallback((imageId, newItemPrice) => {
    setBag((prev) => prev.filter((item) => item.imageId !== imageId));

    const newprice = Number(newBagData.newPrice);
    setTotal((prev) => prev - newprice);
  }, []);

  const handleSidebar = useCallback(
    () => setIsSidebarOpen((prev) => !prev),
    []
  );
  const appHandleBag = useCallback((newBagData) => {
    setBag((prev) => [...prev, newBagData]);
    const newprice = Number(newBagData.newPrice);
    setTotal((prev) => prev + newprice);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="App">
      {bagOpen && (
        <BagItems
          bagData={bag}
          bagOpen={bagOpen}
          total={total}
          handleBagOpen={handleBagOpen}
          handleRemoveBagItem={handleRemoveBagItem}
        />
      )}
      <HeadText
        total={total}
        bagOpen={bagOpen}
        handleBagOpen={handleBagOpen}
        bagData={bag}
        handleSidebar={handleSidebar}
      />

      <Sidebar handleSidebar={handleSidebar} isOpen={isSidebarOpen} />
      <Outlet
        context={{
          bag,
          total,
          appHandleBag,
          handleRemoveBagItem,
          handleBagOpen,
          handleSidebar,
          bagOpen,
        }}
      />
      <Footer />
    </div>
  );
}

export default App;
