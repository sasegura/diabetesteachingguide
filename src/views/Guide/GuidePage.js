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

import GuideSection from "views/Sections/GuideSection";
import { Helmet } from "react-helmet";
import { guidePage } from "assets/text";

const useStyles = makeStyles(styles);

GuidePage.propTypes = {
  t: PropTypes.func
};

function GuidePage(props) {
  const classes = useStyles();
  const { t } = props;
  const { ...rest } = props;

  return (
    <div>
      <Helmet>
            <title>{t(guidePage.pageTitle)}</title>
            <meta name="description" content={guidePage.metaAddress} />
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
          <div className={classes.container}>
            <div className={classes.section}>
              <GuideSection />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default withTranslation("translations")(GuidePage);
