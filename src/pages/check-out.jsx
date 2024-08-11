import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import PaymentForm from "../utility/PaymentForm";
import PaymentFooter from "../components/paymentfooter/PaymentFooter";
import Sponsor from "../components/Sponsors/Sponsor";
import './Pages.css';


const Checkout = () => {
  const { bag, total, handleRemoveBagItem } = useOutletContext();
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
    // Handle form submission logic
    setFormValues({
      address: "",
      zipCode: "",
    });
  };

  return (
    <>
      <div id="checkoutForm">
        <div className="checkout-form">
          <h3 className="shoe-title2">Checkout</h3>
          <p className="light-grey small shoe-title">home/cart/checkout</p>
          <div className="checkout-form-inner">
            <div className="checkout-col">
              {bag.map((item) => (
                <div key={item.imageId} className="checkout-card">
                  <div className="checkout-card-details">
                    <h3 className="headtext-small shoe-title2">{item.title}</h3>
                    <p>Size: {item.size}</p>
                    <p>QTY: {item.qty}</p>
                    <p 
                      onClick={() => handleRemoveBagItem(item.imageId, item.newPrice)} 
                      className="light-grey small underline"
                    >
                      Remove
                    </p>
                  </div>
                  <div>
                    <img src={item.imageUrl} alt={item.title} />
                  </div>
                </div>
              ))}
            </div>
            <div className="checkout-col">
              <ul className="white-overlay">
                <li>
                  <h3 className="shoe-title2 small">TOTAL</h3>
                  <p className="light-grey">included delivery charge *$40</p>
                </li>
                {bag.map((item) => (
                  <li key={item.imageId}>
                    <p>{item.title}</p>
                    <p className="price">${item.newPrice}</p>
                  </li>
                ))}
                <li>
                  <p>item total</p>
                  <h3>${total + 40}</h3>
                </li>
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
      </div>
      <Sponsor />
      <PaymentFooter />
    </>
  );
};

export default Checkout;
