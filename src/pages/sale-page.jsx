import { useOutletContext } from "react-router-dom";
import React, { useState } from "react";
import Hero from "../components/Hero/Hero";
import salesImg1 from "../Img/salesImg1.webp";
import salesImg2 from "../Img/salesImg2.webp";
import salesImg3 from "../Img/salesImg3.webp";

const Sale = () => {
  const { appHandleBag } = useOutletContext();
  const salesData = [
    {
      title: "Nike Air Max Plus",
      itemPrice: "£140",
      itemDescription:
        "Let your attitude have the edge in your Nike Air Max Plus, a Tuned Air experience that offers premium stability and unbelievable cushioning. Featuring the original's wavy design lines, TPU accents and airy mesh on the upper, it celebrates defiant style.",
      salesImg: salesImg1,
      imageId: "1",
    },
    {
      title: "Nike Air Max Dn",
      itemPrice: "£154.99",
      itemDescription:
        "Say hello to the next generation of Air technology. The Air Max Dn features our Dynamic Air unit system of dual-pressure tubes, creating a reactive sensation with every step. This results in a futuristic design that's comfortable enough to wear from day to night. Go ahead—Feel The Unreal.",
      salesImg: salesImg2,
      imageId: "2",
    },
    {
      title: "Nike Air Max Plus Utility",
      itemPrice: "£129.49",
      itemDescription:
        "Inspired by the beach but made for city streets, the Nike Air Max Plus Utility gets a rugged upgrade perfect for your urban adventures. We added a sturdy suede mudguard to its breathable knit upper and tightened the look up with an extra set of toggle-closure laces for a secure and supportive fit. Plus, visible Max Air units in the forefoot and heel provide a Tuned Air experience that blends comfort with defiant style.",
      salesImg: salesImg3,
      imageId: "3",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % salesData.length);
  };
  return (
    <>
      <Hero
        title={salesData[currentIndex].title}
        description={salesData[currentIndex].itemDescription}
        linkUrl="/check-out"
        linkText="Proceed to Checkout"
        heroImageUrl={salesData[currentIndex].salesImg}
        itemPrice={salesData[currentIndex].itemPrice}
        handleNext={handleNext}
        appHandleBag={appHandleBag}
        imageId={salesData[currentIndex].imageId}
        salesImg={salesData[currentIndex].salesImg}
      />
    </>
  );
};

export default Sale;
