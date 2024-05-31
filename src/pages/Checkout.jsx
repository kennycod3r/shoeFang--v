import React, { useState } from "react";
import HeadText from "../components/HeadText/HeadText";
import PaymentForm from "../utility/PaymentForm";
import Footer from "../components/Footer/Footer";

export default function Checkout() {
  const [formValues, setFormValues] = useState({
    address: "",
    zipCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Checkout Info:", formValues);
    setFormValues({
      address: "",
      zipCode: "",
    });
  };

  return (
    <>
      <HeadText />
      <div id="checkout" className="checkout-form">
        <h3 className="headtext-small">Checkout</h3>
        <p className="light-grey small">home/cart/checkout</p>
        <div className="checkout-form-inner">
          <div className="checkout-col">
            <div className="checkout-card">
              <div className="checkout-card-details">
                <h3 className="headtext-small">Nike React Infinity</h3>
                <p>Size: 42</p>
                <p>QTY: 1</p>
                <p className="light-grey small">Details</p>
              </div>
              <div>
                <img
                  src="https://pbs.twimg.com/media/GK5f5lGXwAACsEA?format=jpg&name=large"
                  alt="shoe"
                />
              </div>
            </div>
            {/* Additional checkout cards can be added here */}
          </div>
          <div className="checkout-col">
            <ul className="white-overlay">
              <li>
                <h3>TOTAL</h3>
                <p className="light-grey">included delivery charge *$40</p>
              </li>
              <li>
                <p>Nike React infinity</p>
                <p className="price">$160</p>
              </li>
              <li>
                <p>Nike React infinity</p>
                <p className="price">$160</p>
              </li>
              <li>
                <p>Nike React infinity</p>
                <p className="price">$160</p>
              </li>
              <h3> $700</h3>
            </ul>
          </div>
          <div className="checkout-col">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="address">Address</label>
                <div className="form-col">
                  <input
                    id="address"
                    name="address"
                    type="text"
                    placeholder="City"
                    value={formValues.address}
                    onChange={handleChange}
                    autoComplete="address-line1"
                  />
                  <input
                    id="zipCode"
                    name="zipCode"
                    type="text"
                    placeholder="Zip"
                    value={formValues.zipCode}
                    onChange={handleChange}
                    autoComplete="postal-code"
                  />
                </div>
                <div className="payment-form">
                  <PaymentForm />
                  <button type="submit">Place Order</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}