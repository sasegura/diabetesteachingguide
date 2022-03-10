import React from "react";
import ReactDOM from "react-dom";
import {createBrowserHistory} from "history";
import {Route, Router, Switch} from "react-router-dom";

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
import GuidePage from "views/Guide/GuidePage";
// import {Auth0Provider} from "@auth0/auth0-react";
import Cookies from "components/Cookies";
import "./translations/i18n";
import {Typography} from "@material-ui/core";
import {siteRoutes} from "./siteRoutes";
import {FirebaseProvider} from "./firebaseProvider";

const hist = createBrowserHistory();

ReactDOM.render(
    // <Auth0Provider
    //     domain={process.env.REACT_APP_AUTH0_DOMINE}
    //     clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
    //     redirectUri={window.location.origin}
    // >
        <FirebaseProvider>
            <Router history={hist}>
                <Switch>
                    <Route path={siteRoutes.profile} exact component={ProfilePage}/>
                    <Route path={siteRoutes.faq} exact component={FAC}/>
                    <Route path={siteRoutes.login} exact component={LoginPage}/>;
                    <Route path={siteRoutes.components} exact component={Components}/>
                    <Route path={siteRoutes.about} exact component={AboutUs}/>
                    <Route path={siteRoutes.terms} exact component={TermsAndConditions}/>
                    <Route path={siteRoutes.chat} exact render={(props) => <Forum {...props} />}/>
                    <Route path={siteRoutes.guide + "/:slide"} exact component={GuidePage}/>
                    <Route path={siteRoutes.index} exact component={LandingPage}/>
                    <Route render={() => <Typography> Page not found! </Typography>}/>

                </Switch>
            </Router>
            <Cookies/>
        </FirebaseProvider>,
    // </Auth0Provider>,
    document.getElementById("root")
);
