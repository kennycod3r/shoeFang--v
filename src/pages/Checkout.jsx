import React, { useState } from "react";
import ReactDOM from "react-dom";
import PaymentForm from "../utility/PaymentForm";
import HeadText from "../components/HeadText/HeadText";
import { useBagContext } from "../context/BagContext";

const Checkout = () => {
  const { bag, total } = useBagContext();

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

  console.log("Bag Data:", bag); // Log the bag data

  const checkoutForm = (
    <div id="checkoutForm">
      <HeadText />
      <div className="checkout-form">
        <h3 className="headtext-small">Checkout</h3>
        <p className="light-grey small">home/cart/checkout</p>
        <div className="checkout-form-inner">
          <div className="checkout-col">
            {bag.map(item => (
              <div key={item.imageId} className="checkout-card">
                <div className="checkout-card-details">
                  <h3 className="headtext-small">{item.title}</h3>
                  <p>Size: {item.size}</p>
                  <p>QTY: {item.qty}</p>
                  <p className="light-grey small">Details</p>
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
                <h3>TOTAL</h3>
                <p className="light-grey">included delivery charge *$40</p>
              </li>
              {bag.map(item => (
                <li key={item.imageId}>
                  <p>{item.title}</p>
                  <p className="price">${item.newPrice}</p>
                </li>
              ))}
              <li>
                <p>item total</p>
                <h3>${total}</h3>
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
  );

  return ReactDOM.createPortal(
    checkoutForm,
    document.getElementById("CheckoutPage")
  );
};

export default Checkout;
