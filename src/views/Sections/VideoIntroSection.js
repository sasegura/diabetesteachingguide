import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
const useStyles = makeStyles(styles);

import {videoIntro} from "assets/text";
import {useTranslation} from "react-i18next";
import YouTube from "react-youtube";


function VideoIntroSection() {
  const {t} = useTranslation();
  const classes = useStyles();
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 0,
      rel: 0
    }
  };

  return (
    <GridContainer justifyContent="center">
      <GridItem xs={12} sm={12} md={10}>
        <h3 className={classes.title}>{t(videoIntro.title)}</h3>
        <YouTube videoId="BHqCdjoWnv0"
                 opts={opts}
                 className={classes.videoFrame}
                 containerClassName={classes.frameContainer}
        />
      </GridItem>
    </GridContainer>
  );
}

export default VideoIntroSection;
