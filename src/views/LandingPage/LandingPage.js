import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "../Sections/ProductSection.js";
import TeamSection from "../Sections/TeamSection.js";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

import { landingPage } from "assets/text";
import { withTranslation } from "react-i18next";
import { HeaderBrand } from "../../components/Header/HeaderBrand";
import MessageSection from "views/Sections/MessageSection.js";
import FacSection from "views/Sections/FacSection.js";
const dashboardRoutes = [];

const useStyles = makeStyles(styles);

LandingPage.propTypes = {
  t: PropTypes.func
};
function LandingPage(props) {
  const { t } = props;
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Helmet>
        <title>{t(landingPage.title)}</title>
        <meta name="description" content={landingPage.meta1} />
        <meta charSet="utf-8" />
      </Helmet>
      <Header
        leftLinks={<HeaderBrand className={classes.navLink} />}
        color="transparent"
        routes={dashboardRoutes}
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 1,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/landing-bg.jpg").default}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <h1 className={classes.title}>{t(landingPage.slogan)}</h1>
              <h4>{t(landingPage.owner)}</h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <TeamSection />
          <FacSection />
          <MessageSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default withTranslation("translations")(LandingPage);
