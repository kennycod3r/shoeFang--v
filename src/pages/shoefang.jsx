import React, {useMemo } from "react";
import '../index.css';
import { useOutletContext } from "react-router-dom";
import useLenis from "../components/hooks/UseLennis";
import Hero from "../components/Hero/Hero";
import storeData from "../Data/Data";
import HeroTwo from "../components/HeroTwo/HeroTwo";
import BagItems from "../components/BagItems/BagItems";
import NewArrivals from "../components/NewArrivals/NewArrivals";
import AdidasSection from "../components/Adidas/AdidasSection";
import PaymentFooter from "../components/paymentfooter/PaymentFooter";
import Sponsor from "../components/Sponsors/Sponsor";

export default function ShoeFang() {
  useLenis();
  const {
    bag,
    total,
    appHandleBag,
    handleRemoveBagItem,
    handleBagOpen,
    bagOpen,
  } = useOutletContext();

  const adidasArray = useMemo(() => {
    return storeData.filter((item) => item.company === "Adidas");
  }, []);

  return (
    <div id="detail">
      <section className={`body-section ${bagOpen ? "no-scroll" : ""}`}>
        <Hero />
        <NewArrivals data={storeData.slice(0, 8)} appHandleBag={appHandleBag} />
        <AdidasSection
          data={adidasArray.slice(0, 4)}
          appHandleBag={appHandleBag}
        />
        <BagItems
          total={total}
          bagData={bag}
          bagOpen={bagOpen}
          handleBagOpen={handleBagOpen}
          handleRemoveBagItem={handleRemoveBagItem}
        />
        <HeroTwo />
        <Sponsor />
        <PaymentFooter />
      </section>
    </div>
  );
}
