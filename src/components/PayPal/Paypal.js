import React from "react";

import PaypalExpressBtn from "react-paypal-express-checkout";
import PropTypes from "prop-types";

PayPal.propTypes = {
  amount: PropTypes.any,
  currency: PropTypes.any
};

function PayPal({ amount, currency }) {
  const client = {
    sandbox: process.env.REACT_APP_SECRET_PAYPAL,
    production: "aa"
  };
  return (
    <PaypalExpressBtn client={client} currency={currency} total={amount} />
  );
}

export default PayPal;
