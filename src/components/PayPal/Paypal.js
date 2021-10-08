import React from "react";

import PayPalCheckout from "react-paypal-checkout-button";
import "react-paypal-checkout-button/dist/index.css";

const PayPal = (amount, currency) => {
  return (
    <PayPalCheckout
      clientId="a*****************************"
      amount={amount}
      currency={currency}
      onSuccess={(data, order) => {
        console.log(data, order);
      }}
      onError={(error) => {
        console.log(error);
      }}
    />
  );
};

export default PayPal;
