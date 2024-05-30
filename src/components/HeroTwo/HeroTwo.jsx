import "./HeroTwo.css";
import React from "react";
import ShoeBox from "../../Img/shoeBox.webp";
import nikeshoe1 from "../../Img/nikeshoe1.webp";
import nikeshoe2 from "../../Img/nikeshoe2.webp";
import nikesvg from "../../assets/nike.svg";

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
              <img src={nikesvg} alt="Nike logo" />
            </div>
            <p className="small">
              Travis Scott x Air Jordan 1 Low Golf “Olive”
            </p>
          </div>
          <div className="hero2-img-container">
            <div className="ad-card">
              <img src={ShoeBox} alt="Shoe box" />
            </div>
            <div className="ad-card">
              <img src={nikeshoe1} alt="Nike shoe 1" />
            </div>
            <div className="ad-card">
              <img src={nikeshoe2} alt="Nike shoe 2" />
            </div>
          </div>
        </div>
        <p className="small pre-order">Place a pre-order?</p>
      </div>
    </section>
  );
}
