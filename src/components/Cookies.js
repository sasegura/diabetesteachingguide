import { PropTypes } from "prop-types";
import React from "react";
import CookieConsent from "react-cookie-consent";
import { withTranslation } from "react-i18next";

Cookies.propTypes = {
  t: PropTypes.func
};

function Cookies(props) {
  const { t } = props;
  return (
    <CookieConsent
      location="bottom"
      buttonText={t("Acept")}
      cookieName="myAwesomeCookieName2"
      style={{ background: "#2B373B" }}
      buttonStyle={{
        color: "white",
        fontSize: "13px",
        backgroundColor: "#9c27b0"
      }}
      expires={150}
    >
      {t("This website uses cookies to enhance the user experience.")}
    </CookieConsent>
  );
}
export default withTranslation("translations")(Cookies);
