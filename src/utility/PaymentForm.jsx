import React, { useState } from "react";

const PaymentForm = () => {
  const [paymentValues, setPaymentValues] = useState({
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentValues({
      ...paymentValues,
      [name]: value,
    });
  };

  const months = [
    { value: "01", label: "January" },
    { value: "02", label: "February" },
    { value: "03", label: "March" },
    { value: "04", label: "April" },
    { value: "05", label: "May" },
    { value: "06", label: "June" },
    { value: "07", label: "July" },
    { value: "08", label: "August" },
    { value: "09", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" },
  ];

  const years = [];
  for (let i = new Date().getFullYear(); i <= new Date().getFullYear() + 3; i++) {
    years.push({ value: i.toString().slice(-2), label: i.toString() });
  }

  return (
    <>
      <label htmlFor="cardNumber">Payment Details</label>
      <input
        name="cardNumber"
        type="text"
        placeholder="Card Number"
        value={paymentValues.cardNumber}
        onChange={handleChange}
      />
      <div style={{ display: "flex", gap: "10px" }}>
        <div>
          <label htmlFor="expiryMonth">Expiry Date (MM/YY)</label>
          <div style={{ display: "flex" }}>
            <select
              name="expiryMonth"
              value={paymentValues.expiryMonth}
              onChange={handleChange}
            >
              <option value="">MM</option>
              {months.map((month) => (
                <option key={month.value} value={month.value}>
                  {month.label}
                </option>
              ))}
            </select>

            <select
              name="expiryYear"
              value={paymentValues.expiryYear}
              onChange={handleChange}
            >
              <option value="">YYYY</option>
              {years.map((year) => (
                <option key={year.value} value={year.value}>
                  {year.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="cvv">CVV</label>
          <input
            name="cvv"
            type="text"
            value={paymentValues.cvv}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
};

export default PaymentForm;