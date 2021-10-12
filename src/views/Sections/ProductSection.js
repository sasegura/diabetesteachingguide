import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

import PropTypes from "prop-types";

import { presentations, siteTitle } from "assets/text";
import { withTranslation } from "react-i18next";
import YouTube from "react-youtube";

ProductSection.propTypes = {
  t: PropTypes.func
};

function ProductSection(props) {
  const { t } = props;
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 0
    }
  };
  const classes = useStyles();
  return (
    <div>
      <GridContainer justifyContent="center">
        <GridItem xs={12} sm={12} md={10}>
          <h2 className={classes.title}>{t(siteTitle)}</h2>
          <h5 className={classes.description}>
            {t(presentations.explanation)}
          </h5>
          <YouTube videoId="BHqCdjoWnv0" opts={opts} />
        </GridItem>
      </GridContainer>
    </div>
  );
}
export default withTranslation("translations")(ProductSection);
