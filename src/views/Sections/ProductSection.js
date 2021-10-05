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

ProductSection.propTypes = {
  t: PropTypes.func
};

function ProductSection(props) {
  const { t } = props;
  const classes = useStyles();
  return (
    <div>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={10}>
          <h2 className={classes.title}>{t(siteTitle)}</h2>
          <h5 className={classes.description}>
            {t(presentations.explanation)}
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}
export default withTranslation("translations")(ProductSection);
