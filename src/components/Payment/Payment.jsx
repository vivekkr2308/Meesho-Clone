// Payment.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Payment.css";

const Payment = () => {
  const navigate = useNavigate();
  const [paymentData, setPaymentData] = useState({
    fullName: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Implement payment processing logic here
    alert("Congrats! Your Order is Placed Successfully!!!");
    navigate("/");
  };

  return (
    <div class="payment-container">
      <h2>Payment</h2>
      <form onSubmit={handlePaymentSubmit}>
        <div class="form-group">
          <label class="label">Full Name</label>
          <input
            class="input"
            required
            type="text"
            pattern="[A-Za-z\s]+"
            value={paymentData.fullName}
            onChange={(e) =>
              setPaymentData({ ...paymentData, fullName: e.target.value })
            }
          />
        </div>
        <div class="form-group">
          <label htmlFor="">Payment Option:</label>
          <select name="payment" id="paymentValue" required>
            <option value=""></option>
            <option value="">Credit card</option>
            <option value="">Debit card</option>
          </select>
        </div>

        <div class="form-group">
          <label class="label">Card Number</label>
          <input
            class="input"
            required
            type="number"
            value={paymentData.cardNumber}
            onChange={(e) =>
              setPaymentData({ ...paymentData, cardNumber: e.target.value })
            }
          />
        </div>
        <div class="form-group">
          <label class="label">Expiration Date</label>
          <input
            class="input"
            required
            type="month"
            value={paymentData.expirationDate}
            onChange={(e) =>
              setPaymentData({ ...paymentData, expirationDate: e.target.value })
            }
          />
        </div>
        <div class="form-group">
          <label class="label">CVV</label>
          <input
            class="input"
            required
            type="number"
            value={paymentData.cvv}
            onChange={(e) =>
              setPaymentData({ ...paymentData, cvv: e.target.value })
            }
          />
        </div>
        <button class="submit-button" type="submit">
          Submit Payment
        </button>
      </form>
    </div>
  );
};

export default Payment;
