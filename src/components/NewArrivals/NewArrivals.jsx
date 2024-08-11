import React from "react";
import greenNike from "../../assets/greenNike.svg";
import Hero from "../Hero/Hero";
import Yeezyimg from "../../Img/yeezy.webp";
import "../../index.css";
import ProductDisplay from "../ProductDisplay/ProductDisplay";

const NewArrivals = ({ data, appHandleBag }) => {
  const NewArrivalData = [
    {
      title: "Addidas yeezy Re-release",
      itemPrice: 97,
      itemDescription:
        "Stay tuned for the re-release of limited pieces of Adidas original Yeezys.",
      salesImg: Yeezyimg,
      imageId: 700,
      backgroundImage:
        "https://images.unsplash.com/photo-1627211448661-0ff9872180db?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="newarrivals">
      <ProductDisplay
        title="NEW ARRIVALS (NIKE)"
        icon={greenNike}
        data={data}
        appHandleBag={appHandleBag}
      />
      <Hero
        title={NewArrivalData[0].title}
        description={NewArrivalData[0].itemDescription}
        linkUrl="/check-out"
        linkText="Proceed to Checkout"
        heroImageUrl={NewArrivalData[0].salesImg}
        itemPrice={NewArrivalData[0].itemPrice}
        appHandleBag={appHandleBag}
        imageId={NewArrivalData[0].imageId}
        backgroundImage={NewArrivalData[0].backgroundImage}
        salesImg={NewArrivalData[0].salesImg}
      />
    </div>
  );
};

export default NewArrivals;
