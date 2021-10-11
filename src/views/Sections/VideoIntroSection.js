import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
const useStyles = makeStyles(styles);

import {teamSection} from "assets/text";
import {useTranslation} from "react-i18next";
import CardMedia from "@material-ui/core/CardMedia";


function VideoIntroSection() {
  const {t} = useTranslation();
  const classes = useStyles();
  return (
    <GridContainer justifyContent="center">
      <GridItem xs={12} sm={12} md={10}>
            <h3 className={classes.title}>{t(teamSection.messageTitle)}</h3>
            <CardMedia component="video"
                       image="/video/WebHooksVideo.mp4"  // todo cambiar el video
                       width="100%"
                       controls
            />
      </GridItem>
    </GridContainer>
  );
}

export default VideoIntroSection;
