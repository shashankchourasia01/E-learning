import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import styled from "styled-components";

import 'react-toastify/dist/ReactToastify.css';

const PaymentPageContainer = styled.div`

height:700px;
   background-image: linear-gradient(90deg, #c6f6fd, #edd8fb);
  display: flex;

  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const PaymentForm = styled.form`

  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
`;

const PaymentField = styled.input`
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const PaymentButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

function Payment() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardOwnerName, setCardOwnerName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [zipCode, setZipCode] = useState("");

  const handleSubmit = (e) => {
    toast.success('Order Placed!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    e.preventDefault();
    // Here you can process the payment data or send it to a backend server for payment processing.
    console.log("Card Number:", cardNumber);
    console.log("Card Owner Name:", cardOwnerName);
    console.log("Expiry Date:", expiryDate);
    console.log("CVV:", cvv);
    console.log("Zip Code:", zipCode);
  };

  return (
    <PaymentPageContainer>

<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />
      <h2>Payment Information</h2>
      <PaymentForm onSubmit={handleSubmit}>
        <PaymentField
          type="text"
          placeholder="Card Number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          required
        />
        <PaymentField
          type="text"
          placeholder="Card Owner Name"
          value={cardOwnerName}
          onChange={(e) => setCardOwnerName(e.target.value)}
          required
        />
        <PaymentField
          type="text"
          placeholder="Expiration Date (MM/YY)"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          required
        />
        <PaymentField
          type="text"
          placeholder="CVV"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          required
        />
        <PaymentField
          type="text"
          placeholder="Zip Code"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          required
        />


        <PaymentButton type="submit">Pay Now</PaymentButton>
      </PaymentForm>
  
    </PaymentPageContainer>
  );
}

export default Payment;
