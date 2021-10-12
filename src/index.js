import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.10.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import AboutUs from "views/AboutUs/AboutUs";
import TermsAndConditions from "views/TermsAndConditions/TermsAndConditions";
import ProfilePage from "views/AuthenticationRequiered/ProfilePage/ProfilePage";
import FAC from "views/FAC/FAC";
import Forum from "views/AuthenticationRequiered/Forum/Forum";
import { Auth0Provider } from "@auth0/auth0-react";
import Cookies from "components/Cookies";
import "./translations/i18n";

var hist = createBrowserHistory();

ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMINE}
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
    redirectUri={window.location.origin}
  >
    <Router history={hist}>
      <Switch>
        <Route path="/profile-page" component={ProfilePage} />
        <Route path="/FAC" component={FAC} />
        <Route path="/login-page" component={LoginPage} />
        <Route path="/components" component={Components} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/terms-and-conditions" component={TermsAndConditions} />
        <Route path="/chat" render={(props) => <Forum {...props} />} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </Router>
    <Cookies />
  </Auth0Provider>,
  document.getElementById("root")
);
