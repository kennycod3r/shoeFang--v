import React from "react";
import greenNike from "../../assets/greenNike.svg";
import AllCategoryCard from "../../utility/AllCategoryCard";
import Hero from "../Hero/Hero";
import Yeezyimg from "../../Img/yeezy.webp";
import "../../index.css";

const NewArrivals = ({ data, appHandleBag }) => {
  const NewArrivalData = [
    {
      title: "Addidas yeezy Re-release",
      itemPrice: 97,
      itemDescription:
        "stay tuned for the re-relese limited pices of addidas original yeezys.",
      salesImg: Yeezyimg,
      imageId: 700,
      backgroundImage:
        "https://images.unsplash.com/photo-1627211448661-0ff9872180db?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="newarrivals">
      <div className="cat-text-header">
        <div className="svg-con">
          <img src={greenNike} alt="svgicon" />
        </div>
        <div>
          {" "}
          <h1 className="headtext-small bolderh2">NEW ARRIVALS (NIKE)</h1>
        </div>
      </div>
      <div className="category-section">
        {data.map(({ img, title, newPrice, prevPrice, id, description }) => (
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
        ))}
      </div>
      <div className="w100 flexCenter taC">
        <h3 className="small underline">VIEW ALL</h3>
      </div>
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
