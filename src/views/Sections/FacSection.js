import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

import { facSection } from "assets/text";
import { withTranslation } from "react-i18next";
import { PropTypes } from "prop-types";

FacSection.propTypes = {
  t: PropTypes.func
};

function FacSection(props) {
  const { t } = props;
  const classes = useStyles();
  return (
    <div>
      <GridContainer justifyContent="center">
        <GridItem xs={12} sm={12} md={10}>
          <h2 className={classes.title}>{t(facSection.title)}</h2>
          <h5 className={classes.description}>{t(facSection.text1)}</h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer justifyContent="center">
          <GridItem xs={12} sm={12} md={10}>
            <h4 className={classes.title}>{`Q. ${t(facSection.question1)}`}</h4>
            <p className={classes.description}>{`A. ${t(
              facSection.response1
            )}`}</p>
          </GridItem>
          <GridItem xs={12} sm={12} md={10}>
            <h4 className={classes.title}>{`Q. ${t(facSection.question2)}`}</h4>
            <p className={classes.description}>{`A. ${t(
              facSection.response2
            )}`}</p>
          </GridItem>
          <GridItem xs={12} sm={12} md={10}>
            <h4 className={classes.title}>{`Q. ${t(facSection.question3)}`}</h4>
            <p className={classes.description}>{`A. ${t(
              facSection.response3
            )}`}</p>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
export default withTranslation("translations")(FacSection);
