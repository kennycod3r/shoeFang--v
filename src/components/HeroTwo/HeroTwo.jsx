import "./HeroTwo.css";
import React from "react";
import ShoeBox from "../../Img/shoeBox.webp";
import nikeshoe1 from "../../Img/nikeshoe1.webp";
import nikeshoe2 from "../../Img/nikeshoe2.webp";
import nikesvg from "../../assets/nike.svg";
import ProductTimer from "../../utility/ProductTimer";

export default function HeroTwo() {
  return (
    <section className="hero2">
      <div className="hero2-container">
        <div className="text-button-container">
          <h2>
            NIRVANA IN EVERY <span>BOX</span>
            <br />
            YOU Purchase.
          </h2>
          <div className="nikesvg-des">
            <div>
              <img src={nikesvg} alt="Nike logo" loading="lazy" />
            </div>
            <p className="small">
              Travis Scott x Air Jordan 1 Low Golf “Olive”
            </p>
          </div>
          <div className="hero2-img-container">
            <div className="ad-card">
              <img src={ShoeBox} alt="Shoe box showing product packaging" loading="lazy" />
            </div>
            <div className="ad-card">
              <img src={nikeshoe1} alt="Nike shoe in black and white" loading="lazy" />
            </div>
            <div className="ad-card">
              <img src={nikeshoe2} alt="Another angle of Nike shoe" loading="lazy" />
            </div>
          </div>
        </div>
        <ProductTimer />
      </div>
    </section>
  );
}

