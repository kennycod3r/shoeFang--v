import HeadText from "../components/HeadText/HeadText";
import React from "react";
import PaymentForm from "../utility/PaymentForm";
import { useState } from "react";
import Footer from "../components/Footer/Footer";

export default function Checkout() {
  const [formValues, setFormValues] = useState({
    Address: "",
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
    setFormValues({
      Address: "",
      zipCode: "",
    });
    console.log("Checkout Info:", formValues);
  };
  {
    /*className="checkout-form-inner"*/
  }
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
            <div className="checkout-card">
              <ul className="checkout-card-details">
                <h3 className="headtext-small">Nike React Infinity</h3>
                <li>
                  <p>Size: 42</p>
                </li>
                <li>
                  <p>QTY: 1</p>
                </li>
                <li>
                  <p className="light-grey small">Details</p>
                </li>
              </ul>
              <div>
                <img
                  src="https://pbs.twimg.com/media/GK5f5lGXwAACsEA?format=jpg&name=large"
                  alt="shoe"
                />
              </div>
            </div>
            <div className="checkout-card ">
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
            <div className="checkout-card white-overlay">
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
                <label htmlFor="Address">Address</label>
                <div className="form-col">
                  <input
                    name="Address"
                    type="text"
                    placeholder="City"
                    value={formValues.Address}
                    onChange={handleChange}
                  />
                  <input
                    name="zipCode"
                    type="text"
                    placeholder="Zip"
                    value={formValues.zipCode}
                    onChange={handleChange}
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