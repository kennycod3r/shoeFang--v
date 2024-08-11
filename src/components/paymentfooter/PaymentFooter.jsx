import React from "react";
import "./PaymentFooter.css";
import amazonIcon from "../../assets/applepay.svg";
import appleIcon from "../../assets/amazonpay.svg";
const logos = [
  appleIcon,
  "//fitsole.shop/cdn/shop/files/visa.svg?height=30&v=1715882361",
  amazonIcon,
  "//fitsole.shop/cdn/shop/files/mastercard.svg?height=30&v=1715882361",
];

const PaymentFooter = () => {
  return (
    <div className="payment-footer-container">
      <div className="payment-logos-wrapper">
        <div className="payment-logos">
          {logos.map((logo, index) => (
            <img
              key={index}
              className="payment-logo"
              src={logo}
              alt={`Payment logo ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="small shoe-title">© SHOEFANG</div>
    </div>
  );
};


export default PaymentFooter;
