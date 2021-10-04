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
import ProfilePage from "views/AuthenticationRequiered/ProfilePage/ProfilePage";
import { Auth0Provider } from "@auth0/auth0-react";

import "./translations/i18n";
var hist = createBrowserHistory();
import FAC from "views/FAC/FAC";

ReactDOM.render(
  <Auth0Provider
    domain="dev-d3mwcd1i.us.auth0.com"
    clientId="wDf5efZ9obSpYG2mQESLjsJ7CZjAZBoc"
    redirectUri={window.location.origin}
  >
    <Router history={hist}>
      <Switch>
        <Route path="/profile-page" component={ProfilePage} />
        <Route path="/FAC" component={FAC} />
        <Route path="/login-page" component={LoginPage} />
        <Route path="/components" component={Components} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </Router>
  </Auth0Provider>,
  document.getElementById("root")
);
