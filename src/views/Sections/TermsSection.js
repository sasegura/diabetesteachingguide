import React from "react";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import { useTranslation } from "react-i18next";

import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/profilePage.js";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(styles);

function TermsSection() {
  const {t} = useTranslation();
  const classes = useStyles();
  const {texts: termsTexts, sectionTitle: termsTitle} = require("assets/text").termsAndConditions;
  const textsKeys = Object.keys(termsTexts);
  const conditions = textsKeys.slice(0, 4);
  const author = textsKeys.slice(4, textsKeys.length)

  return (
    <GridContainer justifyContent="center" style={{paddingBottom: "1rem"}}>
      <GridItem xs={12} sm={12} md={10}>
        <Typography variant={"h5"} className={classes.title}>
          {t(termsTitle)}
        </Typography>
      </GridItem>

      <GridItem xs={12} sm={12} md={10}>
        {conditions.map((key) => {
          return (
            <Typography key={key} variant={"body1"} align={"justify"}
                        style={{color: "#999", paddingBottom: "1rem"}}>
              {t(termsTexts[key])}
            </Typography>
          );
        })}
      </GridItem>

      <GridItem xs={12} sm={12} md={10}>
        {author.map((key) => {
          return (
            <Typography key={key} variant={"body1"} align={"right"}
                        style={{fontStyle: "bold"}}>
              {t(termsTexts[key])}
            </Typography>
          );
        })}
      </GridItem>
    </GridContainer>);
}

export default TermsSection;