import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import { HeaderBrand } from "../../components/Header/HeaderBrand";
import { termsAndConditions } from "assets/text";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { Helmet } from "react-helmet";
const useStyles = makeStyles(styles);

TermsAndConditions.propTypes = {
  t: PropTypes.func
};

function TermsAndConditions(props) {
  const { t } = props;
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div>
      <Helmet>
            <title>{t(termsAndConditions.pageTitle)}</title>
            <meta name="description" content={termsAndConditions.metaAddress} />
            <meta charSet="utf-8" />
      </Helmet>
      <Header
        color="transparent"
        leftLinks={<HeaderBrand className={classes.navLink} />}
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 50,
          color: "white"
        }}
        {...rest}
      />
      <Parallax
        small
        filter
        image={require("assets/img/profile-bg.jpg").default}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <GridContainer justifyContent="center">
            <GridItem xs={12} sm={12} md={10}>
              <p className={classes.description}>{`${t(
                termsAndConditions.termsAndConditions1
              )}`}</p>
            </GridItem>
            <GridItem xs={12} sm={12} md={10}>
              <p className={classes.description}>{`${t(
                termsAndConditions.termsAndConditions2
              )}`}</p>
            </GridItem>
            <GridItem xs={12} sm={12} md={10}>
              <p className={classes.description}>{`${t(
                termsAndConditions.termsAndConditions3
              )}`}</p>
            </GridItem>
            <GridItem xs={12} sm={12} md={10}>
              <p className={classes.description}>{`${t(
                termsAndConditions.termsAndConditions4
              )}`}</p>
            </GridItem>
            <GridItem xs={12} sm={12} md={10}>
              <b className={classes.description} style={{ float: "right" }}>
                {t(termsAndConditions.termsAndConditions5)}
              </b>
            </GridItem>
            <GridItem xs={12} sm={12} md={10}>
              <b className={classes.description} style={{ float: "right" }}>
                {t(termsAndConditions.termsAndConditions6)}
              </b>
            </GridItem>
            <GridItem xs={12} sm={12} md={10}>
              <b className={classes.description} style={{ float: "right" }}>
                {t(termsAndConditions.termsAndConditions7)}
              </b>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default withTranslation("translations")(TermsAndConditions);
