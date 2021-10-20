import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

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
    <GridContainer justifyContent="center" style={{paddingBottom: "1rem"}}>

      <GridItem xs={12} sm={12} md={10}>
        <Typography variant={"h5"} className={classes.title}>{t(facSection.title)}</Typography>
        <Typography align={"justify"} className={classes.description}>{t(facSection.text1)}</Typography>
      </GridItem>

      {facSection.questions.map((qr) => {
        return (
          <GridItem xs={12} sm={12} md={10} key={qr.q}>
            <Typography className={classes.title}>
              {`${t(facSection.Q)}. ${t(qr.q)}`}
            </Typography>
            <Typography align={"justify"} className={classes.description}>
              {`${t(facSection.A)}. ${t(qr.r)}`}
            </Typography>
          </GridItem>)
      })}
    </GridContainer>
  );
}
export default withTranslation("translations")(FacSection);
